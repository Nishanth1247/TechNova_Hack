import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { FaUserPlus, FaUser, FaEnvelope, FaPhone, FaBuilding, FaGraduationCap } from "react-icons/fa6";

function AddUser() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Student",
    department: "CSE",
    year: "First Year",
    section: "A",
    registerNo: "",
    employeeId: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("User created successfully!");
  };

  return (
  <DashboardLayout>
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow border">

        {/* Header */}
        <div className="border-b px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Add New User
          </h1>
          <p className="text-gray-500 mt-1">
            Register a new student, faculty, or administrator.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-8"
        >
          {/* Personal Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-5">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  <option>Student</option>
                  <option>Faculty</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-5">
              Academic Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Department
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  <option>CSE</option>
                  <option>IT</option>
                  <option>ECE</option>
                  <option>EEE</option>
                  <option>Mechanical</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Academic Year
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  <option>First Year</option>
                  <option>Second Year</option>
                  <option>Third Year</option>
                  <option>Final Year</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Register No (Student)
                </label>
                <input
                  type="text"
                  name="registerNo"
                  value={formData.registerNo}
                  onChange={handleChange}
                  placeholder="22CSR001"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Employee ID (Faculty/Admin)
                </label>
                <input
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  placeholder="EMP001"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Section
                </label>
                <select
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Temporary Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter temporary password"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t pt-6">
            <button
              type="button"
              className="px-6 py-2.5 border rounded-lg hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  </DashboardLayout>
);
}

export default AddUser;