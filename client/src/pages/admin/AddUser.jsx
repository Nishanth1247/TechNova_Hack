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
    <DashboardLayout >
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border">

        <div className="bg-blue-800 text-white rounded-t-2xl p-6 flex items-center gap-3">
          <FaUserPlus size={24} />
          <div>
            <h1 className="text-3xl font-bold">Add New User</h1>
            <p className="text-blue-200 mt-1">
              Register a new student or faculty member.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-medium block mb-2">
                Full Name
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaUser className="text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="flex-1 px-3 py-3 outline-none"
                  placeholder="Enter full name"
                />
              </div>
            </div>

            <div>
              <label className="font-medium block mb-2">
                Email
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaEnvelope className="text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 px-3 py-3 outline-none"
                  placeholder="Enter email"
                />
              </div>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-medium block mb-2">
                Phone Number
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaPhone className="text-gray-400" />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 px-3 py-3 outline-none"
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div>
              <label className="font-medium block mb-2">
                Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option>Student</option>
                <option>Faculty</option>
                <option>Admin</option>
              </select>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-medium block mb-2">
                Department
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaBuilding className="text-gray-400" />
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="flex-1 py-3 outline-none bg-transparent"
                >
                  <option>CSE</option>
                  <option>IT</option>
                  <option>ECE</option>
                  <option>EEE</option>
                  <option>Mechanical</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-medium block mb-2">
                Academic Year
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaGraduationCap className="text-gray-400" />
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="flex-1 py-3 outline-none bg-transparent"
                >
                  <option>First Year</option>
                  <option>Second Year</option>
                  <option>Third Year</option>
                  <option>Final Year</option>
                </select>
              </div>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-medium block mb-2">
                Register No (Student)
              </label>

              <input
                type="text"
                name="registerNo"
                value={formData.registerNo}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="22CSR001"
              />
            </div>

            <div>
              <label className="font-medium block mb-2">
                Employee ID (Faculty/Admin)
              </label>

              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="EMP001"
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-medium block mb-2">
                Section
              </label>

              <select
                name="section"
                value={formData.section}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>

            <div>
              <label className="font-medium block mb-2">
                Temporary Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Enter temporary password"
              />
            </div>

          </div>

          <div className="flex justify-end gap-4 pt-4">

            <button
              type="button"
              className="border px-6 py-3 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg"
            >
              Create User
            </button>

          </div>

        </form>

      </div>
    </DashboardLayout>
  );
}

export default AddUser;