import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaUsers,
  FaUserTie,
  FaBullhorn,
  FaHeadset,
  FaTriangleExclamation,
  FaArrowTrendUp,
} from "react-icons/fa6";

function Dashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "1,248",
      icon: <FaUsers size={24} />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Faculty Members",
      value: "86",
      icon: <FaUserTie size={24} />,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Announcements",
      value: "24",
      icon: <FaBullhorn size={24} />,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Open Tickets",
      value: "18",
      icon: <FaHeadset size={24} />,
      color: "bg-red-100 text-red-700",
    },
  ];

  return (
    <DashboardLayout >
      {/* Welcome */}

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl text-white p-8 shadow-lg">

        <h1 className="text-3xl font-bold">
          Welcome Back, Admin 👋
        </h1>

        <p className="mt-2 text-blue-100">
          Manage announcements, academic resources, support requests,
          and official communication across the campus.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-sm p-6 border"
          >
            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>

              </div>

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}
              >
                {item.icon}
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Bottom Grid */}

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        {/* Recent Announcements */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-xl font-semibold mb-4">
            Recent Announcements
          </h2>

          <div className="space-y-4">

            <div className="border rounded-xl p-4">
              <h3 className="font-semibold">
                Mid Semester Examination Schedule
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Published for all departments.
              </p>
            </div>

            <div className="border rounded-xl p-4">
              <h3 className="font-semibold">
                Placement Training Registration
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Open for Final Year Students.
              </p>
            </div>

            <div className="border rounded-xl p-4">
              <h3 className="font-semibold">
                Internal Assessment Circular
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Published by Academic Office.
              </p>
            </div>

          </div>

        </div>

        {/* Emergency */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <div className="flex justify-between items-center">

            <h2 className="text-xl font-semibold">
              Emergency Broadcast
            </h2>

            <FaTriangleExclamation
              className="text-red-600"
              size={24}
            />

          </div>

          <div className="mt-8 border-2 border-dashed rounded-xl h-56 flex flex-col items-center justify-center">

            <FaTriangleExclamation
              className="text-red-500"
              size={45}
            />

            <h3 className="mt-4 font-semibold">
              No Active Emergency
            </h3>

            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">

              Broadcast Alert

            </button>

          </div>

        </div>

      </div>

      {/* Second Row */}

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        {/* Support */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-xl font-semibold mb-4">
            Pending Support Tickets
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span>Exam Hall Ticket Issue</span>
              <span className="text-orange-500 font-semibold">
                Pending
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Library Card Renewal</span>
              <span className="text-blue-600 font-semibold">
                In Progress
              </span>
            </div>

            <div className="flex justify-between">
              <span>WiFi Connectivity</span>
              <span className="text-green-600 font-semibold">
                Resolved
              </span>
            </div>

          </div>

        </div>

        {/* Activity */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <div className="flex items-center gap-3 mb-5">

            <FaArrowTrendUp className="text-blue-700" />

            <h2 className="text-xl font-semibold">
              Recent Activities
            </h2>

          </div>

          <ul className="space-y-4 text-gray-600">

            <li>✔ Faculty uploaded Data Structures notes.</li>

            <li>✔ Emergency alert acknowledged by 98% students.</li>

            <li>✔ 12 new support tickets created today.</li>

            <li>✔ Placement circular published.</li>

            <li>✔ 36 students acknowledged exam schedule.</li>

          </ul>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;