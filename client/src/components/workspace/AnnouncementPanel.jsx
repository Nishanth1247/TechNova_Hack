import {
  FaBullhorn,
  FaCalendarDays,
  FaUserTie,
  FaPaperclip,
  FaCircleCheck,
  FaEye,
} from "react-icons/fa6";

function AnnouncementPanel({
    role,
    subjectId
}) {
  const announcements = [
    {
      id: 1,
      priority: "High",
      title: "Internal Assessment Schedule",
      faculty: "Dr. R. Kumar",
      date: "31 Jul 2026",
      description:
        "Internal Assessment I will be conducted on Monday. Students are requested to report 15 minutes before the examination.",
      attachment: "IA_Schedule.pdf",
      acknowledgement: "58 / 72 Students",
    },
    {
      id: 2,
      priority: "Normal",
      title: "Unit 4 Notes Uploaded",
      faculty: "Dr. R. Kumar",
      date: "30 Jul 2026",
      description:
        "Study material for Unit 4 has been uploaded to the Resource section.",
      attachment: "Unit4_Notes.pdf",
      acknowledgement: "Viewed by 66 Students",
    },
    {
      id: 3,
      priority: "Emergency",
      title: "Tomorrow's Lab Cancelled",
      faculty: "Dr. R. Kumar",
      date: "29 Jul 2026",
      description:
        "The scheduled laboratory session has been cancelled due to maintenance work.",
      attachment: "-",
      acknowledgement: "70 / 72 Students",
    },
  ];

  const priorityStyle = (priority) => {
    switch (priority) {
      case "Emergency":
        return "bg-red-100 text-red-700";
      case "High":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  return (
  <div className="space-y-6">

    {/* Header */}
    <div className="bg-white border rounded-xl shadow-sm p-5">

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">

        <div>

          <h2 className="text-lg font-semibold text-gray-800">
            Subject Announcements
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Latest updates from the course faculty.
          </p>

        </div>

        {role === "faculty" && (
          <button className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition">
            New Announcement
          </button>
        )}

      </div>

    </div>

    {/* Announcement Cards */}
    {announcements.map((item) => (
      <div
        key={item.id}
        className="bg-white border rounded-xl shadow-sm"
      >

        {/* Top */}
        <div className="flex justify-between items-start gap-4 p-5 border-b">

          <div className="flex gap-3">

            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <FaBullhorn className="text-blue-600" />
            </div>

            <div>

              <h3 className="font-semibold text-gray-800">
                {item.title}
              </h3>

              <div className="flex flex-wrap gap-5 mt-2 text-sm text-gray-500">

                <span className="flex items-center gap-2">
                  <FaUserTie />
                  {item.faculty}
                </span>

                <span className="flex items-center gap-2">
                  <FaCalendarDays />
                  {item.date}
                </span>

              </div>

            </div>

          </div>

          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${priorityStyle(
              item.priority
            )}`}
          >
            {item.priority}
          </span>

        </div>

        {/* Content */}
        <div className="p-5">

          <p className="text-gray-600 leading-7">
            {item.description}
          </p>

          {item.attachment && (
            <div className="flex items-center gap-2 mt-4 text-sm text-blue-600">

              <FaPaperclip />

              <span>{item.attachment}</span>

            </div>
          )}

          {/* Footer */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-t mt-5 pt-5">

            <div className="flex items-center gap-2 text-green-600 text-sm">

              <FaCircleCheck />

              {item.acknowledgement}

            </div>

            <div className="flex flex-wrap gap-2">

              <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
                <FaEye />
                View
              </button>

              {role === "faculty" && (
                <>
                  <button className="px-4 py-2 border text-blue-600 rounded-lg hover:bg-blue-50 transition">
                    Edit
                  </button>

                  <button className="px-4 py-2 border text-red-600 rounded-lg hover:bg-red-50 transition">
                    Delete
                  </button>
                </>
              )}

              {role === "student" && (
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
                  Acknowledge
                </button>
              )}

            </div>

          </div>

        </div>

      </div>
    ))}

  </div>
);
}

export default AnnouncementPanel;