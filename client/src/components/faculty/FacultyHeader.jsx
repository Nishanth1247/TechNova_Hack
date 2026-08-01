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
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 rounded-2xl overflow-hidden text-white shadow-lg">

      <div className="p-8">

        <div className="flex flex-col xl:flex-row justify-between gap-8">

          {/* Left */}

          <div className="flex-1">

            <p className="text-blue-200 text-sm">
              Friday • 31 July 2026
            </p>

            <h1 className="text-4xl font-bold mt-2">
              Good Morning, Dr. R. Kumar 👋
            </h1>

            <p className="text-blue-200 mt-3">
              Assistant Professor • Department of Computer Science
            </p>

            {/* Today's Summary */}

            <div className="grid grid-cols-3 gap-4 mt-8">

              <div className="bg-white/10 backdrop-blur rounded-xl p-4">

                <FaBookOpen size={24} />

                <h2 className="text-2xl font-bold mt-3">
                  4
                </h2>

                <p className="text-blue-200 text-sm">
                  Subjects
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-4">

                <FaUsers size={24} />

                <h2 className="text-2xl font-bold mt-3">
                  182
                </h2>

                <p className="text-blue-200 text-sm">
                  Students
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-4">

                <FaBell size={24} />

                <h2 className="text-2xl font-bold mt-3">
                  6
                </h2>

                <p className="text-blue-200 text-sm">
                  Notifications
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="xl:w-96">

            {/* Next Class */}

            <div className="bg-white text-gray-800 rounded-2xl p-6 shadow">

              <h2 className="font-bold text-xl mb-5">
                Next Class
              </h2>

              <div className="space-y-4">

                <div>

                  <h3 className="text-2xl font-bold text-blue-800">
                    Data Structures
                  </h3>

                  <p className="text-gray-500">
                    CS301
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <FaClock className="text-blue-700"/>

                  09:30 AM - 10:50 AM

                </div>

                <div className="flex items-center gap-3">

                  <FaLocationDot className="text-red-600"/>

                  Room 405

                </div>

              </div>

            </div>

            {/* Quick Actions */}

            <div className="grid grid-cols-3 gap-3 mt-5">

              <button className="bg-white text-blue-800 rounded-xl py-4 flex flex-col items-center hover:bg-blue-50">

                <FaBullhorn size={20}/>

                <span className="text-sm mt-2">
                  Announce
                </span>

              </button>

              <button className="bg-white text-blue-800 rounded-xl py-4 flex flex-col items-center hover:bg-blue-50">

                <FaFolderOpen size={20}/>

                <span className="text-sm mt-2">
                  Upload
                </span>

              </button>

              <button className="bg-white text-blue-800 rounded-xl py-4 flex flex-col items-center hover:bg-blue-50">

                <FaComments size={20}/>

                <span className="text-sm mt-2">
                  Discussion
                </span>

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default FacultyHeader;