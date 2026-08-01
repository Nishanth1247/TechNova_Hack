import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaTriangleExclamation,
  FaPaperPlane,
  FaClockRotateLeft,
  FaCircleCheck,
} from "react-icons/fa6";

function EmergencyAlerts() {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    severity: "High",
    target: "Entire College",
  });

  const history = [
    {
      id: 1,
      title: "Heavy Rain - Afternoon Classes Suspended",
      severity: "Critical",
      target: "Entire College",
      time: "31 Jul 2026 • 11:30 AM",
      status: "Delivered",
    },
    {
      id: 2,
      title: "Fire Safety Drill",
      severity: "Medium",
      target: "CSE Block",
      time: "28 Jul 2026 • 10:00 AM",
      status: "Delivered",
    },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSend = (e) => {
    e.preventDefault();

    alert("Emergency Alert Sent Successfully!");

    setFormData({
      title: "",
      message: "",
      severity: "High",
      target: "Entire College",
    });
  };

  return (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* Create Alert */}
      <div className="lg:col-span-2">

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Emergency Broadcast
          </h1>

          <p className="mt-2 text-gray-500">
            Send emergency notifications to students and faculty instantly.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

          <form
            onSubmit={handleSend}
            className="p-8 space-y-8"
          >

            {/* Alert Details */}

            <div>

              <h2 className="text-lg font-semibold text-gray-700 mb-5">
                Alert Details
              </h2>

              <div className="space-y-6">

                <div>

                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Alert Title
                  </label>

                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter emergency title..."
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    required
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Alert Message
                  </label>

                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the emergency..."
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    required
                  />

                </div>

              </div>

            </div>

            {/* Alert Settings */}

            <div>

              <h2 className="text-lg font-semibold text-gray-700 mb-5">
                Alert Settings
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>

                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Severity
                  </label>

                  <select
                    name="severity"
                    value={formData.severity}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>

                </div>

                <div>

                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Target Audience
                  </label>

                  <select
                    name="target"
                    value={formData.target}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  >
                    <option>Entire College</option>
                    <option>CSE Department</option>
                    <option>IT Department</option>
                    <option>ECE Department</option>
                    <option>Hostel Students</option>
                  </select>

                </div>

              </div>

            </div>

            {/* Warning Box */}

            <div className="rounded-xl border border-red-200 bg-red-50 p-5">

              <div className="flex items-start gap-3">

                <FaTriangleExclamation className="text-red-600 text-xl mt-1" />

                <div>

                  <h3 className="font-semibold text-red-700">
                    Important
                  </h3>

                  <p className="text-sm text-red-600 mt-1">
                    Emergency broadcasts are immediately delivered to all selected
                    recipients and cannot be recalled.
                  </p>

                </div>

              </div>

            </div>

            {/* Button */}

            <div className="flex justify-end border-t border-gray-200 pt-6">

              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-red-600 px-8 py-3 text-white font-medium hover:bg-red-700 transition"
              >
                <FaPaperPlane />
                Broadcast Alert
              </button>

            </div>

          </form>

        </div>

      </div>

      {/* Recent Alerts */}

      <div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

          <div className="border-b border-gray-200 px-6 py-5 flex items-center gap-3">

            <FaClockRotateLeft className="text-gray-600" />

            <h2 className="text-xl font-semibold text-gray-800">
              Recent Alerts
            </h2>

          </div>

          <div className="p-6 space-y-5">

            {history.map((item) => (

              <div
                key={item.id}
                className="rounded-xl border border-gray-200 p-5 hover:shadow-sm transition"
              >

                <h3 className="font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {item.time}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">

                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                    {item.severity}
                  </span>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                    {item.target}
                  </span>

                </div>

                <div className="mt-4 flex items-center gap-2 text-green-600 text-sm font-medium">

                  <FaCircleCheck />

                  {item.status}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  </DashboardLayout>
);
}

export default EmergencyAlerts;