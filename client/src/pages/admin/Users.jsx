import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaUserPlus,
  FaMagnifyingGlass,
  FaPen,
  FaTrash,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Users() {
    const navigate = useNavigate();
  const users = [
    {
      id: 1,
      name: "Rahul Kumar",
      role: "Student",
      department: "CSE",
      email: "rahul@college.edu",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Faculty",
      department: "IT",
      email: "priya@college.edu",
      status: "Active",
    },
    {
      id: 3,
      name: "Arun Kumar",
      role: "Student",
      department: "ECE",
      email: "arun@college.edu",
      status: "Inactive",
    },
  ];

  return (
  <DashboardLayout>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white border rounded-xl shadow-sm">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-6 border-b">

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              User Management
            </h1>

            <p className="text-gray-500 mt-1">
              Manage students and faculty accounts.
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/users/add")}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg transition"
          >
            <FaUserPlus />
            Add User
          </button>

        </div>

        {/* Search */}
        <div className="p-6 border-b">

          <div className="flex items-center border rounded-lg px-4">

            <FaMagnifyingGlass className="text-gray-400" />

            <input
              type="text"
              placeholder="Search users..."
              className="flex-1 px-3 py-3 outline-none"
            />

          </div>

        </div>

        {/* User Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50">
              <tr className="text-left text-gray-600">

                <th className="px-6 py-4 font-semibold">
                  User
                </th>

                <th className="px-6 py-4 font-semibold">
                  Role
                </th>

                <th className="px-6 py-4 font-semibold">
                  Department
                </th>

                <th className="px-6 py-4 font-semibold">
                  Email
                </th>

                <th className="px-6 py-4 font-semibold">
                  Status
                </th>

                <th className="px-6 py-4 text-center font-semibold">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          user.role === "Student"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {user.role === "Student" ? (
                          <FaUserGraduate />
                        ) : (
                          <FaUserTie />
                        )}
                      </div>

                      <span className="font-medium text-gray-800">
                        {user.name}
                      </span>

                    </div>

                  </td>

                  <td className="px-6 text-gray-600">
                    {user.role}
                  </td>

                  <td className="px-6 text-gray-600">
                    {user.department}
                  </td>

                  <td className="px-6 text-gray-600">
                    {user.email}
                  </td>

                  <td className="px-6">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>

                  </td>

                  <td className="px-6">

                    <div className="flex justify-center gap-2">

                      <button className="p-2 rounded-lg text-yellow-600 hover:bg-yellow-100 transition">
                        <FaPen />
                      </button>

                      <button className="p-2 rounded-lg text-red-600 hover:bg-red-100 transition">
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

export default Users;