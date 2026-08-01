import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaUsers,
  FaUserTie,
  FaBullhorn,
  FaHeadset,
  FaTriangleExclamation,
  FaArrowTrendUp,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getDashboardStats } from "../../api/dashboardApi";

function Dashboard() {

  const [stats, setStats] = useState(null);

useEffect(() => {

    const fetchDashboard = async () => {

        try {

            const data = await getDashboardStats();

            setStats(data);

        } catch (err) {

            console.log(err);

        }

    };

    fetchDashboard();

}, []);

  const statsData = [
    {
        title: "Total Students",
        value: stats?.totalStudents ?? "-",
        icon: <FaUsers size={24} />,
        color: "bg-blue-100 text-blue-700",
    },
    {
        title: "Faculty Members",
        value: stats?.totalFaculty ?? "-",
        icon: <FaUserTie size={24} />,
        color: "bg-green-100 text-green-700",
    },
    {
        title: "Announcements",
        value: stats?.totalAnnouncements ?? "-",
        icon: <FaBullhorn size={24} />,
        color: "bg-yellow-100 text-yellow-700",
    },
    {
        title: "Open Tickets",
        value: stats?.openTickets ?? "-",
        icon: <FaHeadset size={24} />,
        color: "bg-red-100 text-red-700",
    },
];

  return (
  <DashboardLayout>
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto space-y-6">

        {/* Welcome */}
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome Back, Admin 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Manage announcements, academic resources, support requests,
            and official communication across the campus.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {statsData.map((item) => (
            <div
              key={item.title}
              className="bg-white border rounded-xl shadow-sm p-5 hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold text-gray-800 mt-2">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.color}`}
                >
                  {item.icon}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Recent Announcements */}
          <div className="bg-white border rounded-xl shadow-sm p-6">

            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Recent Announcements
            </h2>

            <div className="space-y-3">

    {stats?.recentAnnouncements?.map((item, index) => (

        <div
            key={index}
            className="border rounded-lg p-4 hover:bg-gray-50 transition"
        >

            <h3 className="font-medium">
                {item.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
                {item.description}
            </p>

        </div>

    ))}

</div>

          </div>

          {/* Emergency */}
          <div className="bg-white border rounded-xl shadow-sm p-6">

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-lg font-semibold">
                Emergency Broadcast
              </h2>

              <FaTriangleExclamation
                className="text-red-500"
                size={20}
              />

            </div>

            <div className="border-2 border-dashed rounded-xl h-64 flex flex-col items-center justify-center">

              <FaTriangleExclamation
                size={42}
                className="text-red-500"
              />

              <h3 className="mt-4 font-semibold text-gray-700">
                No Active Emergency
              </h3>

              <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg transition">
                Broadcast Alert
              </button>

            </div>

          </div>

        </div>

        {/* Bottom Cards */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Support Tickets */}
          <div className="bg-white border rounded-xl shadow-sm p-6">

            <h2 className="text-lg font-semibold mb-5">
              Pending Support Tickets
            </h2>

            <div className="space-y-4">

    {stats?.recentTickets?.map((ticket, index) => (

        <div
            key={index}
            className="flex justify-between border-b pb-3"
        >

            <span>{ticket.title}</span>

            <span
                className={`font-medium ${
                    ticket.status === "Open"
                        ? "text-red-600"
                        : ticket.status === "In Progress"
                        ? "text-orange-500"
                        : "text-green-600"
                }`}
            >
                {ticket.status}
            </span>

        </div>

    ))}

</div>

          </div>

          {/* Recent Activity */}
          <div className="bg-white border rounded-xl shadow-sm p-6">

            <div className="flex items-center gap-2 mb-5">
              <FaArrowTrendUp className="text-blue-600" />
              <h2 className="text-lg font-semibold">
                Recent Activities
              </h2>
            </div>

            <ul className="space-y-3 text-gray-600">

    {stats?.recentNotifications?.map((item, index) => (

        <li key={index}>

            ✔ {item.title}

        </li>

    ))}

</ul>

          </div>

        </div>

      </div>

    </div>
  </DashboardLayout>
);
}

export default Dashboard;