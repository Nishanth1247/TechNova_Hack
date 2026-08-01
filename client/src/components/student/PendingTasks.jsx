import {
  FaClipboardCheck,
  FaBookOpen,
  FaCalendarDays,
  FaClock,
  FaTriangleExclamation,
  FaArrowRight,
} from "react-icons/fa6";

function PendingTasks() {

  const tasks = [
    {
      id: 1,
      title: "DBMS Assignment - Unit 4",
      subject: "Database Management System",
      due: "Today",
      time: "05:00 PM",
      priority: "High",
    },
    {
      id: 2,
      title: "Operating Systems Lab Record",
      subject: "Operating Systems",
      due: "Tomorrow",
      time: "09:00 AM",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Data Structures Quiz",
      subject: "Data Structures",
      due: "03 Aug 2026",
      time: "10:00 AM",
      priority: "Low",
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
    <div className="flex items-center gap-3 p-5 border-b">

      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
        <FaClipboardCheck className="text-blue-600" />
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Pending Tasks
        </h2>

        <p className="text-sm text-gray-500">
          Complete these before their deadline.
        </p>
      </div>

    </div>

    {/* Tasks */}
    <div className="divide-y">

      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-5 hover:bg-gray-50 transition"
        >

          {/* Top */}
          <div className="flex justify-between items-start gap-4">

            <div>

              <h3 className="font-medium text-gray-800">
                {task.title}
              </h3>

              <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                <FaBookOpen />
                {task.subject}
              </div>

            </div>

            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                priorityColor[task.priority]
              }`}
            >
              {task.priority}
            </span>

          </div>

          {/* Schedule */}
          <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-600">

            <div className="flex items-center gap-2">
              <FaCalendarDays />
              {task.due}
            </div>

            <div className="flex items-center gap-2">
              <FaClock />
              {task.time}
            </div>

          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-5">

            <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition">
              View Details
            </button>

            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
              Open Workspace
              <FaArrowRight size={12} />
            </button>

          </div>

        </div>
      ))}

    </div>

    {/* Footer */}
    <div className="border-t p-5 flex justify-between items-center">

      <div className="flex items-center gap-2 text-yellow-600 text-sm">

        <FaTriangleExclamation />

        <span>
          1 Task Due Today
        </span>

      </div>

      <span className="font-semibold text-gray-800">
        3 Pending
      </span>

    </div>

  </div>
);
}

export default PendingTasks;