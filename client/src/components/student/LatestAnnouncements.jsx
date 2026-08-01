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
    <div className="bg-white rounded-2xl shadow-sm border">

      {/* Header */}

      <div className="flex justify-between items-center p-6 border-b">

        <div>

          <h2 className="text-2xl font-bold">

            Latest Announcements

          </h2>

          <p className="text-gray-500 mt-2">

            Stay updated with the latest faculty announcements.

          </p>

        </div>

        <button className="text-blue-700 font-semibold hover:text-blue-900">

          View All

        </button>

      </div>

      {/* Cards */}

      <div className="divide-y">

        {announcements.map((item) => (

          <div
            key={item.id}
            className="p-6 hover:bg-gray-50 transition"
          >

            <div className="flex justify-between flex-wrap gap-4">

              <div>

                <div className="flex items-center gap-3 flex-wrap">

                  <FaBullhorn className="text-blue-700"/>

                  <h3 className="text-xl font-semibold">

                    {item.title}

                  </h3>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getPriority(item.priority)}`}
                  >

                    {item.priority}

                  </span>

                </div>

                <div className="flex flex-wrap gap-5 mt-4 text-gray-500 text-sm">

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

            <p className="mt-5 text-gray-600 leading-7">

              {item.description}

            </p>

            <div className="flex items-center gap-3 mt-5 text-blue-700">

              <FaPaperclip />

              {item.attachment}

            </div>

            <div className="flex flex-wrap gap-3 mt-6">

              <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center gap-2">

                <FaDownload />

                Download

              </button>

              <button className="border px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2">

                <FaComments />

                Discussion

              </button>

              <button
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
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

      <div className="bg-gray-50 border-t rounded-b-2xl p-5 flex justify-between">

        <span className="text-gray-600">

          Unread Announcements

        </span>

        <span className="text-red-600 font-bold">

          2

        </span>

      </div>

    </div>
  );
}

export default LatestAnnouncements;