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
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Create Alert */}

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8">

          <div className="flex items-center gap-3 mb-6">

            <FaTriangleExclamation
              className="text-red-600 text-3xl"
            />

            <h1 className="text-3xl font-bold">
              Emergency Broadcast
            </h1>

          </div>

          <form
            onSubmit={handleSend}
            className="space-y-6"
          >

            <div>

              <label className="block mb-2 font-medium">
                Alert Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter emergency title..."
                className="w-full border rounded-lg px-4 py-3"
                required
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Alert Message
              </label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe the emergency..."
                className="w-full border rounded-lg px-4 py-3 resize-none"
                required
              />

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label className="block mb-2 font-medium">
                  Severity
                </label>

                <select
                  name="severity"
                  value={formData.severity}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Critical</option>
                </select>

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Target
                </label>

                <select
                  name="target"
                  value={formData.target}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                >
                  <option>Entire College</option>
                  <option>CSE Department</option>
                  <option>IT Department</option>
                  <option>ECE Department</option>
                  <option>Hostel Students</option>
                </select>

              </div>

            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg flex items-center gap-2"
            >
              <FaPaperPlane />
              Broadcast Alert
            </button>

          </form>

        </div>

        {/* History */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <div className="flex items-center gap-2 mb-6">

            <FaClockRotateLeft />

            <h2 className="text-xl font-semibold">
              Recent Alerts
            </h2>

          </div>

          <div className="space-y-5">

            {history.map((item) => (

              <div
                key={item.id}
                className="border rounded-xl p-4"
              >

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {item.time}
                </p>

                <p className="mt-2">
                  <strong>Severity:</strong> {item.severity}
                </p>

                <p>
                  <strong>Target:</strong> {item.target}
                </p>

                <div className="mt-3 flex items-center gap-2 text-green-600">

                  <FaCircleCheck />

                  {item.status}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default EmergencyAlerts;