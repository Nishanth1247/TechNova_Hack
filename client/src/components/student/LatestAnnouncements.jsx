import {
  FaBullhorn,
  FaUserTie,
  FaCalendarDays,
  FaPaperclip,
  FaCircleCheck,
  FaDownload,
  FaComments,
  FaArrowRight,
} from "react-icons/fa6";

function LatestAnnouncements() {
  const announcements = [
    {
      id: 1,
      title: "Internal Assessment Schedule Released",
      priority: "High",
      faculty: "Dr. R. Kumar",
      date: "Today",
      description:
        "Internal Assessment I will be conducted on Monday. Students should report 15 minutes early.",
      attachment: "IA_Schedule.pdf",
      acknowledged: false,
    },
    {
      id: 2,
      title: "Unit 4 Notes Uploaded",
      priority: "Normal",
      faculty: "Dr. Priya",
      date: "Yesterday",
      description:
        "Study materials for Unit 4 are now available in the Resources section.",
      attachment: "Unit4_Notes.pdf",
      acknowledged: true,
    },
  ];

  const getPriority = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Normal":
        return "bg-green-100 text-green-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
  <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

    {/* Header */}
    <div className="flex items-center justify-between px-7 py-6 border-b border-gray-200">

      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Latest Announcements
        </h2>

        <p className="text-gray-500 mt-1">
          Stay updated with the latest faculty announcements.
        </p>
      </div>

      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">

        View All

        <FaArrowRight size={13} />

      </button>

    </div>

    {/* Announcement List */}
    <div className="divide-y divide-gray-200">

      {announcements.map((item) => (

        <div
          key={item.id}
          className="p-7 hover:bg-gray-50 transition"
        >

          {/* Top */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                <FaBullhorn
                  className="text-blue-600"
                  size={18}
                />

              </div>

              <div>

                <div className="flex flex-wrap items-center gap-3">

                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getPriority(item.priority)}`}
                  >
                    {item.priority}
                  </span>

                </div>

                <div className="flex flex-wrap gap-6 mt-3 text-sm text-gray-500">

                  <div className="flex items-center gap-2">

                    <FaUserTie />

                    {item.faculty}

                  </div>

                  <div className="flex items-center gap-2">

                    <FaCalendarDays />

                    {item.date}

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Description */}
          <p className="mt-5 text-gray-600 leading-7">
            {item.description}
          </p>

          {/* Attachment */}
          <div className="mt-5 inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm text-blue-600">

            <FaPaperclip />

            {item.attachment}

          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-6">

            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition">

              <FaDownload />

              Download

            </button>

            <button className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 px-5 py-2.5 rounded-xl transition">

              <FaComments />

              Discussion

            </button>

            <button
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium ${
                item.acknowledged
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >

              <FaCircleCheck />

              {item.acknowledged
                ? "Acknowledged"
                : "Acknowledge"}

            </button>

          </div>

        </div>

      ))}

    </div>

    {/* Footer */}
    <div className="flex items-center justify-between px-7 py-5 bg-gray-50 border-t border-gray-200">

      <span className="text-gray-600 font-medium">
        Unread Announcements
      </span>

      <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
        2
      </span>

    </div>

  </div>
);
}

export default LatestAnnouncements;