import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaPlus,
  FaMagnifyingGlass,
  FaEye,
  FaPen,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSupportTickets } from "../../api/supportApi";

function SupportDesk() {
  const navigate = useNavigate();

  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    loadTickets();
}, []);

const loadTickets = async () => {

    try {

        const data = await getSupportTickets();

        setTickets(data);

    } catch (err) {

        console.log(err);

    }

};


  const statusColor = {
    Open: "bg-red-100 text-red-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    Closed: "bg-green-100 text-green-700",
};

  return (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Support Desk
          </h1>

          <p className="mt-2 text-gray-500">
            Manage student support requests.
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/support/create")}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
        >
          <FaPlus />
          New Ticket
        </button>

      </div>

      {/* Search & Filter */}

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

        <div className="flex flex-col md:flex-row gap-4">

          <div className="flex flex-1 items-center rounded-xl border border-gray-300 px-4">

            <FaMagnifyingGlass className="text-gray-400" />

            <input
              placeholder="Search tickets..."
              className="w-full bg-transparent px-3 py-3 outline-none"
            />

          </div>

          <select className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500">

           <option>All Status</option>
<option>Open</option>
<option>In Progress</option>
<option>Closed</option>

          </select>

        </div>

      </div>

      {/* Tickets Table */}

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

        <div className="border-b border-gray-200 px-6 py-5">

          <h2 className="text-xl font-semibold text-gray-800">
            Support Tickets
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Ticket
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Student
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
  Category
</th>

<th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
  Status
</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Date
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {tickets.map((ticket) => (

                <tr
                  key={ticket.id}
                  className="border-t border-gray-100 hover:bg-gray-50 transition"
                >

                  <td className="px-6 py-5 font-medium text-gray-800">
                    {ticket.title}
                  </td>

                  <td className="px-6 py-5 text-gray-600">
                    {ticket.student}
                  </td>

                  <td className="px-6 py-5 text-gray-600">
                    {ticket.category}
                  </td>

                  <td className="px-6 py-5 text-gray-600">
    {ticket.category}
</td>

<td className="px-6 py-5">
    <span
        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
            statusColor[ticket.status] || "bg-gray-100 text-gray-700"
        }`}
    >
        {ticket.status}
    </span>
</td>

<td className="px-6 py-5 text-gray-500">
    {new Date(ticket.created_at).toLocaleDateString()}
</td>

                  <td className="px-6 py-5">

                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusColor[ticket.status]}`}
                    >
                      {ticket.status}
                    </span>

                  </td>

                  <td className="px-6 py-5 text-gray-500">
                    {new Date(ticket.created_at).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() =>
                          navigate(`/admin/support/${ticket.id}`)
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                      >
                        <FaEye />
                      </button>

                      <button
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition"
                      >
                        <FaPen />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  </DashboardLayout>
);
}

export default SupportDesk;