import {
  FaBullhorn,
  FaFolderOpen,
  FaComments,
  FaClock,
} from "react-icons/fa6";

function OverviewPanel({
    role,
    subjectId
}) {
  const activities = [
    "Faculty uploaded Unit 3 Notes",
    "New discussion started: AVL Trees",
    "Internal Test Announcement published",
    "Lab Schedule updated",
  ];

  const stats = [
  {
    title: "Announcements",
    value: 6,
    icon: <FaBullhorn />,
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    title: "Resources",
    value: 18,
    icon: <FaFolderOpen />,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Discussions",
    value: 25,
    icon: <FaComments />,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Upcoming Events",
    value: 4,
    icon: <FaClock />,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

return (
  <div className="space-y-6">

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-5"
        >

          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.bg}`}
          >
            <span className={`${item.color}`}>
              {item.icon}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            {item.value}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {item.title}
          </p>

        </div>
      ))}

    </div>

    {/* Recent Activity */}
    <div className="bg-white border rounded-xl shadow-sm">

      <div className="p-5 border-b">

        <h2 className="text-lg font-semibold text-gray-800">
          Recent Activity
        </h2>

      </div>

      <div className="divide-y">

        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 hover:bg-gray-50 transition"
          >

            <div className="w-2 h-2 rounded-full bg-blue-600"></div>

            <p className="text-sm text-gray-700">
              {item}
            </p>

          </div>
        ))}

      </div>

    </div>

  </div>
);
}

export default OverviewPanel;