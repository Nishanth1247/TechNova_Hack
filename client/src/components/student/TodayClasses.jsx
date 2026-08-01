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
    <div className="bg-white rounded-2xl shadow-sm border">

      {/* Header */}

      <div className="flex justify-between items-center p-6 border-b">

        <div>

          <h2 className="text-2xl font-bold">

            Today's Classes

          </h2>

          <p className="text-gray-500 mt-2">

            Your learning schedule for today

          </p>

        </div>

      </div>

      {/* Classes */}

      <div className="p-6 space-y-5">

        {classes.map((item) => (

          <div
            key={item.id}
            className="border rounded-2xl p-5 hover:shadow-md transition"
          >

            <div className="flex justify-between items-start flex-wrap gap-4">

              <div>

                <div className="flex items-center gap-3">

                  <FaBookOpen className="text-blue-700"/>

                  <div>

                    <h3 className="text-xl font-semibold">

                      {item.subject}

                    </h3>

                    <p className="text-gray-500">

                      {item.code}

                    </p>

                  </div>

                </div>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(item.status)}`}
              >

                {item.status}

              </span>

            </div>

            {/* Information */}

            <div className="grid md:grid-cols-3 gap-5 mt-6">

              <div className="flex items-center gap-3 text-gray-600">

                <FaClock />

                {item.time}

              </div>

              <div className="flex items-center gap-3 text-gray-600">

                <FaLocationDot />

                {item.room}

              </div>

              <div className="flex items-center gap-3 text-gray-600">

                <FaUserTie />

                {item.faculty}

              </div>

            </div>

            {/* Buttons */}

            <div className="flex gap-3 mt-6 flex-wrap">

              <button
                onClick={() => navigate(`/workspace/${item.id}`)}
                className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-lg flex items-center gap-2"
              >

                Open Workspace

                <FaArrowRight />

              </button>

              <button className="border px-5 py-2 rounded-lg hover:bg-gray-100">

                Resources

              </button>

              <button className="border px-5 py-2 rounded-lg hover:bg-gray-100">

                Discussion

              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="border-t bg-gray-50 rounded-b-2xl p-5 flex justify-between items-center">

        <div className="flex items-center gap-2 text-green-700">

          <FaCircleCheck />

          <span>

            1 Class Completed

          </span>

        </div>

        <div className="flex items-center gap-2 text-blue-700">

          <FaPlay />

          <span>

            1 Ongoing

          </span>

        </div>

      </div>

    </div>
  );
}

export default TodayClasses;