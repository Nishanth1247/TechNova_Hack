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
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Announcement Analytics
          </h1>

          <p className="text-gray-500 mt-2">
            Mid Semester Examination Schedule
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-700 shadow-sm hover:bg-gray-100 transition">
          <FaDownload />
          Export Report
        </button>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* Total Recipients */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition p-6">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500 text-sm">
                Total Recipients
              </p>

              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                1200
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <FaUsers className="text-blue-600 text-xl" />
            </div>

          </div>

        </div>

        {/* Acknowledged */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition p-6">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500 text-sm">
                Acknowledged
              </p>

              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                1054
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <FaCircleCheck className="text-green-600 text-xl" />
            </div>

          </div>

        </div>

        {/* Pending */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition p-6">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500 text-sm">
                Pending
              </p>

              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                146
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
              <FaTriangleExclamation className="text-red-600 text-xl" />
            </div>

          </div>

        </div>

        {/* Read Rate */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition p-6">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500 text-sm">
                Read Rate
              </p>

              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                92%
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <FaClock className="text-orange-500 text-xl" />
            </div>

          </div>

        </div>

      </div>

      {/* Department Progress */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Department Acknowledgement
        </h2>

        <div className="space-y-6">

          {departmentStats.map((dept) => (

            <div key={dept.department}>

              <div className="flex justify-between mb-2 text-sm">

                <span className="font-medium text-gray-700">
                  {dept.department}
                </span>

                <span className="text-gray-500">
                  {dept.percentage}%
                </span>

              </div>

              <div className="w-full h-3 bg-gray-100 rounded-full">

                <div
                  className="h-3 bg-blue-600 rounded-full transition-all duration-500"
                  style={{
                    width: `${dept.percentage}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Pending Students */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

        <div className="px-6 py-5 border-b border-gray-200">

          <h2 className="text-xl font-semibold text-gray-800">
            Students Pending Acknowledgement
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Register No
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Name
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Department
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {pendingStudents.map((student) => (

                <tr
                  key={student.regNo}
                  className="border-t border-gray-100 hover:bg-gray-50 transition"
                >

                  <td className="px-6 py-4 text-gray-700">
                    {student.regNo}
                  </td>

                  <td className="px-6 py-4 text-gray-700">
                    {student.name}
                  </td>

                  <td className="px-6 py-4 text-gray-700">
                    {student.department}
                  </td>

                  <td className="px-6 py-4">

                    <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                      Pending
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  </DashboardLayout>
);
}

export default AnnouncementAnalytics;