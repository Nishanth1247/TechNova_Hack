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

      <div className="bg-white rounded-2xl shadow-sm border p-6">

        <h2 className="text-2xl font-bold">
          Subject Schedule
        </h2>

        <p className="text-gray-500 mt-2">
          Upcoming academic activities for this subject.
        </p>

      </div>

      {/* Timeline */}

      <div className="space-y-5">

        {schedule.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm border p-6"
          >

            <div className="flex justify-between flex-wrap gap-6">

              <div>

                <div className="flex items-center gap-3">

                  <FaBookOpen className="text-blue-700" />

                  <h3 className="text-xl font-semibold">

                    {item.title}

                  </h3>

                </div>

                <div className="mt-5 space-y-3 text-gray-600">

                  <div className="flex items-center gap-3">

                    <FaCalendarDays />

                    {item.day}

                  </div>

                  <div className="flex items-center gap-3">

                    <FaClock />

                    {item.time}

                  </div>

                  <div className="flex items-center gap-3">

                    <FaLocationDot />

                    {item.venue}

                  </div>

                </div>

              </div>

              <div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
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

          </div>

        ))}

      </div>

      {/* Upcoming */}

      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 flex gap-4">

        <FaTriangleExclamation
          className="text-yellow-600 text-2xl mt-1"
        />

        <div>

          <h3 className="font-semibold">
            Upcoming Event
          </h3>

          <p className="text-gray-600 mt-2">
            Internal Assessment begins next Tuesday.
            Make sure to complete all pending assignments.
          </p>

        </div>

      </div>

    </div>
  );
}

export default SchedulePanel;