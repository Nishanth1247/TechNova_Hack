import {
  FaBullhorn,
  FaFolderOpen,
  FaComments,
  FaClipboardCheck,
  FaArrowTrendUp,
} from "react-icons/fa6";

function StudentStats() {

  const stats = [
    {
      title: "New Announcements",
      value: "2",
      subtitle: "Unread updates",
      icon: <FaBullhorn />,
      bg: "bg-red-100",
      color: "text-red-600",
      trend: "+1 Today",
    },
    {
      title: "New Resources",
      value: "5",
      subtitle: "Recently uploaded",
      icon: <FaFolderOpen />,
      bg: "bg-blue-100",
      color: "text-blue-700",
      trend: "+3 Today",
    },
    {
      title: "Faculty Replies",
      value: "4",
      subtitle: "Discussion responses",
      icon: <FaComments />,
      bg: "bg-green-100",
      color: "text-green-700",
      trend: "+2 Today",
    },
    {
      title: "Pending Tasks",
      value: "3",
      subtitle: "Assignments & activities",
      icon: <FaClipboardCheck />,
      bg: "bg-yellow-100",
      color: "text-yellow-700",
      trend: "Due Today",
    },
  ];

  return (
  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

    {stats.map((item, index) => (

      <div
        key={index}
        className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition"
      >

        {/* Top */}
        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm font-medium text-gray-500">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              {item.value}
            </h2>

          </div>

          <div
            className={`h-12 w-12 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}
          >
            <span className="text-lg">
              {item.icon}
            </span>
          </div>

        </div>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mt-4">
          {item.subtitle}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">

          <div className="flex items-center gap-2 text-green-600">

            <FaArrowTrendUp size={14} />

            <span className="text-sm font-medium">
              {item.trend}
            </span>

          </div>

          <span className="text-xs text-gray-400">
            Updated
          </span>

        </div>

      </div>

    ))}

  </div>
);
}

export default StudentStats;