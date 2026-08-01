import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaBell,
  FaLock,
  FaMoon,
  FaGlobe,
  FaUserShield,
  FaFloppyDisk,
} from "react-icons/fa6";

function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    emergencyAlerts: true,
    darkMode: false,
    language: "English",
    profileVisibility: "College Only",
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

  return (
    <DashboardLayout role="student">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl text-white p-8">

          <h1 className="text-4xl font-bold">
            Settings
          </h1>

          <p className="text-blue-200 mt-2">
            Manage your preferences and account settings.
          </p>

        </div>

        {/* Notifications */}

        <div className="bg-white rounded-2xl shadow border p-6">

          <div className="flex items-center gap-3 mb-6">

            <FaBell className="text-blue-700 text-xl"/>

            <h2 className="text-2xl font-semibold">

              Notifications

            </h2>

          </div>

          <div className="space-y-5">

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
              title="Emergency Alerts"
              checked={settings.emergencyAlerts}
              onChange={() => handleToggle("emergencyAlerts")}
            />

          </div>

        </div>

        {/* Appearance */}

        <div className="bg-white rounded-2xl shadow border p-6">

          <div className="flex items-center gap-3 mb-6">

            <FaMoon className="text-indigo-600"/>

            <h2 className="text-2xl font-semibold">

              Appearance

            </h2>

          </div>

          <SettingToggle
            title="Dark Mode"
            checked={settings.darkMode}
            onChange={() => handleToggle("darkMode")}
          />

        </div>

        {/* Language */}

        <div className="bg-white rounded-2xl shadow border p-6">

          <div className="flex items-center gap-3 mb-6">

            <FaGlobe className="text-green-600"/>

            <h2 className="text-2xl font-semibold">

              Language

            </h2>

          </div>

          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
            className="border rounded-lg px-4 py-3 w-full"
          >
            <option>English</option>
            <option>Tamil</option>
          </select>

        </div>

        {/* Privacy */}

        <div className="bg-white rounded-2xl shadow border p-6">

          <div className="flex items-center gap-3 mb-6">

            <FaUserShield className="text-red-600"/>

            <h2 className="text-2xl font-semibold">

              Privacy

            </h2>

          </div>

          <label className="block mb-2 font-medium">

            Profile Visibility

          </label>

          <select
            name="profileVisibility"
            value={settings.profileVisibility}
            onChange={handleChange}
            className="border rounded-lg px-4 py-3 w-full"
          >
            <option>College Only</option>
            <option>Department Only</option>
            <option>Private</option>
          </select>

        </div>

        {/* Security */}

        <div className="bg-white rounded-2xl shadow border p-6">

          <div className="flex items-center gap-3 mb-6">

            <FaLock className="text-orange-500"/>

            <h2 className="text-2xl font-semibold">

              Security

            </h2>

          </div>

          <button className="border px-6 py-3 rounded-lg hover:bg-gray-50">

            Change Password

          </button>

        </div>

        {/* Save */}

        <div className="flex justify-end">

          <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg flex items-center gap-2">

            <FaFloppyDisk />

            Save Changes

          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}

function SettingToggle({ title, checked, onChange }) {
  return (
    <div className="flex justify-between items-center border-b pb-4">

      <span className="font-medium">{title}</span>

      <button
        onClick={onChange}
        className={`w-14 h-7 rounded-full transition ${
          checked ? "bg-blue-700" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full mt-0.5 transition ${
            checked ? "translate-x-7" : "translate-x-0.5"
          }`}
        />
      </button>

    </div>
  );
}

export default Settings;