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
    <div className="bg-white rounded-2xl shadow-sm border">

      {/* Header */}

      <div className="flex justify-between items-center p-6 border-b">

        <div>

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <p className="text-gray-500 mt-2">
            Your latest activities across CampusConnect.
          </p>

        </div>

        <button className="text-blue-700 font-semibold flex items-center gap-2 hover:text-blue-900">

          View All

          <FaArrowRight />

        </button>

      </div>

      {/* Timeline */}

      <div className="p-6">

        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-8">

            {activities.map((activity) => (

              <div
                key={activity.id}
                className="relative flex gap-5"
              >

                <div className="relative z-10">

                  {getIcon(activity.type)}

                </div>

                <div className="flex-1">

                  <h3 className="font-semibold text-lg">

                    {activity.title}

                  </h3>

                  <p className="text-gray-500 mt-1">

                    {activity.description}

                  </p>

                  <div className="flex items-center gap-2 mt-3 text-sm text-gray-400">

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

      <div className="bg-gray-50 border-t rounded-b-2xl p-5 flex justify-between items-center">

        <span className="text-gray-600">
          Activities Today
        </span>

        <span className="font-bold text-blue-700 text-xl">
          18
        </span>

      </div>

    </div>
  );
}

export default RecentActivity;