import { useNavigate } from "react-router-dom";
import {
  FaBookOpen,
  FaClock,
  FaLocationDot,
  FaUserTie,
  FaArrowRight,
  FaCircleCheck,
  FaPlay,
} from "react-icons/fa6";

function TodayClasses() {

  const navigate = useNavigate();

  const classes = [
    {
      id: 1,
      subject: "Data Structures",
      code: "CS301",
      faculty: "Dr. R. Kumar",
      time: "09:00 AM - 10:50 AM",
      room: "Room 405",
      status: "Completed",
    },
    {
      id: 2,
      subject: "Database Management System",
      code: "CS302",
      faculty: "Dr. S. Priya",
      time: "11:15 AM - 12:50 PM",
      room: "Room 402",
      status: "Ongoing",
    },
    {
      id: 3,
      subject: "Operating Systems",
      code: "CS304",
      faculty: "Dr. M. Arun",
      time: "02:00 PM - 03:50 PM",
      room: "Room 406",
      status: "Upcoming",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";

      case "Ongoing":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
  <div className="bg-white border rounded-xl shadow-sm">

    {/* Header */}
    <div className="p-5 border-b">

      <h2 className="text-lg font-semibold text-gray-800">
        Today's Classes
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Your learning schedule for today.
      </p>

    </div>

    {/* Classes */}
    <div className="p-5 space-y-4">

      {classes.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-4 hover:bg-gray-50 transition"
        >

          {/* Top */}
          <div className="flex justify-between items-start gap-4 flex-wrap">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
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

            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                item.status
              )}`}
            >
              {item.status}
            </span>

          </div>

          {/* Details */}
          <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-600">

            <div className="flex items-center gap-2">
              <FaClock />
              {item.time}
            </div>

            <div className="flex items-center gap-2">
              <FaLocationDot />
              {item.room}
            </div>

            <div className="flex items-center gap-2">
              <FaUserTie />
              {item.faculty}
            </div>

          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-5">

            <button
              onClick={() => navigate(`/workspace/${item.id}`)}
              className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition flex items-center gap-2"
            >
              Open Workspace
              <FaArrowRight size={12} />
            </button>

            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
              Resources
            </button>

            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
              Discussion
            </button>

          </div>

        </div>
      ))}

    </div>

    {/* Footer */}
    <div className="border-t p-5 flex justify-between items-center flex-wrap gap-3">

      <div className="flex items-center gap-2 text-green-600 text-sm">
        <FaCircleCheck />
        <span>1 Class Completed</span>
      </div>

      <div className="flex items-center gap-2 text-blue-600 text-sm">
        <FaPlay />
        <span>1 Ongoing</span>
      </div>

    </div>

  </div>
);
}

export default TodayClasses;