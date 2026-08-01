import {
  FaCircleQuestion,
  FaUserGraduate,
  FaClock,
  FaThumbtack,
  FaCircleCheck,
  FaArrowRight,
} from "react-icons/fa6";

function PendingDoubts() {
  const doubts = [
    {
      id: 1,
      title: "Difference between BFS and DFS",
      student: "Rahul Kumar",
      subject: "Data Structures",
      time: "10 mins ago",
      priority: "High",
      replies: 3,
      solved: false,
      pinned: true,
    },
    {
      id: 2,
      title: "Need help with AVL Tree Rotation",
      student: "Priya Sharma",
      subject: "Data Structures",
      time: "35 mins ago",
      priority: "Medium",
      replies: 1,
      solved: false,
      pinned: false,
    },
    {
      id: 3,
      title: "Normalization Example",
      student: "Arun Kumar",
      subject: "DBMS",
      time: "1 hour ago",
      priority: "Low",
      replies: 4,
      solved: true,
      pinned: false,
    },
  ];

  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
  <div className="bg-white border rounded-xl shadow-sm">

    {/* Header */}
    <div className="flex justify-between items-center p-5 border-b">

      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Student Doubts
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Questions awaiting your response.
        </p>
      </div>

      <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition">
        View All
      </button>

    </div>

    {/* Doubts */}
    <div className="divide-y">

      {doubts.map((item) => (
        <div
          key={item.id}
          className="p-5 hover:bg-gray-50 transition"
        >

          <div className="flex justify-between gap-4">

            {/* Left */}
            <div className="flex-1">

              <div className="flex flex-wrap items-center gap-2">

                {item.pinned && (
                  <FaThumbtack className="text-orange-500 text-sm" />
                )}

                <FaCircleQuestion className="text-blue-600 text-sm" />

                <h3 className="font-semibold text-gray-800">
                  {item.title}
                </h3>

                {item.solved && (
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium flex items-center gap-1">
                    <FaCircleCheck size={10} />
                    Solved
                  </span>
                )}

              </div>

              <div className="flex flex-wrap gap-5 mt-3 text-sm text-gray-500">

                <span className="flex items-center gap-2">
                  <FaUserGraduate />
                  {item.student}
                </span>

                <span>{item.subject}</span>

                <span className="flex items-center gap-2">
                  <FaClock />
                  {item.time}
                </span>

              </div>

            </div>

            {/* Priority */}
            <span
              className={`px-3 py-1 h-fit rounded-full text-xs font-medium ${priorityColor[item.priority]}`}
            >
              {item.priority}
            </span>

          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-5">

            <span className="text-sm text-gray-500">
              {item.replies} Replies
            </span>

            <div className="flex gap-2">

              <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
                Reply
              </button>

              <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center gap-2 transition">
                Open
                <FaArrowRight size={12} />
              </button>

            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
);
}

export default PendingDoubts;