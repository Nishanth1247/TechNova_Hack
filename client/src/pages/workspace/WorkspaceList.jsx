import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaBookOpen,
  FaUsers,
  FaFolderOpen,
  FaComments,
  FaArrowRight,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function WorkspaceList() {
  const navigate = useNavigate();

  const workspaces = [
    {
      id: 1,
      subject: "Data Structures",
      code: "CS301",
      faculty: "Dr. R. Kumar",
      resources: 18,
      discussions: 25,
      students: 72,
    },
    {
      id: 2,
      subject: "Database Management Systems",
      code: "CS302",
      faculty: "Dr. Priya",
      resources: 14,
      discussions: 18,
      students: 68,
    },
    {
      id: 3,
      subject: "Computer Networks",
      code: "CS303",
      faculty: "Dr. Arun",
      resources: 20,
      discussions: 31,
      students: 75,
    },
    {
      id: 4,
      subject: "Operating Systems",
      code: "CS304",
      faculty: "Dr. Mahesh",
      resources: 22,
      discussions: 16,
      students: 71,
    },
  ];

  return (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Academic Workspaces
          </h1>

          <p className="mt-2 text-gray-500">
            Subject-based collaborative learning spaces.
          </p>
        </div>

      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

        <div className="flex items-center rounded-xl border border-gray-300 px-4">

          <FaMagnifyingGlass className="text-gray-400" />

          <input
            placeholder="Search workspace..."
            className="w-full bg-transparent px-3 py-3 outline-none"
          />

        </div>

      </div>

      {/* Workspace Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {workspaces.map((workspace) => (

          <div
            key={workspace.id}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >

            {/* Card Header */}
            <div className="border-b border-gray-200 p-6">

              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">

                <FaBookOpen
                  className="text-blue-600"
                  size={24}
                />

              </div>

              <h2 className="text-xl font-semibold text-gray-800">
                {workspace.subject}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {workspace.code}
              </p>

            </div>

            {/* Card Body */}
            <div className="p-6">

              <div className="mb-6">

                <p className="text-sm text-gray-500">
                  Faculty
                </p>

                <p className="font-medium text-gray-800 mt-1">
                  {workspace.faculty}
                </p>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">

                <div className="rounded-xl bg-gray-50 p-4 text-center">

                  <FaFolderOpen
                    className="mx-auto text-blue-600"
                    size={20}
                  />

                  <p className="mt-2 text-lg font-bold text-gray-800">
                    {workspace.resources}
                  </p>

                  <p className="text-xs text-gray-500">
                    Resources
                  </p>

                </div>

                <div className="rounded-xl bg-gray-50 p-4 text-center">

                  <FaComments
                    className="mx-auto text-green-600"
                    size={20}
                  />

                  <p className="mt-2 text-lg font-bold text-gray-800">
                    {workspace.discussions}
                  </p>

                  <p className="text-xs text-gray-500">
                    Discussions
                  </p>

                </div>

                <div className="rounded-xl bg-gray-50 p-4 text-center">

                  <FaUsers
                    className="mx-auto text-orange-500"
                    size={20}
                  />

                  <p className="mt-2 text-lg font-bold text-gray-800">
                    {workspace.students}
                  </p>

                  <p className="text-xs text-gray-500">
                    Students
                  </p>

                </div>

              </div>

              {/* Button */}
              <button
                onClick={() =>
                  navigate(`/workspace/${workspace.id}`)
                }
                className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white font-medium hover:bg-blue-700 transition"
              >

                Open Workspace

                <FaArrowRight size={14} />

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  </DashboardLayout>
);
}

export default WorkspaceList;