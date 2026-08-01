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
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">

      {/* Top Banner */}

      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white p-8">

        <div className="flex justify-between items-start flex-wrap gap-6">

          <div>

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">

                <FaBookOpen size={30} />

              </div>

              <div>

                <h1 className="text-4xl font-bold">

                  Data Structures

                </h1>

                <p className="text-blue-100 mt-2">

                  CS301 • Semester III • Computer Science

                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 mt-6">

              <FaUserTie />

              <span>

                {role === "faculty"
  ? "Subject Coordinator"
  : "Faculty"}

              </span>

            </div>

          </div>

          {/* Quick Actions */}

<div className="flex gap-3 flex-wrap">

  {role === "faculty" && (
    <>
      <button className="bg-white text-blue-800 px-5 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-100 transition">
        <FaBullhorn />
        New Announcement
      </button>

      <button className="bg-white text-blue-800 px-5 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-100 transition">
        <FaFolderOpen />
        Upload Resource
      </button>

      <button className="bg-white text-blue-800 px-5 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-100 transition">
        <FaPlus />
        Start Discussion
      </button>
    </>
  )}

  {role === "student" && (
    <>
      <button className="bg-white text-blue-800 px-5 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-100 transition">
        <FaFolderOpen />
        View Resources
      </button>

      <button className="bg-white text-blue-800 px-5 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-100 transition">
        <FaComments />
        Discussions
      </button>

      <button className="bg-white text-blue-800 px-5 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-100 transition">
        <FaBullhorn />
        Announcements
      </button>
    </>
  )}

</div>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-2 lg:grid-cols-4">

        <div className="p-6 border-r border-b">

          <div className="flex items-center gap-3">

            <FaUsers
              className="text-blue-700"
              size={22}
            />

            <div>

              <p className="text-gray-500 text-sm">
  {role === "faculty" ? "Students" : "Classmates"}
</p>

              <h2 className="text-3xl font-bold">

                72

              </h2>

            </div>

          </div>

        </div>

        <div className="p-6 border-r border-b">

          <div className="flex items-center gap-3">

            <FaFolderOpen
              className="text-green-700"
              size={22}
            />

            <div>

              <p className="text-gray-500 text-sm">

                Resources

              </p>

              <h2 className="text-3xl font-bold">

                18

              </h2>

            </div>

          </div>

        </div>

        <div className="p-6 border-r border-b">

          <div className="flex items-center gap-3">

            <FaComments
              className="text-orange-600"
              size={22}
            />

            <div>

              <p className="text-gray-500 text-sm">

                Discussions

              </p>

              <h2 className="text-3xl font-bold">

                25

              </h2>

            </div>

          </div>

        </div>

        <div className="p-6 border-b">

          <div className="flex items-center gap-3">

            <FaBullhorn
              className="text-red-600"
              size={22}
            />

            <div>

              <p className="text-gray-500 text-sm">

                Announcements

              </p>

              <h2 className="text-3xl font-bold">

                6

              </h2>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default WorkspaceHeader;