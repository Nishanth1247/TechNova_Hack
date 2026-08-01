import {
  FaBookOpen,
  FaUsers,
  FaComments,
  FaBullhorn,
  FaArrowTrendUp,
  FaArrowTrendDown,
} from "react-icons/fa6";

function StudentEngagement() {

  const subjects = [
    {
      id: 1,
      subject: "Data Structures",
      code: "CS301",
      engagement: 96,
      discussions: 18,
      announcements: 6,
      students: 72,
      trend: "up",
    },
    {
      id: 2,
      subject: "DBMS",
      code: "CS302",
      engagement: 91,
      discussions: 12,
      announcements: 4,
      students: 68,
      trend: "up",
    },
    {
      id: 3,
      subject: "Operating Systems",
      code: "CS304",
      engagement: 82,
      discussions: 8,
      announcements: 5,
      students: 64,
      trend: "down",
    },
  ];

  const getProgressColor = (value) => {
    if (value >= 90) return "bg-green-500";
    if (value >= 75) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border">

      {/* Header */}

      <div className="p-6 border-b">

        <h2 className="text-2xl font-bold">

          Student Engagement

        </h2>

        <p className="text-gray-500 mt-2">

          Participation level across your subjects

        </p>

      </div>

      {/* Subjects */}

      <div className="divide-y">

        {subjects.map((item) => (

          <div
            key={item.id}
            className="p-5 hover:bg-gray-50 transition"
          >

            <div className="flex justify-between">

              <div>

                <div className="flex items-center gap-2">

                  <FaBookOpen className="text-blue-700"/>

                  <h3 className="font-semibold">

                    {item.subject}

                  </h3>

                </div>

                <p className="text-gray-500 text-sm mt-1">

                  {item.code}

                </p>

              </div>

              <div className="flex items-center gap-2">

                {item.trend === "up" ? (

                  <FaArrowTrendUp className="text-green-600"/>

                ) : (

                  <FaArrowTrendDown className="text-red-600"/>

                )}

                <span className="font-bold text-lg">

                  {item.engagement}%

                </span>

              </div>

            </div>

            {/* Progress */}

            <div className="w-full bg-gray-200 rounded-full h-3 mt-4">

              <div
                className={`${getProgressColor(item.engagement)} h-3 rounded-full`}
                style={{ width: `${item.engagement}%` }}
              ></div>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-4 mt-5 text-sm">

              <div className="flex items-center gap-2 text-gray-600">

                <FaUsers />

                {item.students}

              </div>

              <div className="flex items-center gap-2 text-gray-600">

                <FaComments />

                {item.discussions}

              </div>

              <div className="flex items-center gap-2 text-gray-600">

                <FaBullhorn />

                {item.announcements}

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="bg-blue-50 border-t rounded-b-2xl p-5">

        <div className="flex justify-between items-center">

          <span className="text-gray-600">

            Overall Engagement

          </span>

          <span className="text-2xl font-bold text-blue-700">

            90%

          </span>

        </div>

      </div>

    </div>
  );
}

export default StudentEngagement;