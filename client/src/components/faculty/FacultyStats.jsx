import {
  FaFolderOpen,
  FaBullhorn,
  FaComments,
  FaHeadset,
  FaArrowTrendUp,
  FaArrowTrendDown,
} from "react-icons/fa6";

function FacultyStats() {
  const stats = [
    {
      title: "Resources Uploaded",
      value: "48",
      icon: <FaFolderOpen />,
      color: "text-blue-700",
      bg: "bg-blue-100",
      trend: "+6 this week",
      trendIcon: <FaArrowTrendUp />,
      trendColor: "text-green-600",
    },
    {
      title: "Announcements",
      value: "14",
      icon: <FaBullhorn />,
      color: "text-orange-600",
      bg: "bg-orange-100",
      trend: "+2 today",
      trendIcon: <FaArrowTrendUp />,
      trendColor: "text-green-600",
    },
    {
      title: "Pending Doubts",
      value: "7",
      icon: <FaComments />,
      color: "text-purple-600",
      bg: "bg-purple-100",
      trend: "Need Attention",
      trendIcon: <FaArrowTrendDown />,
      trendColor: "text-red-500",
    },
    {
      title: "Support Requests",
      value: "3",
      icon: <FaHeadset />,
      color: "text-green-600",
      bg: "bg-green-100",
      trend: "1 New",
      trendIcon: <FaArrowTrendUp />,
      trendColor: "text-green-600",
    },
  ];

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

    {stats.map((item, index) => (
      <div
        key={index}
        className="bg-white border rounded-xl shadow-sm hover:shadow-md transition duration-200 p-5"
      >

        <div className="flex justify-between items-start">

          <div>

            <p className="text-sm text-gray-500">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              {item.value}
            </h2>

          </div>

          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.bg} ${item.color}`}
          >
            {item.icon}
          </div>

        </div>

        <div className="mt-5 flex items-center gap-2">

          <span className={item.trendColor}>
            {item.trendIcon}
          </span>

          <span className={`text-sm font-medium ${item.trendColor}`}>
            {item.trend}
          </span>

        </div>

      </div>
    ))}

  </div>
);
}

export default FacultyStats;