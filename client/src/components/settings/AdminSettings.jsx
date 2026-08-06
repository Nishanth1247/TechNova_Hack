import { useState } from "react";
import {
  FaBell,
  FaLock,
  FaMoon,
  FaGlobe,
  FaUserShield,
  FaDatabase,
  FaUsers,
  FaFloppyDisk,
} from "react-icons/fa6";
import SettingToggle from "./SettingToggle";

function AdminSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    emergencyAlerts: true,
    darkMode: false,
    language: "English",
    profileVisibility: "College Only",
    allowUserRegistration: true,
    maintenanceMode: false,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleChange = (e) => {
    setSettings((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    alert("Settings saved successfully.");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 to-red-500 rounded-2xl text-white p-8">

        <h1 className="text-4xl font-bold">
          Admin Settings
        </h1>

        <p className="mt-2 text-red-100">
          Configure platform settings and system preferences.
        </p>

      </div>

      {/* Notifications */}
      <Section
        icon={<FaBell className="text-blue-600" />}
        title="Notifications"
      >

        <SettingToggle
          title="Email Notifications"
          checked={settings.emailNotifications}
          onChange={() => handleToggle("emailNotifications")}
        />

        <SettingToggle
          title="Push Notifications"
          checked={settings.pushNotifications}
          onChange={() => handleToggle("pushNotifications")}
        />

        <SettingToggle
          title="Emergency Broadcast Alerts"
          checked={settings.emergencyAlerts}
          onChange={() => handleToggle("emergencyAlerts")}
        />

      </Section>

      {/* Appearance */}
      <Section
        icon={<FaMoon className="text-indigo-600" />}
        title="Appearance"
      >

        <SettingToggle
          title="Dark Mode"
          checked={settings.darkMode}
          onChange={() => handleToggle("darkMode")}
        />

      </Section>

      {/* Language */}
      <Section
        icon={<FaGlobe className="text-green-600" />}
        title="Language"
      >

        <label className="block text-sm font-medium mb-2">
          System Language
        </label>

        <select
          name="language"
          value={settings.language}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        >
          <option>English</option>
          <option>Tamil</option>
        </select>

      </Section>

      {/* Privacy */}
      <Section
        icon={<FaUserShield className="text-red-600" />}
        title="Privacy"
      >

        <label className="block text-sm font-medium mb-2">
          Profile Visibility
        </label>

        <select
          name="profileVisibility"
          value={settings.profileVisibility}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        >
          <option>College Only</option>
          <option>Department Only</option>
          <option>Private</option>
        </select>

      </Section>

      {/* User Management */}
      <Section
        icon={<FaUsers className="text-purple-600" />}
        title="User Management"
      >

        <SettingToggle
          title="Allow New User Registration"
          checked={settings.allowUserRegistration}
          onChange={() => handleToggle("allowUserRegistration")}
        />

      </Section>

      {/* System */}
      <Section
        icon={<FaDatabase className="text-orange-600" />}
        title="System"
      >

        <SettingToggle
          title="Maintenance Mode"
          checked={settings.maintenanceMode}
          onChange={() => handleToggle("maintenanceMode")}
        />

        <button className="mt-5 border px-5 py-3 rounded-lg hover:bg-gray-100 transition">
          Backup Database
        </button>

      </Section>

      {/* Security */}
      <Section
        icon={<FaLock className="text-yellow-600" />}
        title="Security"
      >

        <button className="border px-5 py-3 rounded-lg hover:bg-gray-100 transition">
          Change Password
        </button>

      </Section>

      {/* Save */}
      <div className="flex justify-end">

        <button
          onClick={handleSave}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition"
        >
          <FaFloppyDisk />

          Save Changes
        </button>

      </div>

    </div>
  );
}

function Section({ icon, title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow border p-6">

      <div className="flex items-center gap-3 mb-6">

        <div className="text-xl">
          {icon}
        </div>

        <h2 className="text-2xl font-semibold">
          {title}
        </h2>

      </div>

      <div className="space-y-5">
        {children}
      </div>

    </div>
  );
}



export default AdminSettings;