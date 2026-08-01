import {
  FaBookOpen,
  FaUserTie,
  FaUsers,
  FaFolderOpen,
  FaComments,
  FaBullhorn,
  FaPlus,
} from "react-icons/fa6";

function WorkspaceHeader({ role, subjectId }) {
  return (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

    {/* Banner */}
    <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white px-8 py-8">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Subject Info */}
        <div className="flex items-start gap-5">

          <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
            <FaBookOpen size={28} />
          </div>

          <div>

            <h1 className="text-3xl font-bold">
              Data Structures
            </h1>

            <p className="text-blue-100 mt-2">
              CS301 • Semester III • Computer Science
            </p>

            <div className="flex items-center gap-2 mt-5 text-blue-100">

              <FaUserTie />

              <span>
                {role === "faculty"
                  ? "Subject Coordinator"
                  : "Faculty"}
              </span>

            </div>

          </div>

        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">

          {role === "faculty" ? (
            <>
              <button className="bg-white text-blue-700 hover:bg-blue-50 px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition">
                <FaBullhorn />
                Announcement
              </button>

              <button className="bg-white text-blue-700 hover:bg-blue-50 px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition">
                <FaFolderOpen />
                Upload
              </button>

              <button className="bg-white text-blue-700 hover:bg-blue-50 px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition">
                <FaPlus />
                Discussion
              </button>
            </>
          ) : (
            <>
              <button className="bg-white text-blue-700 hover:bg-blue-50 px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition">
                <FaFolderOpen />
                Resources
              </button>

              <button className="bg-white text-blue-700 hover:bg-blue-50 px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition">
                <FaComments />
                Discussions
              </button>

              <button className="bg-white text-blue-700 hover:bg-blue-50 px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition">
                <FaBullhorn />
                Announcements
              </button>
            </>
          )}

        </div>

      </div>

    </div>

    {/* Statistics */}
    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0">

      <div className="p-6 flex items-center gap-4">

        <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
          <FaUsers className="text-blue-600" />
        </div>

        <div>

          <p className="text-sm text-gray-500">
            {role === "faculty" ? "Students" : "Classmates"}
          </p>

          <h3 className="text-2xl font-bold">
            72
          </h3>

        </div>

      </div>

      <div className="p-6 flex items-center gap-4">

        <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center">
          <FaFolderOpen className="text-green-600" />
        </div>

        <div>

          <p className="text-sm text-gray-500">
            Resources
          </p>

          <h3 className="text-2xl font-bold">
            18
          </h3>

        </div>

      </div>

      <div className="p-6 flex items-center gap-4">

        <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center">
          <FaComments className="text-orange-600" />
        </div>

        <div>

          <p className="text-sm text-gray-500">
            Discussions
          </p>

          <h3 className="text-2xl font-bold">
            25
          </h3>

        </div>

      </div>

      <div className="p-6 flex items-center gap-4">

        <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center">
          <FaBullhorn className="text-red-600" />
        </div>

        <div>

          <p className="text-sm text-gray-500">
            Announcements
          </p>

          <h3 className="text-2xl font-bold">
            6
          </h3>

        </div>

      </div>

    </div>

  </div>
);
}

export default WorkspaceHeader;