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
    <div className="bg-white rounded-2xl shadow-sm border">

      {/* Header */}

      <div className="flex justify-between items-center p-6 border-b">

        <div>

          <h2 className="text-2xl font-bold">
            Today's Schedule
          </h2>

          <p className="text-gray-500 mt-1">
            Your teaching schedule for today.
          </p>

        </div>

        <button className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-lg flex items-center gap-2">

          <FaPlay />

          Start Class

        </button>

      </div>

      {/* Schedule */}

      <div className="p-6 space-y-6">

        {classes.map((item) => (

          <div
            key={item.id}
            className="border rounded-2xl p-5 hover:shadow-md transition"
          >

            <div className="flex justify-between items-start flex-wrap gap-4">

              <div>

                <div className="flex items-center gap-3">

                  <FaBookOpen className="text-blue-700" />

                  <h3 className="text-xl font-semibold">

                    {item.subject}

                  </h3>

                </div>

                <p className="text-gray-500 mt-2">
                  {item.code}
                </p>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle[item.status]}`}
              >
                {item.status}
              </span>

            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-6">

              <div className="flex items-center gap-3 text-gray-600">

                <FaClock />

                <span>{item.time}</span>

              </div>

              <div className="flex items-center gap-3 text-gray-600">

                <FaLocationDot />

                <span>{item.room}</span>

              </div>

              <div className="flex items-center gap-3 text-gray-600">

                <FaUsers />

                <span>{item.students} Students</span>

              </div>

            </div>

            <div className="flex gap-3 mt-6 flex-wrap">

              <button className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-lg">

                Open Workspace

              </button>

              <button className="border px-5 py-2 rounded-lg hover:bg-gray-50">

                Attendance

              </button>

              <button className="border px-5 py-2 rounded-lg hover:bg-gray-50">

                Resources

              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="border-t p-6 bg-gray-50 rounded-b-2xl">

        <div className="flex items-center gap-3 text-green-700">

          <FaCircleCheck />

          <span className="font-medium">
            1 Class Completed • 1 Ongoing • 1 Upcoming
          </span>

        </div>

      </div>

    </div>
  );
}

export default TodaySchedule;