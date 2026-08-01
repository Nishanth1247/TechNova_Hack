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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Profile Header */}
        <div className="bg-white border rounded-xl shadow-sm p-6">

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

            <div className="relative">

              <div className="w-28 h-28 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-5xl">
                <FaUser />
              </div>

              <button className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition">
                <FaCamera size={14} />
              </button>

            </div>

            <div className="flex-1">

              <h1 className="text-2xl font-bold text-gray-800">
                {user.name}
              </h1>

              <p className="text-gray-500 mt-1">
                {user.role}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">

                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {user.department}
                </span>

                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {user.semester}
                </span>

                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  Section {user.section}
                </span>

              </div>

            </div>

            <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg transition">
              <FaPenToSquare />
              Edit Profile
            </button>

          </div>

        </div>

        {/* Information */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Personal */}
          <div className="bg-white border rounded-xl shadow-sm p-6">

            <h2 className="text-lg font-semibold mb-5">
              Personal Information
            </h2>

            <div className="space-y-5">

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="font-medium">
                  {user.email}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <p className="font-medium">
                  {user.phone}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Register Number
                </p>

                <p className="font-medium">
                  {user.regNo}
                </p>
              </div>

            </div>

          </div>

          {/* Academic */}
          <div className="bg-white border rounded-xl shadow-sm p-6">

            <h2 className="text-lg font-semibold mb-5">
              Academic Information
            </h2>

            <div className="space-y-5">

              <div>
                <p className="text-sm text-gray-500">
                  Department
                </p>

                <p className="font-medium">
                  {user.department}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Semester
                </p>

                <p className="font-medium">
                  {user.semester}
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Activity Summary */}
        <div className="bg-white border rounded-xl shadow-sm p-6">

          <h2 className="text-lg font-semibold mb-6">
            Activity Summary
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-700">
                24
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Announcements Read
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600">
                18
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Resources Downloaded
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-orange-500">
                12
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Discussion Posts
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-600">
                3
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Open Tickets
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  </DashboardLayout>
);
}

export default Profile;