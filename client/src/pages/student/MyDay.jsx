import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaBookOpen,
  FaBullhorn,
  FaFolderOpen,
  FaComments,
  FaBell,
  FaClipboardCheck,
  FaClock,
  FaCircleInfo,
} from "react-icons/fa6";

function MyDay() {
  const classes = [
    {
      subject: "Data Structures",
      time: "09:00 - 10:50",
      room: "Room 405",
    },
    {
      subject: "DBMS Lab",
      time: "11:00 - 01:00",
      room: "Lab 3",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Welcome */}

        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl text-white p-8">

          <h1 className="text-4xl font-bold">
            Good Morning 👋
          </h1>

          <p className="text-blue-200 mt-3">
            Welcome back to CampusConnect.
          </p>

        </div>

        {/* Quick Stats */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

          <div className="bg-white rounded-xl p-6 shadow border">

            <FaBullhorn
              className="text-red-600 text-2xl"
            />

            <h2 className="text-3xl font-bold mt-4">
              2
            </h2>

            <p>New Announcements</p>

          </div>

          <div className="bg-white rounded-xl p-6 shadow border">

            <FaFolderOpen
              className="text-green-700 text-2xl"
            />

            <h2 className="text-3xl font-bold mt-4">
              3
            </h2>

            <p>New Resources</p>

          </div>

          <div className="bg-white rounded-xl p-6 shadow border">

            <FaComments
              className="text-blue-700 text-2xl"
            />

            <h2 className="text-3xl font-bold mt-4">
              5
            </h2>

            <p>Faculty Replies</p>

          </div>

          <div className="bg-white rounded-xl p-6 shadow border">

            <FaBell
              className="text-orange-500 text-2xl"
            />

            <h2 className="text-3xl font-bold mt-4">
              4
            </h2>

            <p>Notifications</p>

          </div>

        </div>

        {/* Today's Classes */}

        <div className="bg-white rounded-2xl shadow border p-6">

          <div className="flex items-center gap-3 mb-6">

            <FaBookOpen className="text-blue-700"/>

            <h2 className="text-2xl font-semibold">

              Today's Classes

            </h2>

          </div>

          <div className="space-y-5">

            {classes.map((item,index)=>(

              <div
              key={index}
              className="border rounded-xl p-5 flex justify-between"
              >

                <div>

                  <h3 className="font-semibold text-lg">

                    {item.subject}

                  </h3>

                  <p className="text-gray-500 mt-2">

                    {item.room}

                  </p>

                </div>

                <div className="flex items-center gap-2">

                  <FaClock/>

                  {item.time}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Pending */}

        <div className="grid lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-xl shadow border p-6">

            <div className="flex items-center gap-3">

              <FaClipboardCheck className="text-green-600"/>

              <h2 className="text-xl font-semibold">

                Pending Tasks

              </h2>

            </div>

            <ul className="mt-6 space-y-4">

              <li>✔ Assignment 3 Tomorrow</li>

              <li>✔ Lab Record Submission</li>

              <li>✔ IA Registration</li>

            </ul>

          </div>

          <div className="bg-white rounded-xl shadow border p-6">

            <div className="flex items-center gap-3">

              <FaCircleInfo className="text-orange-600"/>

              <h2 className="text-xl font-semibold">

                Latest Updates

              </h2>

            </div>

            <ul className="mt-6 space-y-4">

              <li>📢 New Unit Uploaded</li>

              <li>📚 New PPT Available</li>

              <li>💬 Faculty replied to your question</li>

            </ul>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default MyDay;