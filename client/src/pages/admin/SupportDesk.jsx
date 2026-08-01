import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaPlus,
  FaMagnifyingGlass,
  FaEye,
  FaPen,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function SupportDesk() {
  const navigate = useNavigate();

  const tickets = [
    {
      id: 1,
      title: "Unable to Access Student Portal",
      category: "Technical",
      student: "Rahul Kumar",
      priority: "High",
      status: "Open",
      date: "31 Jul 2026",
    },
    {
      id: 2,
      title: "Library Card Renewal",
      category: "Library",
      student: "Priya S",
      priority: "Medium",
      status: "In Progress",
      date: "30 Jul 2026",
    },
    {
      id: 3,
      title: "Exam Hall Ticket Issue",
      category: "Examination",
      student: "Arun V",
      priority: "High",
      status: "Resolved",
      date: "29 Jul 2026",
    },
  ];

  const statusColor = {
    Open: "bg-red-100 text-red-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    Resolved: "bg-green-100 text-green-700",
  };

  return (
    <DashboardLayout >
      {/* Header */}

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Support Desk
          </h1>

          <p className="text-gray-500 mt-2">
            Manage student support requests.
          </p>
        </div>

        <button
          onClick={() =>
            navigate("/admin/support/create")
          }
          className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-lg flex items-center gap-2"
        >
          <FaPlus />
          New Ticket
        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow-sm p-5 mt-8 flex gap-4">

        <div className="flex items-center border rounded-lg px-4 flex-1">

          <FaMagnifyingGlass className="text-gray-400" />

          <input
            placeholder="Search tickets..."
            className="flex-1 outline-none px-3 py-3"
          />

        </div>

        <select className="border rounded-lg px-4">

          <option>All Status</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>

        </select>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow-sm mt-8 overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="text-left px-6 py-4">
                Ticket
              </th>

              <th className="text-left">
                Student
              </th>

              <th className="text-left">
                Category
              </th>

              <th className="text-left">
                Priority
              </th>

              <th className="text-left">
                Status
              </th>

              <th className="text-left">
                Date
              </th>

              <th className="text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {tickets.map((ticket) => (

              <tr
                key={ticket.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-6 py-5 font-medium">
                  {ticket.title}
                </td>

                <td>{ticket.student}</td>

                <td>{ticket.category}</td>

                <td>{ticket.priority}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${statusColor[ticket.status]}`}
                  >
                    {ticket.status}
                  </span>

                </td>

                <td>{ticket.date}</td>

                <td>

                  <div className="flex justify-center gap-4">

                    <button
                      onClick={() =>
                        navigate(
                          `/admin/support/${ticket.id}`
                        )
                      }
                      className="text-blue-700"
                    >
                      <FaEye />
                    </button>

                    <button className="text-yellow-600">
                      <FaPen />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
}

export default SupportDesk;