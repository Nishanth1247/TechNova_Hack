import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaBell,
  FaBullhorn,
  FaFolderOpen,
  FaHeadset,
  FaTriangleExclamation,
  FaCircleCheck,
  FaTrash,
} from "react-icons/fa6";
import { useEffect, useState } from "react";

import {
    getNotifications,
    markAllRead,
    deleteNotification,
} from "../../api/notificationApi";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    loadNotifications();
}, []);

const loadNotifications = async () => {

    try {

        const data = await getNotifications();

        setNotifications(data);

    } catch (err) {

        console.log(err);

    }

};

const getIcon = (title) => {

    const text = title.toLowerCase();

    if (text.includes("announcement"))
        return <FaBullhorn className="text-blue-600" />;

    if (text.includes("resource"))
        return <FaFolderOpen className="text-green-600" />;

    if (text.includes("support"))
        return <FaHeadset className="text-orange-600" />;

    if (text.includes("emergency"))
        return <FaTriangleExclamation className="text-red-600" />;

    return <FaBell className="text-gray-600" />;

};

  return (
  <DashboardLayout>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white border rounded-xl shadow-sm p-6 flex flex-col md:flex-row justify-between md:items-center gap-4">

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Notification Center
            </h1>

            <p className="text-gray-500 mt-1">
              Track all system notifications in one place.
            </p>
          </div>

          <button
    onClick={async () => {
        await markAllRead();
        loadNotifications();
    }}
    className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg transition"
>
    <FaCircleCheck />
    Mark All Read
</button>

        </div>

        {/* Notifications */}
        {notifications.length > 0 ? (
          <div className="bg-white border rounded-xl shadow-sm mt-6 divide-y">

            {notifications.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-start p-5 hover:bg-gray-50 transition"
              >

                <div className="flex gap-4">

                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-lg text-blue-600">
                    {getIcon(item.title)}
                  </div>

                  <div>

                    <div className="flex items-center gap-2 flex-wrap">

                      <h2 className="font-semibold text-gray-800">
                        {item.title}
                      </h2>

                     {!item.is_read && (
    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
        New
    </span>
)}

                    </div>

                    <p className="text-sm text-gray-600 mt-1">
                      {item.message}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(item.created_at).toLocaleString()}
                    </p>

                  </div>

                </div>

                <button
    onClick={async () => {

        if (window.confirm("Delete notification?")) {

            await deleteNotification(item.id);

            loadNotifications();

        }

    }}
    className="p-2 rounded-lg text-red-500 hover:bg-red-100 transition"
>
                  <FaTrash />
                </button>

              </div>
            ))}

          </div>
        ) : (
          <div className="bg-white border rounded-xl shadow-sm p-12 text-center mt-6">

            <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
              <FaBell className="text-gray-400 text-2xl" />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mt-5">
              No Notifications
            </h2>

            <p className="text-gray-500 mt-2">
              You're all caught up.
            </p>

          </div>
        )}

      </div>
    </div>
  </DashboardLayout>
);
}

export default Notifications;