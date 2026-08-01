import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaPlus,
  FaMagnifyingGlass,
  FaEye,
  FaPen,
  FaTrash,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import {
  getAnnouncements,
  deleteAnnouncement,
} from "../../api/announcementApi";

import { useNavigate } from "react-router-dom";

function Announcements() {
    const navigate = useNavigate();

  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
  loadAnnouncements();
}, []);

const loadAnnouncements = async () => {
  try {
    const data = await getAnnouncements();
    setAnnouncements(data);
  } catch (err) {
    console.error("Error loading announcements:", err);
  }
};
const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this announcement?"
  );

  if (!confirmDelete) return;

  try {

    await deleteAnnouncement(id);

    loadAnnouncements();

  } catch (err) {

    console.error("Delete failed:", err);

  }

};

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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow border">

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Announcement Center
            </h1>
            <p className="text-gray-500 mt-1">
              Manage official college announcements.
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/announcements/create")}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg transition"
          >
            <FaPlus />
            Create Announcement
          </button>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 p-6 border-b">

          <div className="flex items-center flex-1 border rounded-lg px-4">
            <FaMagnifyingGlass className="text-gray-400" />

            <input
              type="text"
              placeholder="Search announcements..."
              className="flex-1 px-3 py-3 outline-none"
            />
          </div>

          <select className="border rounded-lg px-4 py-3 md:w-56">
            <option>All Priority</option>
            <option>Emergency</option>
            <option>High</option>
            <option>Normal</option>
          </select>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-50">
              <tr className="text-left text-gray-600">

                <th className="px-6 py-4 font-semibold">Title</th>
                <th className="px-6 py-4 font-semibold">Priority</th>
                <th className="px-6 py-4 font-semibold">Target</th>
                <th className="px-6 py-4 font-semibold">Acknowledged</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 text-center font-semibold">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {announcements.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-5 font-medium text-gray-800">
                    {item.title}
                  </td>

                  <td className="px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${priorityColor(
                        item.priority
                      )}`}
                    >
                      {item.priority}
                    </span>
                  </td>

                  <td className="px-6 text-gray-600">
                    {item.target_role}
                  </td>

                  <td className="px-6 text-gray-600">
                    {item.acknowledgements} Students
                  </td>

                  <td className="px-6 text-gray-600">
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>

                  <td className="px-6">
                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() =>
                          navigate(`/admin/announcements/${item.id}`)
                        }
                        className="p-2 rounded-lg text-blue-600 hover:bg-blue-100 transition"
                      >
                        <FaEye />
                      </button>

                      <button className="p-2 rounded-lg text-yellow-600 hover:bg-yellow-100 transition">
                        <FaPen />
                      </button>

                      <button
  onClick={() => handleDelete(item.id)}
  className="p-2 rounded-lg text-red-600 hover:bg-red-100 transition"
>
  <FaTrash />
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

export default Announcements;