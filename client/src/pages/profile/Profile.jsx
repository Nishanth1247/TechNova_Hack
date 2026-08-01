import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaGraduationCap,
  FaIdBadge,
  FaPenToSquare,
  FaCamera,
} from "react-icons/fa6";

function Profile() {
  const user = {
    name: "Rahul Kumar",
    role: "Student",
    regNo: "22CSR101",
    department: "Computer Science & Engineering",
    email: "rahul@college.edu",
    phone: "+91 9876543210",
    semester: "Semester V",
    section: "A",
  };

  return (
    <DashboardLayout role="student">
      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-white">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <div className="relative">

              <div className="w-36 h-36 rounded-full bg-white text-blue-800 flex items-center justify-center text-6xl">

                <FaUser />

              </div>

              <button className="absolute bottom-2 right-2 bg-blue-600 p-3 rounded-full hover:bg-blue-700">

                <FaCamera />

              </button>

            </div>

            <div>

              <h1 className="text-4xl font-bold">
                {user.name}
              </h1>

              <p className="text-blue-200 mt-2">
                {user.role}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <span className="bg-white/20 px-4 py-2 rounded-full">
                  {user.department}
                </span>

                <span className="bg-white/20 px-4 py-2 rounded-full">
                  {user.semester}
                </span>

                <span className="bg-white/20 px-4 py-2 rounded-full">
                  Section {user.section}
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Information */}

        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <h2 className="text-2xl font-semibold mb-6">
              Personal Information
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-700" />
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p>{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-blue-700" />
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p>{user.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaIdBadge className="text-blue-700" />
                <div>
                  <p className="text-gray-500 text-sm">Register Number</p>
                  <p>{user.regNo}</p>
                </div>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <h2 className="text-2xl font-semibold mb-6">
              Academic Information
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaBuilding className="text-blue-700" />
                <div>
                  <p className="text-gray-500 text-sm">Department</p>
                  <p>{user.department}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaGraduationCap className="text-blue-700" />
                <div>
                  <p className="text-gray-500 text-sm">Semester</p>
                  <p>{user.semester}</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Activity */}

        <div className="bg-white rounded-2xl shadow-sm border p-6 mt-8">

          <h2 className="text-2xl font-semibold mb-6">
            Activity Summary
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-700">24</h3>
              <p className="text-gray-500">Announcements Read</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600">18</h3>
              <p className="text-gray-500">Resources Downloaded</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-orange-500">12</h3>
              <p className="text-gray-500">Discussion Posts</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-600">3</h3>
              <p className="text-gray-500">Open Support Tickets</p>
            </div>

          </div>

        </div>

        {/* Action */}

        <div className="flex justify-end mt-8">

          <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center gap-2">

            <FaPenToSquare />

            Edit Profile

          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Profile;