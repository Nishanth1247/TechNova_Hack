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
    <div className="bg-white rounded-2xl shadow-sm border">

      {/* Header */}

      <div className="p-6 border-b">

        <div className="flex items-center gap-3">

          <FaCircleCheck className="text-green-600 text-2xl" />

          <div>

            <h2 className="text-2xl font-bold">
              Communication Health
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Monitor student engagement and communication effectiveness.
            </p>

          </div>

        </div>

      </div>

      {/* Metrics */}

      <div className="p-6 space-y-6">

        {metrics.map((item, index) => (

          <div key={index}>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                <div className="text-xl">
                  {item.icon}
                </div>

                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.subtitle}
                  </p>

                </div>

              </div>

              <span className="text-xl font-bold text-gray-800">
                {item.value}
              </span>

            </div>

            <div className="mt-3 w-full bg-gray-200 rounded-full h-3">

              <div
                className={`${item.color} h-3 rounded-full transition-all duration-500`}
                style={{ width: `${item.progress}%` }}
              ></div>

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="bg-green-50 border-t p-5 rounded-b-2xl">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-sm text-gray-600">
              Overall Communication Score
            </p>

            <h2 className="text-3xl font-bold text-green-700">
              92%
            </h2>

          </div>

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            Excellent
          </span>

        </div>

      </div>

    </div>
  );
}

export default CommunicationHealth;