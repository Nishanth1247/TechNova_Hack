import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaBullhorn,
  FaUsers,
  FaCircleCheck,
  FaClock,
  FaTriangleExclamation,
  FaDownload,
} from "react-icons/fa6";

function AnnouncementAnalytics() {
  const departmentStats = [
    { department: "CSE", percentage: 98 },
    { department: "IT", percentage: 94 },
    { department: "ECE", percentage: 88 },
    { department: "EEE", percentage: 82 },
    { department: "MECH", percentage: 76 },
  ];

  const pendingStudents = [
    {
      regNo: "22CSR101",
      name: "Rahul Kumar",
      department: "CSE",
    },
    {
      regNo: "22IT056",
      name: "Priya S",
      department: "IT",
    },
    {
      regNo: "22EC083",
      name: "Arun V",
      department: "ECE",
    },
    {
      regNo: "22EE031",
      name: "Karthik",
      department: "EEE",
    },
  ];

  return (
    <DashboardLayout >

      <div className="space-y-6">

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl text-white p-8">

          <div className="flex justify-between items-center flex-wrap gap-4">

            <div>

              <h1 className="text-4xl font-bold">
                Announcement Analytics
              </h1>

              <p className="text-blue-200 mt-3">
                Mid Semester Examination Schedule
              </p>

            </div>

            <button className="bg-white text-blue-800 px-5 py-3 rounded-lg flex items-center gap-2">

              <FaDownload />

              Export Report

            </button>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl border shadow-sm p-6">

            <FaUsers className="text-blue-700 text-2xl" />

            <h2 className="text-3xl font-bold mt-4">
              1200
            </h2>

            <p className="text-gray-500">
              Total Recipients
            </p>

          </div>

          <div className="bg-white rounded-xl border shadow-sm p-6">

            <FaCircleCheck className="text-green-600 text-2xl" />

            <h2 className="text-3xl font-bold mt-4">
              1054
            </h2>

            <p className="text-gray-500">
              Acknowledged
            </p>

          </div>

          <div className="bg-white rounded-xl border shadow-sm p-6">

            <FaTriangleExclamation className="text-red-600 text-2xl" />

            <h2 className="text-3xl font-bold mt-4">
              146
            </h2>

            <p className="text-gray-500">
              Pending
            </p>

          </div>

          <div className="bg-white rounded-xl border shadow-sm p-6">

            <FaClock className="text-orange-500 text-2xl" />

            <h2 className="text-3xl font-bold mt-4">
              92%
            </h2>

            <p className="text-gray-500">
              Read Rate
            </p>

          </div>

        </div>

        {/* Department Progress */}

        <div className="bg-white rounded-2xl shadow-sm border p-6">

          <h2 className="text-2xl font-semibold mb-6">
            Department Acknowledgement
          </h2>

          <div className="space-y-6">

            {departmentStats.map((dept) => (

              <div key={dept.department}>

                <div className="flex justify-between mb-2">

                  <span className="font-medium">
                    {dept.department}
                  </span>

                  <span>
                    {dept.percentage}%
                  </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-4">

                  <div
                    className="bg-blue-700 h-4 rounded-full"
                    style={{
                      width: `${dept.percentage}%`,
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Pending Students */}

        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">

          <div className="px-6 py-5 border-b">

            <h2 className="text-2xl font-semibold">
              Students Pending Acknowledgement
            </h2>

          </div>

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="text-left px-6 py-4">
                  Register No
                </th>

                <th className="text-left">
                  Name
                </th>

                <th className="text-left">
                  Department
                </th>

                <th className="text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {pendingStudents.map((student) => (

                <tr
                  key={student.regNo}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="px-6 py-4">
                    {student.regNo}
                  </td>

                  <td>{student.name}</td>

                  <td>{student.department}</td>

                  <td>

                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">

                      Pending

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default AnnouncementAnalytics;