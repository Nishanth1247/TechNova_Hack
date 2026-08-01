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
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-all p-6"
        >

          <div className="flex justify-between">

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

          <p className="text-gray-500 mt-4">

            {item.subtitle}

          </p>

          <div className="flex items-center gap-2 mt-4 text-green-600">

            <FaArrowTrendUp />

            <span className="text-sm">

              {item.trend}

            </span>

          </div>

        </div>

      ))}

    </div>
  );
}

export default StudentStats;