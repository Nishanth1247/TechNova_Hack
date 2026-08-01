import {
  FaBullhorn,
  FaFolderOpen,
  FaComments,
  FaDownload,
  FaCircleCheck,
  FaClock,
  FaArrowRight,
} from "react-icons/fa6";

function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "announcement",
      title: "Internal Assessment Schedule Published",
      description: "Announcement sent to 182 students.",
      time: "15 mins ago",
    },
    {
      id: 2,
      type: "resource",
      title: "Uploaded Unit 4 Notes",
      description: "PDF shared in Data Structures workspace.",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "discussion",
      title: "Replied to AVL Tree Discussion",
      description: "Marked the answer as accepted.",
      time: "2 hours ago",
    },
    {
      id: 4,
      type: "download",
      title: "Lab Manual Downloaded",
      description: "42 students downloaded the latest version.",
      time: "Yesterday",
    },
    {
      id: 5,
      type: "completed",
      title: "Support Ticket Resolved",
      description: "Issue regarding timetable access resolved.",
      time: "Yesterday",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "announcement":
        return (
          <div className="bg-blue-100 p-3 rounded-xl">
            <FaBullhorn className="text-blue-700 text-xl" />
          </div>
        );

      case "resource":
        return (
          <div className="bg-green-100 p-3 rounded-xl">
            <FaFolderOpen className="text-green-700 text-xl" />
          </div>
        );

      case "discussion":
        return (
          <div className="bg-purple-100 p-3 rounded-xl">
            <FaComments className="text-purple-700 text-xl" />
          </div>
        );

      case "download":
        return (
          <div className="bg-orange-100 p-3 rounded-xl">
            <FaDownload className="text-orange-700 text-xl" />
          </div>
        );

      default:
        return (
          <div className="bg-green-100 p-3 rounded-xl">
            <FaCircleCheck className="text-green-700 text-xl" />
          </div>
        );
    }
  };

  return (
  <div className="bg-white border rounded-xl shadow-sm">

    {/* Header */}
    <div className="flex justify-between items-center p-5 border-b">

      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Activity
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Your latest activities across CampusConnect.
        </p>
      </div>

      <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition">
        View All
        <FaArrowRight size={12} />
      </button>

    </div>

    {/* Timeline */}
    <div className="p-5">

      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200"></div>

        <div className="space-y-6">

          {activities.map((activity) => (
            <div
              key={activity.id}
              className="relative flex gap-4"
            >

              {/* Icon */}
              <div className="relative z-10">
                {getIcon(activity.type)}
              </div>

              {/* Content */}
              <div className="flex-1">

                <h3 className="font-medium text-gray-800">
                  {activity.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  {activity.description}
                </p>

                <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                  <FaClock />
                  {activity.time}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>

    {/* Footer */}
    <div className="border-t p-5 flex justify-between items-center">

      <span className="text-sm text-gray-500">
        Activities Today
      </span>

      <span className="text-xl font-bold text-blue-700">
        18
      </span>

    </div>

  </div>
);
}

export default RecentActivity;