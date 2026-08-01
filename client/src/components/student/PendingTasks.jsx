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
    <div className="bg-white rounded-2xl shadow-sm border">

      {/* Header */}

      <div className="p-6 border-b">

        <div className="flex items-center gap-3">

          <FaClipboardCheck className="text-blue-700 text-2xl"/>

          <div>

            <h2 className="text-2xl font-bold">

              Pending Tasks

            </h2>

            <p className="text-gray-500 mt-1">

              Complete these before their deadline.

            </p>

          </div>

        </div>

      </div>

      {/* Tasks */}

      <div className="divide-y">

        {tasks.map((task) => (

          <div
            key={task.id}
            className="p-5 hover:bg-gray-50 transition"
          >

            <div className="flex justify-between items-start">

              <div>

                <h3 className="font-semibold text-lg">

                  {task.title}

                </h3>

                <div className="flex items-center gap-2 mt-2 text-gray-500">

                  <FaBookOpen />

                  {task.subject}

                </div>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm ${priorityColor[task.priority]}`}
              >
                {task.priority}
              </span>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-5">

              <div className="flex items-center gap-2 text-gray-600">

                <FaCalendarDays />

                {task.due}

              </div>

              <div className="flex items-center gap-2 text-gray-600">

                <FaClock />

                {task.time}

              </div>

            </div>

            <div className="flex gap-3 mt-5">

              <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg">

                View Details

              </button>

              <button className="border px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2">

                Open Workspace

                <FaArrowRight />

              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="bg-yellow-50 rounded-b-2xl border-t p-5 flex items-center justify-between">

        <div className="flex items-center gap-2 text-yellow-700">

          <FaTriangleExclamation />

          <span>

            1 Task Due Today

          </span>

        </div>

        <span className="font-bold">

          3 Pending

        </span>

      </div>

    </div>
  );
}

export default PendingTasks;