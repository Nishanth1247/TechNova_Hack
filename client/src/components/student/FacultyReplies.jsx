import {
  FaComments,
  FaUserTie,
  FaClock,
  FaCircleCheck,
  FaArrowRight,
  FaBookOpen,
} from "react-icons/fa6";

function FacultyReplies() {
  const replies = [
    {
      id: 1,
      subject: "Data Structures",
      question: "Can you explain AVL Tree rotations with an example?",
      faculty: "Dr. R. Kumar",
      reply:
        "I've added an example in the discussion. Please review it and let me know if you need more clarification.",
      time: "20 mins ago",
      status: "New",
    },
    {
      id: 2,
      subject: "DBMS",
      question: "Difference between 3NF and BCNF?",
      faculty: "Dr. S. Priya",
      reply:
        "Refer to the Unit 4 Notes. I've also attached a comparison table in the discussion.",
      time: "Yesterday",
      status: "Read",
    },
    {
      id: 3,
      subject: "Operating Systems",
      question: "What is deadlock prevention?",
      faculty: "Dr. M. Arun",
      reply:
        "We'll discuss this in tomorrow's class. Meanwhile, read Chapter 5.",
      time: "2 days ago",
      status: "Read",
    },
  ];

  return (
  <div className="bg-white border rounded-xl shadow-sm">

    {/* Header */}
    <div className="flex justify-between items-center p-5 border-b">

      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Faculty Replies
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Recent responses from your faculty.
        </p>
      </div>

      <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition">
        View All
      </button>

    </div>

    {/* Replies */}
    <div className="divide-y">

      {replies.map((item) => (
        <div
          key={item.id}
          className="p-5 hover:bg-gray-50 transition"
        >

          {/* Top */}
          <div className="flex justify-between items-start gap-4">

            <div>

              <div className="flex items-center gap-3 flex-wrap">

                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
                  <FaBookOpen className="text-blue-600" />
                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="font-medium text-gray-800">
                      {item.subject}
                    </h3>

                    {item.status === "New" && (
                      <span className="px-2 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium">
                        New
                      </span>
                    )}

                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <FaUserTie />
                    {item.faculty}
                  </div>

                </div>

              </div>

            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <FaClock />
              {item.time}
            </div>

          </div>

          {/* Question */}
          <div className="mt-4 border rounded-lg p-4 bg-gray-50">

            <p className="text-xs uppercase text-gray-400 mb-2">
              Your Question
            </p>

            <p className="text-gray-700">
              {item.question}
            </p>

          </div>

          {/* Reply */}
          <div className="mt-3 border border-blue-100 rounded-lg p-4 bg-blue-50">

            <div className="flex items-center gap-2 text-blue-700 mb-2">
              <FaComments />
              <span className="text-sm font-medium">
                Faculty Reply
              </span>
            </div>

            <p className="text-gray-700 leading-7">
              {item.reply}
            </p>

          </div>

          {/* Bottom */}
          <div className="flex justify-between items-center mt-4">

            <div className="flex items-center gap-2 text-sm text-green-600">

              <FaCircleCheck />

              <span>{item.status}</span>

            </div>

            <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center gap-2 transition">
              Open Discussion
              <FaArrowRight size={12} />
            </button>

          </div>

        </div>
      ))}

    </div>

    {/* Footer */}
    <div className="border-t p-5 flex justify-between items-center">

      <span className="text-sm text-gray-500">
        Unread Faculty Replies
      </span>

      <span className="text-lg font-bold text-red-600">
        1
      </span>

    </div>

  </div>
);
}

export default FacultyReplies;