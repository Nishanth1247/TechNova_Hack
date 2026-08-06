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
import { useEffect, useState } from "react";

import {
    getUsers,
    deleteUser,
} from "../../api/userApi";

function Users() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");

  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
}, []);

const loadUsers = async () => {

    try {

        const data = await getUsers();

        setUsers(data);

    } catch (err) {

        console.log(err);

    }

};
const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Delete this user?"
    );

    if (!confirmDelete) return;

    try {

        await deleteUser(id);

        loadUsers();

    } catch (err) {

        console.log(err);

    }

};
const searchText = search.toLowerCase();

const filteredUsers = users.filter((user) => {

  const matchesSearch =
    (user.name ?? "").toLowerCase().includes(searchText) ||
    (user.email ?? "").toLowerCase().includes(searchText) ||
    (user.department ?? "").toLowerCase().includes(searchText);

  const matchesRole =
    roleFilter === "All" ||
    (user.role ?? "") === roleFilter;

  return matchesSearch && matchesRole;
});
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
        <div className="flex flex-col md:flex-row gap-4 p-6 border-b">

  <div className="flex flex-1 items-center border rounded-lg px-4">

    <FaMagnifyingGlass className="text-gray-400" />

    <input
      type="text"
      placeholder="Search users..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="flex-1 px-3 py-3 outline-none"
    />

  </div>

  <select
    value={roleFilter}
    onChange={(e) => setRoleFilter(e.target.value)}
    className="border rounded-lg px-4 py-3 md:w-56"
  >
    <option value="All">All Roles</option>
    <option value="student">Student</option>
    <option value="faculty">Faculty</option>
    <option value="admin">Admin</option>
  </select>

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

  {filteredUsers.length > 0 ? (

    filteredUsers.map((user) => (

      <tr
        key={user.id}
        className="border-t hover:bg-gray-50 transition"
      >

        <td className="px-6 py-5">

          <div className="flex items-center gap-3">

            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                user.role === "student"
                  ? "bg-blue-100 text-blue-600"
                  : user.role === "faculty"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {user.role === "student" ? (
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

        <td className="px-6 text-gray-600 capitalize">
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

            <button
              onClick={() => handleDelete(user.id)}
              className="p-2 rounded-lg text-red-600 hover:bg-red-100 transition"
            >
              <FaTrash />
            </button>

          </div>

        </td>

      </tr>

    ))

  ) : (

    <tr>

      <td
        colSpan="6"
        className="py-10 text-center text-gray-500"
      >
        No users found.
      </td>

    </tr>

  )}

</tbody>

          </table>

        </div>

      </div>
    </div>
  </DashboardLayout>
);
}

export default Users;