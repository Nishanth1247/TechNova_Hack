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
    <div className="bg-white rounded-2xl shadow-sm border">

      {/* Header */}

      <div className="flex justify-between items-center p-6 border-b">

        <div>

          <h2 className="text-2xl font-bold">
            Student Doubts
          </h2>

          <p className="text-gray-500 mt-1">
            Questions awaiting your response.
          </p>

        </div>

        <button className="text-blue-700 font-semibold hover:text-blue-900">
          View All
        </button>

      </div>

      {/* Doubts */}

      <div className="divide-y">

        {doubts.map((item) => (

          <div
            key={item.id}
            className="p-6 hover:bg-gray-50 transition"
          >

            <div className="flex justify-between items-start gap-4">

              <div className="flex-1">

                <div className="flex items-center gap-2 flex-wrap">

                  {item.pinned && (
                    <FaThumbtack className="text-orange-500" />
                  )}

                  <FaCircleQuestion className="text-blue-700" />

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  {item.solved && (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <FaCircleCheck />
                      Solved
                    </span>
                  )}

                </div>

                <div className="flex flex-wrap gap-5 mt-4 text-sm text-gray-500">

                  <div className="flex items-center gap-2">
                    <FaUserGraduate />
                    {item.student}
                  </div>

                  <div>
                    {item.subject}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaClock />
                    {item.time}
                  </div>

                </div>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${priorityColor[item.priority]}`}
              >
                {item.priority}
              </span>

            </div>

            <div className="flex justify-between items-center mt-6">

              <div className="text-sm text-gray-500">
                {item.replies} Replies
              </div>

              <div className="flex gap-3">

                <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
                  Reply
                </button>

                <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center gap-2">
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