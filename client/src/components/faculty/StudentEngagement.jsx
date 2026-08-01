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
  <div className="bg-white border rounded-xl shadow-sm">

    {/* Header */}
    <div className="p-5 border-b">

      <h2 className="text-lg font-semibold text-gray-800">
        Student Engagement
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Participation level across your subjects.
      </p>

    </div>

    {/* Subjects */}
    <div className="divide-y">

      {subjects.map((item) => (
        <div
          key={item.id}
          className="p-5 hover:bg-gray-50 transition"
        >

          <div className="flex justify-between items-start gap-4">

            {/* Subject */}
            <div>

              <div className="flex items-center gap-3">

                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
                  <FaBookOpen className="text-blue-600" />
                </div>

                <div>

                  <h3 className="font-medium text-gray-800">
                    {item.subject}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.code}
                  </p>

                </div>

              </div>

            </div>

            {/* Percentage */}
            <div className="flex items-center gap-2">

              {item.trend === "up" ? (
                <FaArrowTrendUp className="text-green-600" />
              ) : (
                <FaArrowTrendDown className="text-red-600" />
              )}

              <span className="text-lg font-semibold text-gray-800">
                {item.engagement}%
              </span>

            </div>

          </div>

          {/* Progress */}
          <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">

            <div
              className={`${getProgressColor(item.engagement)} h-full rounded-full transition-all duration-500`}
              style={{
                width: `${item.engagement}%`,
              }}
            />

          </div>

          {/* Statistics */}
          <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-600">

            <div className="flex items-center gap-2">
              <FaUsers />
              {item.students}
            </div>

            <div className="flex items-center gap-2">
              <FaComments />
              {item.discussions}
            </div>

            <div className="flex items-center gap-2">
              <FaBullhorn />
              {item.announcements}
            </div>

          </div>

        </div>
      ))}

    </div>

    {/* Footer */}
    <div className="border-t p-5 flex justify-between items-center">

      <span className="text-sm text-gray-500">
        Overall Engagement
      </span>

      <span className="text-2xl font-bold text-blue-700">
        90%
      </span>

    </div>

  </div>
);
}

export default StudentEngagement;