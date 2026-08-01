import DashboardLayout from "../../layouts/DashboardLayout";
import { useAuth } from "../../context/AuthContext";

import {
  FaBell,
  FaCircleCheck,
  FaTriangleExclamation,
  FaBullhorn,
} from "react-icons/fa6";

function Notifications() {
  const { user } = useAuth();

  const notifications = [
    {
      id: 1,
      title: "New Announcement",
      message: "Internal Assessment schedule has been published.",
      time: "10 minutes ago",
      type: "announcement",
    },
    {
      id: 2,
      title: "Assignment Reminder",
      message: "DBMS Assignment is due tomorrow.",
      time: "2 hours ago",
      type: "warning",
    },
    {
      id: 3,
      title: "Resource Uploaded",
      message: "Unit 4 Notes have been uploaded.",
      time: "Yesterday",
      type: "success",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "announcement":
        return <FaBullhorn className="text-blue-600" />;
      case "warning":
        return <FaTriangleExclamation className="text-yellow-600" />;
      default:
        return <FaCircleCheck className="text-green-600" />;
    }
  };

  return (
  <DashboardLayout>
    <div className="max-w-6xl mx-auto space-y-8">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Notifications
          </h1>

          <p className="mt-2 text-gray-500">
            Stay updated with important activities.
          </p>

        </div>

        <div className="hidden md:flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl">

          <FaBell />

          <span className="font-medium">
            {notifications.length} Notifications
          </span>

        </div>

      </div>

      {/* Notifications List */}

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

        <div className="px-6 py-5 border-b border-gray-200">

          <h2 className="text-lg font-semibold text-gray-800">
            Recent Notifications
          </h2>

        </div>

        <div className="divide-y divide-gray-100">

          {notifications.map((notification) => (

            <div
              key={notification.id}
              className="flex items-start justify-between p-6 hover:bg-gray-50 transition"
            >

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl">

                  {getIcon(notification.type)}

                </div>

                <div>

                  <h3 className="font-semibold text-gray-800">
                    {notification.title}
                  </h3>

                  <p className="mt-1 text-gray-600">
                    {notification.message}
                  </p>

                  <p className="mt-3 text-sm text-gray-400">
                    {notification.time}
                  </p>

                </div>

              </div>

              {user.role === "admin" && (

                <button className="rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition">

                  Delete

                </button>

              )}

            </div>

          ))}

        </div>

      </div>

    </div>
  </DashboardLayout>
);
}

export default Notifications;