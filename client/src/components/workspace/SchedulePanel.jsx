import {
  FaCalendarDays,
  FaClock,
  FaLocationDot,
  FaBookOpen,
  FaTriangleExclamation,
} from "react-icons/fa6";

function SchedulePanel({
    role,
    subjectId
}) {
  const schedule = [
    {
      id: 1,
      title: "Theory Class",
      day: "Monday",
      time: "09:00 AM - 10:50 AM",
      venue: "Room 405",
      type: "Class",
    },
    {
      id: 2,
      title: "Lab Session",
      day: "Wednesday",
      time: "02:00 PM - 04:00 PM",
      venue: "Lab 3",
      type: "Lab",
    },
    {
      id: 3,
      title: "Assignment Submission",
      day: "Friday",
      time: "Before 11:59 PM",
      venue: "CampusConnect Portal",
      type: "Assignment",
    },
    {
      id: 4,
      title: "Internal Assessment",
      day: "Next Tuesday",
      time: "10:00 AM",
      venue: "Exam Hall",
      type: "Exam",
    },
  ];

  return (
  <div className="space-y-6">

    {/* Header */}
    <div className="bg-white border rounded-xl shadow-sm p-5">

      <h2 className="text-lg font-semibold text-gray-800">
        Subject Schedule
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Upcoming academic activities for this subject.
      </p>

    </div>

    {/* Schedule */}
    <div className="space-y-4">

      {schedule.map((item) => (
        <div
          key={item.id}
          className="bg-white border rounded-xl shadow-sm p-5"
        >

          <div className="flex justify-between items-start gap-4 flex-wrap">

            {/* Left */}
            <div>

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <FaBookOpen className="text-blue-600" />
                </div>

                <div>

                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.type}
                  </p>

                </div>

              </div>

              <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-600">

                <div className="flex items-center gap-2">
                  <FaCalendarDays />
                  {item.day}
                </div>

                <div className="flex items-center gap-2">
                  <FaClock />
                  {item.time}
                </div>

                <div className="flex items-center gap-2">
                  <FaLocationDot />
                  {item.venue}
                </div>

              </div>

            </div>

            {/* Badge */}
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                item.type === "Exam"
                  ? "bg-red-100 text-red-700"
                  : item.type === "Assignment"
                  ? "bg-yellow-100 text-yellow-700"
                  : item.type === "Lab"
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {item.type}
            </span>

          </div>

        </div>
      ))}

    </div>

    {/* Upcoming Event */}
    <div className="bg-white border rounded-xl shadow-sm p-5">

      <div className="flex gap-4">

        <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
          <FaTriangleExclamation className="text-yellow-600" />
        </div>

        <div>

          <h3 className="font-medium text-gray-800">
            Upcoming Event
          </h3>

          <p className="text-sm text-gray-500 mt-2 leading-6">
            Internal Assessment begins next Tuesday.
            Make sure to complete all pending assignments.
          </p>

        </div>

      </div>

    </div>

  </div>
);
}

export default SchedulePanel;