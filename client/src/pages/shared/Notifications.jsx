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
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold">
            Notifications
          </h1>

          <p className="text-gray-500 mt-2">
            Stay updated with important activities.
          </p>
        </div>

        <div className="space-y-4">

          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white rounded-xl shadow-sm border p-5 flex justify-between items-start"
            >
              <div className="flex gap-4">

                <div className="text-2xl">
                  {getIcon(notification.type)}
                </div>

                <div>
                  <h3 className="font-semibold">
                    {notification.title}
                  </h3>

                  <p className="text-gray-600 mt-1">
                    {notification.message}
                  </p>

                  <p className="text-sm text-gray-400 mt-2">
                    {notification.time}
                  </p>
                </div>

              </div>

              {user.role === "admin" && (
                <button className="text-red-600 hover:text-red-700">
                  Delete
                </button>
              )}

            </div>
          ))}

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Notifications;