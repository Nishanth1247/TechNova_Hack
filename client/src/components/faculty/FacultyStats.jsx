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
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-all duration-300 p-6"
        >

          <div className="flex justify-between items-start">

            <div>

              <p className="text-gray-500 text-sm">
                {item.title}
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {item.value}
              </h2>

            </div>

            <div
              className={`${item.bg} ${item.color} w-14 h-14 rounded-xl flex items-center justify-center text-2xl`}
            >
              {item.icon}
            </div>

          </div>

          <div
            className={`flex items-center gap-2 mt-6 ${item.trendColor}`}
          >

            {item.trendIcon}

            <span className="text-sm font-medium">
              {item.trend}
            </span>

          </div>

        </div>

      ))}

    </div>
  );
}

export default FacultyStats;