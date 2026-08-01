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
    <div className="bg-white rounded-2xl shadow-sm border">

      {/* Header */}

      <div className="flex justify-between items-center p-6 border-b">

        <div>
          <h2 className="text-2xl font-bold">
            Faculty Replies
          </h2>

          <p className="text-gray-500 mt-2">
            Recent responses from your faculty.
          </p>
        </div>

        <button className="text-blue-700 font-semibold hover:text-blue-900">
          View All
        </button>

      </div>

      {/* Replies */}

      <div className="divide-y">

        {replies.map((item) => (

          <div
            key={item.id}
            className="p-6 hover:bg-gray-50 transition"
          >

            {/* Subject */}

            <div className="flex justify-between items-start">

              <div>

                <div className="flex items-center gap-2">

                  <FaBookOpen className="text-blue-700"/>

                  <h3 className="text-lg font-semibold">
                    {item.subject}
                  </h3>

                  {item.status === "New" && (

                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
                      NEW
                    </span>

                  )}

                </div>

                <div className="flex items-center gap-2 text-gray-500 mt-3">

                  <FaUserTie />

                  {item.faculty}

                </div>

              </div>

              <div className="flex items-center gap-2 text-gray-400">

                <FaClock />

                {item.time}

              </div>

            </div>

            {/* Question */}

            <div className="bg-gray-50 rounded-xl p-4 mt-5">

              <p className="text-sm text-gray-500 mb-2">
                Your Question
              </p>

              <p className="font-medium">
                {item.question}
              </p>

            </div>

            {/* Faculty Reply */}

            <div className="bg-blue-50 rounded-xl p-4 mt-4">

              <div className="flex items-center gap-2 text-blue-700 mb-3">

                <FaComments />

                <span className="font-semibold">
                  Faculty Reply
                </span>

              </div>

              <p className="text-gray-700 leading-7">

                {item.reply}

              </p>

            </div>

            {/* Actions */}

            <div className="flex justify-between items-center mt-5">

              <div className="flex items-center gap-2 text-green-600">

                <FaCircleCheck />

                {item.status}

              </div>

              <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center gap-2">

                Open Discussion

                <FaArrowRight />

              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="bg-gray-50 rounded-b-2xl border-t p-5 flex justify-between">

        <span className="text-gray-600">
          Unread Faculty Replies
        </span>

        <span className="text-red-600 font-bold">
          1
        </span>

      </div>

    </div>
  );
}

export default FacultyReplies;