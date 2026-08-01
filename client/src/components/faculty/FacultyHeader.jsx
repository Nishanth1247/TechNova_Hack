import {
  FaBookOpen,
  FaUsers,
  FaBell,
  FaBullhorn,
  FaFolderOpen,
  FaComments,
  FaClock,
  FaLocationDot,
} from "react-icons/fa6";

function FacultyHeader() {
 return (
  <div className="bg-white border rounded-xl shadow-sm p-6">

    <div className="flex flex-col xl:flex-row justify-between gap-8">

      {/* Left */}
      <div className="flex-1">

        <p className="text-sm text-gray-500">
          Friday • 31 July 2026
        </p>

        <h1 className="text-3xl font-bold text-gray-800 mt-2">
          Good Morning, Dr. R. Kumar 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Assistant Professor • Department of Computer Science
        </p>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4 mt-6">

          <div className="border rounded-xl p-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <FaBookOpen className="text-blue-600" />
            </div>

            <h2 className="text-2xl font-bold mt-3 text-gray-800">
              4
            </h2>

            <p className="text-sm text-gray-500">
              Subjects
            </p>
          </div>

          <div className="border rounded-xl p-4">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <FaUsers className="text-green-600" />
            </div>

            <h2 className="text-2xl font-bold mt-3 text-gray-800">
              182
            </h2>

            <p className="text-sm text-gray-500">
              Students
            </p>
          </div>

          <div className="border rounded-xl p-4">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <FaBell className="text-orange-600" />
            </div>

            <h2 className="text-2xl font-bold mt-3 text-gray-800">
              6
            </h2>

            <p className="text-sm text-gray-500">
              Notifications
            </p>
          </div>

        </div>

      </div>

      {/* Right */}
      <div className="xl:w-80 space-y-4">

        {/* Next Class */}
        <div className="border rounded-xl p-5">

          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Next Class
          </h2>

          <h3 className="text-xl font-bold text-blue-700">
            Data Structures
          </h3>

          <p className="text-gray-500">
            CS301
          </p>

          <div className="mt-4 space-y-3 text-gray-600">

            <div className="flex items-center gap-2">
              <FaClock className="text-blue-600" />
              09:30 AM - 10:50 AM
            </div>

            <div className="flex items-center gap-2">
              <FaLocationDot className="text-red-500" />
              Room 405
            </div>

          </div>

        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">

          <button className="border rounded-lg p-4 hover:bg-blue-50 transition flex flex-col items-center">
            <FaBullhorn className="text-blue-600" />
            <span className="text-xs mt-2">
              Announce
            </span>
          </button>

          <button className="border rounded-lg p-4 hover:bg-green-50 transition flex flex-col items-center">
            <FaFolderOpen className="text-green-600" />
            <span className="text-xs mt-2">
              Upload
            </span>
          </button>

          <button className="border rounded-lg p-4 hover:bg-orange-50 transition flex flex-col items-center">
            <FaComments className="text-orange-600" />
            <span className="text-xs mt-2">
              Discussion
            </span>
          </button>

        </div>

      </div>

    </div>

  </div>
);
}

export default FacultyHeader;