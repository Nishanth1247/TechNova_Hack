import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaPlus,
  FaMagnifyingGlass,
  FaEye,
  FaPen,
  FaTrash,
} from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

function Announcements() {
    const navigate = useNavigate();

  const announcements = [
    {
      id: 1,
      title: "Mid Semester Examination Schedule",
      priority: "High",
      target: "All Students",
      acknowledgements: "892 / 1200",
      date: "31 Jul 2026",
    },
    {
      id: 2,
      title: "Placement Training Registration",
      priority: "Normal",
      target: "Final Year",
      acknowledgements: "315 / 420",
      date: "30 Jul 2026",
    },
    {
      id: 3,
      title: "Fire Safety Drill",
      priority: "Emergency",
      target: "Entire College",
      acknowledgements: "1105 / 1200",
      date: "29 Jul 2026",
    },
  ];

  const priorityColor = (priority) => {
    switch (priority) {
      case "Emergency":
        return "bg-red-100 text-red-700";

      case "High":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Announcement Center
          </h1>

          <p className="text-gray-500 mt-1">
            Manage official college announcements.
          </p>

        </div>

        <button
            onClick={() => navigate("/admin/announcements/create")}
            className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-lg flex items-center gap-2"
            >
            <FaPlus />
            Create Announcement
        </button>
        

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow-sm p-5 mt-8 flex gap-4">

        <div className="flex items-center border rounded-lg px-4 flex-1">

          <FaMagnifyingGlass className="text-gray-400" />

          <input
            type="text"
            placeholder="Search announcements..."
            className="flex-1 outline-none px-3 py-3"
          />

        </div>

        <select className="border rounded-lg px-4">

          <option>All Priority</option>
          <option>Emergency</option>
          <option>High</option>
          <option>Normal</option>

        </select>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow-sm mt-8 overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="text-left px-6 py-4">
                Title
              </th>

              <th className="text-left">
                Priority
              </th>

              <th className="text-left">
                Target
              </th>

              <th className="text-left">
                Acknowledged
              </th>

              <th className="text-left">
                Date
              </th>

              <th className="text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {announcements.map((item) => (

              <tr
                key={item.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-6 py-5 font-medium">
                  {item.title}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${priorityColor(
                      item.priority
                    )}`}
                  >
                    {item.priority}
                  </span>

                </td>

                <td>{item.target}</td>

                <td>{item.acknowledgements}</td>

                <td>{item.date}</td>

                <td>

                  <div className="flex justify-center gap-5">

                    <button
  onClick={() => navigate(`/admin/announcements/${item.id}`)}
  className="text-blue-700"
>
  <FaEye />
</button>

                    <button className="text-yellow-600">

                      <FaPen />

                    </button>

                    <button className="text-red-600">

                      <FaTrash />

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

export default Announcements;