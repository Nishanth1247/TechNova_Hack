import {
  FaClock,
  FaLocationDot,
  FaBookOpen,
  FaUsers,
  FaCircleCheck,
  FaPlay,
} from "react-icons/fa6";

function TodaySchedule() {
  const classes = [
    {
      id: 1,
      subject: "Data Structures",
      code: "CS301",
      time: "09:00 AM - 10:50 AM",
      room: "Room 405",
      students: 72,
      status: "Completed",
    },
    {
      id: 2,
      subject: "Operating Systems",
      code: "CS304",
      time: "11:15 AM - 12:50 PM",
      room: "Room 402",
      students: 68,
      status: "Ongoing",
    },
    {
      id: 3,
      subject: "DBMS Lab",
      code: "CS302",
      time: "02:00 PM - 04:00 PM",
      room: "Lab 3",
      students: 42,
      status: "Upcoming",
    },
  ];

  const statusStyle = {
    Completed: "bg-green-100 text-green-700",
    Ongoing: "bg-blue-100 text-blue-700",
    Upcoming: "bg-yellow-100 text-yellow-700",
  };

  return (
  <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-8 py-6 border-b border-gray-100">

      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Today's Schedule
        </h2>

        <p className="text-gray-500 mt-1">
          Manage today's teaching sessions.
        </p>
      </div>

      <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition">

        <FaPlay />

        Start Class

      </button>

    </div>

    {/* Schedule */}
    <div className="p-6 space-y-5">

      {classes.map((item) => (

        <div
          key={item.id}
          className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
        >

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            {/* Left */}
            <div className="flex gap-4">

              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">

                <FaBookOpen
                  className="text-blue-600"
                  size={22}
                />

              </div>

              <div>

                <div className="flex items-center gap-3">

                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.subject}
                  </h3>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle[item.status]}`}
                  >
                    {item.status}
                  </span>

                </div>

                <p className="text-gray-500 mt-1">
                  {item.code}
                </p>

                <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-600">

                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-500" />
                    {item.time}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaLocationDot className="text-red-500" />
                    {item.room}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaUsers className="text-green-500" />
                    {item.students} Students
                  </div>

                </div>

              </div>

            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-3">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition">
                Workspace
              </button>

              <button className="border border-gray-300 hover:bg-gray-50 px-5 py-2.5 rounded-xl transition">
                Attendance
              </button>

              <button className="border border-gray-300 hover:bg-gray-50 px-5 py-2.5 rounded-xl transition">
                Resources
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

    {/* Footer */}
    <div className="bg-gray-50 border-t border-gray-200 px-8 py-5">

      <div className="flex items-center gap-3 text-green-600 font-medium">

        <FaCircleCheck />

        <span>
          1 Class Completed • 1 Ongoing • 1 Upcoming
        </span>

      </div>

    </div>

  </div>
);
}

export default TodaySchedule;