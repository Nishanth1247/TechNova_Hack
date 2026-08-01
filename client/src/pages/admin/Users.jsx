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
    <DashboardLayout >
      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            User Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage students and faculty accounts.
          </p>

        </div>

        <button
  onClick={() => navigate("/admin/users/add")}
  className="bg-blue-800 text-white px-5 py-3 rounded-lg hover:bg-blue-900 flex items-center gap-2"
>
  <FaUserPlus />
  Add User
</button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow-sm mt-8 p-5">

        <div className="flex items-center border rounded-lg px-4">

          <FaMagnifyingGlass className="text-gray-400" />

          <input
            className="flex-1 outline-none px-3 py-3"
            placeholder="Search users..."
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow-sm mt-8 overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="text-left px-6 py-4">
                Name
              </th>

              <th className="text-left">
                Role
              </th>

              <th className="text-left">
                Department
              </th>

              <th className="text-left">
                Email
              </th>

              <th className="text-left">
                Status
              </th>

              <th className="text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    {user.role === "Student" ? (
                      <FaUserGraduate className="text-blue-600" />
                    ) : (
                      <FaUserTie className="text-green-600" />
                    )}

                    {user.name}

                  </div>

                </td>

                <td>{user.role}</td>

                <td>{user.department}</td>

                <td>{user.email}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>

                </td>

                <td>

                  <div className="flex justify-center gap-5">

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

export default Users;