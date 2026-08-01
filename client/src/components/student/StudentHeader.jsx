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
    <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-700 rounded-2xl overflow-hidden shadow-lg text-white">

      <div className="p-8">

        <div className="flex flex-col xl:flex-row justify-between gap-8">

          {/* Left */}

          <div className="flex-1">

            <p className="text-blue-200">
              Friday • 31 July 2026
            </p>

            <h1 className="text-4xl font-bold mt-2">
              Good Morning, Rahul 👋
            </h1>

            <p className="text-blue-100 mt-3">

              III Year • Computer Science & Engineering

            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              <span className="bg-white/15 px-4 py-2 rounded-full">

                Reg No : 22CSR101

              </span>

              <span className="bg-white/15 px-4 py-2 rounded-full">

                Semester V

              </span>

              <span className="bg-white/15 px-4 py-2 rounded-full">

                Section A

              </span>

            </div>

            {/* Today's Focus */}

            <div className="bg-white/10 rounded-2xl mt-8 p-6">

              <h2 className="text-xl font-semibold">

                🎯 Today's Focus

              </h2>

              <div className="space-y-3 mt-4">

                <div className="flex items-center gap-3">

                  <FaBookOpen />

                  Attend Data Structures

                </div>

                <div className="flex items-center gap-3">

                  <FaClipboardCheck />

                  Submit DBMS Assignment

                </div>

                <div className="flex items-center gap-3">

                  <FaBell />

                  Read 2 New Announcements

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="xl:w-96 space-y-5">

            {/* Next Class */}

            <div className="bg-white text-gray-800 rounded-2xl p-6 shadow">

              <h2 className="text-xl font-bold mb-5">

                Next Class

              </h2>

              <h3 className="text-2xl font-bold text-blue-700">

                Data Structures

              </h3>

              <p className="text-gray-500 mt-2">

                CS301

              </p>

              <div className="space-y-3 mt-6">

                <div className="flex items-center gap-3">

                  <FaClock className="text-blue-700"/>

                  09:30 AM - 10:50 AM

                </div>

                <div className="flex items-center gap-3">

                  <FaBuilding className="text-red-600"/>

                  Room 405

                </div>

              </div>

            </div>

            {/* Today's Summary */}

            <div className="bg-white rounded-2xl p-6 text-gray-800 shadow">

              <h2 className="text-xl font-bold">

                Today's Summary

              </h2>

              <div className="space-y-4 mt-5">

                <div className="flex justify-between">

                  <span>

                    Classes

                  </span>

                  <span className="font-semibold">

                    2

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>

                    Assignments

                  </span>

                  <span className="font-semibold text-red-600">

                    3 Pending

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>

                    Announcements

                  </span>

                  <span className="font-semibold text-blue-700">

                    2 New

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>

                    Notifications

                  </span>

                  <span className="font-semibold text-green-600">

                    5

                  </span>

                </div>

              </div>

            </div>

            {/* Open Workspace */}

            <button className="w-full bg-white text-blue-800 rounded-xl py-4 font-semibold hover:bg-blue-50 flex items-center justify-center gap-2">

              Open Subject Workspace

              <FaArrowRight/>

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentHeader;