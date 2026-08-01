import {
  FaUserGraduate,
  FaBuilding,
  FaCalendarDays,
  FaClock,
  FaBookOpen,
  FaBell,
  FaClipboardCheck,
  FaArrowRight,
} from "react-icons/fa6";

function StudentHeader() {
  return (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

    {/* Top Header */}
    <div className="bg-blue-600 px-8 py-7 text-white">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <p className="text-blue-100 text-sm">
            Friday • 31 July 2026
          </p>

          <h1 className="text-3xl font-bold mt-2">
            Good Morning, Rahul 👋
          </h1>

          <p className="text-blue-100 mt-2">
            III Year • Computer Science & Engineering
          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">
            Reg No : 22CSR101
          </span>

          <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">
            Semester V
          </span>

          <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">
            Section A
          </span>

        </div>

      </div>

    </div>

    {/* Content */}
    <div className="grid xl:grid-cols-3 gap-6 p-6">

      {/* Today's Focus */}
      <div className="xl:col-span-2 border border-gray-200 rounded-xl p-6">

        <h2 className="text-xl font-semibold text-gray-800 mb-5">
          Today's Focus
        </h2>

        <div className="space-y-4">

          <div className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <FaBookOpen className="text-blue-600" />
            </div>

            <span className="text-gray-700">
              Attend Data Structures
            </span>

          </div>

          <div className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <FaClipboardCheck className="text-red-600" />
            </div>

            <span className="text-gray-700">
              Submit DBMS Assignment
            </span>

          </div>

          <div className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
              <FaBell className="text-yellow-600" />
            </div>

            <span className="text-gray-700">
              Read 2 New Announcements
            </span>

          </div>

        </div>

      </div>

      {/* Right Side */}
      <div className="space-y-5">

        {/* Next Class */}
        <div className="border border-gray-200 rounded-xl p-5">

          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Next Class
          </h3>

          <h4 className="text-xl font-bold text-blue-600">
            Data Structures
          </h4>

          <p className="text-gray-500 mt-1">
            CS301
          </p>

          <div className="space-y-3 mt-5">

            <div className="flex items-center gap-3 text-gray-600">

              <FaClock className="text-blue-500" />

              <span>09:30 AM - 10:50 AM</span>

            </div>

            <div className="flex items-center gap-3 text-gray-600">

              <FaBuilding className="text-red-500" />

              <span>Room 405</span>

            </div>

          </div>

        </div>

        {/* Summary */}
        <div className="border border-gray-200 rounded-xl p-5">

          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Today's Summary
          </h3>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span className="text-gray-600">Classes</span>
              <span className="font-semibold">2</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Assignments</span>
              <span className="font-semibold text-red-600">
                3 Pending
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Announcements</span>
              <span className="font-semibold text-blue-600">
                2 New
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Notifications</span>
              <span className="font-semibold text-green-600">
                5
              </span>
            </div>

          </div>

        </div>

        {/* Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-medium flex items-center justify-center gap-2 transition">

          Open Subject Workspace

          <FaArrowRight size={14} />

        </button>

      </div>

    </div>

  </div>
);
}

export default StudentHeader;