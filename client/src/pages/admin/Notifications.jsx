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

function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "Announcement",
      title: "New Mid Semester Examination Schedule Published",
      time: "5 mins ago",
      icon: <FaBullhorn className="text-blue-600" />,
      color: "bg-blue-50",
      unread: true,
    },
    {
      id: 2,
      type: "Resource",
      title: "Data Structures Unit-1 Notes Uploaded",
      time: "30 mins ago",
      icon: <FaFolderOpen className="text-green-600" />,
      color: "bg-green-50",
      unread: true,
    },
    {
      id: 3,
      type: "Support",
      title: "Support Ticket #SUP-101 marked as Resolved",
      time: "2 hours ago",
      icon: <FaHeadset className="text-orange-600" />,
      color: "bg-orange-50",
      unread: false,
    },
    {
      id: 4,
      type: "Emergency",
      title: "Emergency Drill Scheduled Tomorrow",
      time: "Yesterday",
      icon: <FaTriangleExclamation className="text-red-600" />,
      color: "bg-red-50",
      unread: false,
    },
  ];

  return (
    <DashboardLayout >
      {/* Header */}

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Notification Center
          </h1>

          <p className="text-gray-500 mt-2">
            Track all system notifications in one place.
          </p>
        </div>

        <button className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-lg flex items-center gap-2">
          <FaCircleCheck />
          Mark All Read
        </button>

      </div>

      {/* Notifications */}

      <div className="space-y-5 mt-8">

        {notifications.map((item) => (

          <div
            key={item.id}
            className={`rounded-2xl shadow-sm p-6 flex justify-between items-center border ${item.color}`}
          >

            <div className="flex items-start gap-5">

              <div className="text-3xl mt-1">
                {item.icon}
              </div>

              <div>

                <div className="flex items-center gap-3">

                  <h2 className="font-semibold text-lg">
                    {item.title}
                  </h2>

                  {item.unread && (
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}

                </div>

                <p className="text-gray-500 mt-2">
                  {item.type}
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  {item.time}
                </p>

              </div>

            </div>

            <button className="text-red-600 hover:text-red-800">
              <FaTrash size={20} />
            </button>

          </div>

        ))}

      </div>

      {/* Empty State */}

      {notifications.length === 0 && (
        <div className="bg-white rounded-2xl shadow-sm p-12 text-center mt-8">

          <FaBell
            className="mx-auto text-gray-400"
            size={60}
          />

          <h2 className="text-2xl font-semibold mt-5">
            No Notifications
          </h2>

          <p className="text-gray-500 mt-2">
            You're all caught up.
          </p>

        </div>
      )}

    </DashboardLayout>
  );
}

export default Notifications;