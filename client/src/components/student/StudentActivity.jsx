import {
  FaDownload,
  FaBullhorn,
  FaComments,
  FaClipboardCheck,
  FaCircleCheck,
  FaClock,
  FaArrowRight,
} from "react-icons/fa6";

function StudentActivity() {

  const activities = [
    {
      id: 1,
      type: "download",
      title: "Downloaded Unit 4 Notes",
      description: "Data Structures",
      time: "15 mins ago",
    },
    {
      id: 2,
      type: "announcement",
      title: "Acknowledged Exam Schedule",
      description: "Department Announcement",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "discussion",
      title: "Asked a Question",
      description: "AVL Tree Rotation",
      time: "Yesterday",
    },
    {
      id: 4,
      type: "assignment",
      title: "Submitted DBMS Assignment",
      description: "Assignment 4",
      time: "Yesterday",
    },
    {
      id: 5,
      type: "completed",
      title: "Support Ticket Closed",
      description: "Timetable Issue",
      time: "2 days ago",
    },
  ];

  const getIcon = (type) => {
    switch (type) {

      case "download":
        return (
          <div className="bg-blue-100 p-3 rounded-xl">
            <FaDownload className="text-blue-700 text-xl" />
          </div>
        );

      case "announcement":
        return (
          <div className="bg-orange-100 p-3 rounded-xl">
            <FaBullhorn className="text-orange-700 text-xl" />
          </div>
        );

      case "discussion":
        return (
          <div className="bg-purple-100 p-3 rounded-xl">
            <FaComments className="text-purple-700 text-xl" />
          </div>
        );

      case "assignment":
        return (
          <div className="bg-red-100 p-3 rounded-xl">
            <FaClipboardCheck className="text-red-700 text-xl" />
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
  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">

    {/* Header */}
    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">

      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Activity
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Track your latest activities in CampusConnect.
        </p>
      </div>

      <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition">

        View History

        <FaArrowRight size={14} />

      </button>

    </div>

    {/* Timeline */}
    <div className="p-6">

      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gray-200"></div>

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
              <div className="flex-1 border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition">

                <div className="flex justify-between items-start gap-4">

                  <div>

                    <h3 className="text-base font-semibold text-gray-800">
                      {activity.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {activity.description}
                    </p>

                  </div>

                  <div className="flex items-center gap-1 text-xs text-gray-400 whitespace-nowrap">

                    <FaClock size={12} />

                    {activity.time}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

    {/* Footer */}
    <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-2xl">

      <span className="text-sm text-gray-600">
        Activities This Week
      </span>

      <span className="text-lg font-semibold text-blue-600">
        27
      </span>

    </div>

  </div>
);
}

export default StudentActivity;