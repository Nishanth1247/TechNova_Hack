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

      <div className="bg-white rounded-2xl shadow-sm border p-6">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">
              Subject Announcements
            </h2>

            <p className="text-gray-500 mt-2">
              Latest updates from the course faculty.
            </p>

          </div>

          {role === "faculty" && (
  <button className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-lg">
    New Announcement
  </button>
)}

        </div>

      </div>

      {/* Cards */}

      {announcements.map((item) => (

        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-sm border overflow-hidden"
        >

          {/* Top */}

          <div className="flex justify-between items-center px-6 py-5 bg-slate-50 border-b">

            <div className="flex items-center gap-3">

              <FaBullhorn className="text-blue-700" />

              <h3 className="text-xl font-semibold">

                {item.title}

              </h3>

            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${priorityStyle(
                item.priority
              )}`}
            >
              {item.priority}
            </span>

          </div>

          {/* Body */}

          <div className="p-6">

            <div className="flex flex-wrap gap-6 text-gray-500">

              <div className="flex items-center gap-2">

                <FaUserTie />

                {item.faculty}

              </div>

              <div className="flex items-center gap-2">

                <FaCalendarDays />

                {item.date}

              </div>

            </div>

            <p className="mt-6 leading-7 text-gray-600">

              {item.description}

            </p>

            {/* Attachment */}

            <div className="mt-6 flex items-center gap-3">

              <FaPaperclip className="text-blue-700" />

              <span>

                {item.attachment}

              </span>

            </div>

            {/* Footer */}

            <div className="flex justify-between items-center mt-8 border-t pt-5">

  <div className="flex items-center gap-3 text-green-700">
    <FaCircleCheck />
    {item.acknowledgement}
  </div>

  <div className="flex gap-3">

    <button className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-lg flex items-center gap-2">
      <FaEye />
      View
    </button>

    {role === "faculty" && (
      <>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg">
          Edit
        </button>

        <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg">
          Delete
        </button>
      </>
    )}

    {role === "student" && (
      <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
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