import {
  FaCircleCheck,
  FaBullhorn,
  FaComments,
  FaClock,
  FaTriangleExclamation,
} from "react-icons/fa6";

function CommunicationHealth() {
  const metrics = [
    {
      title: "Announcement Reach",
      value: "94%",
      subtitle: "171 / 182 students acknowledged",
      progress: 94,
      color: "bg-green-500",
      icon: <FaBullhorn className="text-green-600" />,
    },
    {
      title: "Discussion Participation",
      value: "87%",
      subtitle: "42 active students this week",
      progress: 87,
      color: "bg-blue-500",
      icon: <FaComments className="text-blue-600" />,
    },
    {
      title: "Average Response Time",
      value: "18 min",
      subtitle: "Faculty reply time",
      progress: 72,
      color: "bg-orange-500",
      icon: <FaClock className="text-orange-500" />,
    },
    {
      title: "Pending Acknowledgements",
      value: "11",
      subtitle: "Students yet to acknowledge",
      progress: 25,
      color: "bg-red-500",
      icon: <FaTriangleExclamation className="text-red-500" />,
    },
  ];

  return (
  <div className="bg-white border rounded-xl shadow-sm">

    {/* Header */}
    <div className="flex items-center gap-3 p-5 border-b">

      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
        <FaCircleCheck className="text-green-600" />
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Communication Health
        </h2>

        <p className="text-sm text-gray-500">
          Monitor student engagement and communication effectiveness.
        </p>
      </div>

    </div>

    {/* Metrics */}
    <div className="p-5 space-y-5">

      {metrics.map((item, index) => (
        <div key={index}>

          <div className="flex justify-between items-center">

            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                {item.icon}
              </div>

              <div>
                <h3 className="font-medium text-gray-800">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500">
                  {item.subtitle}
                </p>
              </div>

            </div>

            <span className="font-semibold text-gray-800">
              {item.value}
            </span>

          </div>

          <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">

            <div
              className={`${item.color} h-full rounded-full transition-all duration-500`}
              style={{ width: `${item.progress}%` }}
            />

          </div>

        </div>
      ))}

    </div>

    {/* Summary */}
    <div className="border-t p-5 flex justify-between items-center">

      <div>
        <p className="text-sm text-gray-500">
          Overall Communication Score
        </p>

        <h3 className="text-2xl font-bold text-green-600">
          92%
        </h3>
      </div>

      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
        Excellent
      </span>

    </div>

  </div>
);
}

export default CommunicationHealth;