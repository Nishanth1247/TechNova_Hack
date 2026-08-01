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
    <div className="bg-white rounded-2xl shadow-sm border">

      {/* Header */}

      <div className="flex justify-between items-center p-6 border-b">

        <div>

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <p className="text-gray-500 mt-2">
            Your latest activities in CampusConnect.
          </p>

        </div>

        <button className="text-blue-700 font-semibold flex items-center gap-2 hover:text-blue-900">

          View History

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
          Activities This Week
        </span>

        <span className="text-blue-700 font-bold text-xl">
          27
        </span>

      </div>

    </div>
  );
}

export default StudentActivity;