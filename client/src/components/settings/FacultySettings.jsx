import { useState } from "react";
import {
  FaBell,
  FaLock,
  FaMoon,
  FaGlobe,
  FaUserShield,
  FaBookOpen,
  FaFileArrowUp,
  FaFloppyDisk,
} from "react-icons/fa6";
import SettingToggle from "./SettingToggle";

function FacultySettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    announcementNotifications: true,
    assignmentNotifications: true,
    resourceUploadNotifications: true,
    darkMode: false,
    language: "English",
    profileVisibility: "College Only",
    defaultDepartment: "Computer Science",
    defaultSubject: "Data Structures",
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
    alert("Faculty settings saved successfully.");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl text-white p-8">

        <h1 className="text-4xl font-bold">
          Faculty Settings
        </h1>

        <p className="mt-2 text-blue-100">
          Customize your teaching and communication preferences.
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
          title="Announcement Notifications"
          checked={settings.announcementNotifications}
          onChange={() => handleToggle("announcementNotifications")}
        />

        <SettingToggle
          title="Assignment Notifications"
          checked={settings.assignmentNotifications}
          onChange={() => handleToggle("assignmentNotifications")}
        />

      </Section>

      {/* Teaching Preferences */}
      <Section
        icon={<FaBookOpen className="text-green-600" />}
        title="Teaching Preferences"
      >

        <label className="block text-sm font-medium mb-2">
          Default Department
        </label>

        <select
          name="defaultDepartment"
          value={settings.defaultDepartment}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        >
          <option>Computer Science</option>
          <option>Information Technology</option>
          <option>Electronics</option>
          <option>Mechanical</option>
        </select>

        <label className="block text-sm font-medium mt-5 mb-2">
          Default Subject
        </label>

        <input
          type="text"
          name="defaultSubject"
          value={settings.defaultSubject}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />

      </Section>

      {/* Resources */}
      <Section
        icon={<FaFileArrowUp className="text-purple-600" />}
        title="Resource Upload"
      >

        <SettingToggle
          title="Notify Students After Upload"
          checked={settings.resourceUploadNotifications}
          onChange={() =>
            handleToggle("resourceUploadNotifications")
          }
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
          Language
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

      {/* Security */}
      <Section
        icon={<FaLock className="text-orange-500" />}
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
          className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition"
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



export default FacultySettings;