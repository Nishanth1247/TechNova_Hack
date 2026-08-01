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
    <DashboardLayout >
      <div>

        {/* Header */}

        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold">
              Academic Workspaces
            </h1>

            <p className="text-gray-500 mt-2">
              Subject-based collaborative learning spaces.
            </p>
          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow-sm mt-8 p-5">

          <div className="flex items-center border rounded-lg px-4">

            <FaMagnifyingGlass className="text-gray-400"/>

            <input
              className="flex-1 outline-none px-3 py-3"
              placeholder="Search workspace..."
            />

          </div>

        </div>

        {/* Workspace Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

          {workspaces.map((workspace) => (

            <div
              key={workspace.id}
              className="bg-white rounded-2xl shadow-sm border hover:shadow-lg transition"
            >

              {/* Top */}

              <div className="bg-blue-800 text-white rounded-t-2xl p-6">

                <FaBookOpen
                  size={35}
                  className="mb-5"
                />

                <h2 className="text-2xl font-bold">

                  {workspace.subject}

                </h2>

                <p className="text-blue-200 mt-2">

                  {workspace.code}

                </p>

              </div>

              {/* Body */}

              <div className="p-6">

                <p className="font-medium">

                  Faculty

                </p>

                <p className="text-gray-600 mb-6">

                  {workspace.faculty}

                </p>

                <div className="grid grid-cols-3 gap-4 text-center">

                  <div>

                    <FaFolderOpen
                      className="mx-auto text-blue-700"
                      size={22}
                    />

                    <h3 className="font-bold mt-2">

                      {workspace.resources}

                    </h3>

                    <p className="text-xs text-gray-500">
                      Resources
                    </p>

                  </div>

                  <div>

                    <FaComments
                      className="mx-auto text-green-700"
                      size={22}
                    />

                    <h3 className="font-bold mt-2">

                      {workspace.discussions}

                    </h3>

                    <p className="text-xs text-gray-500">
                      Discussions
                    </p>

                  </div>

                  <div>

                    <FaUsers
                      className="mx-auto text-orange-600"
                      size={22}
                    />

                    <h3 className="font-bold mt-2">

                      {workspace.students}

                    </h3>

                    <p className="text-xs text-gray-500">
                      Students
                    </p>

                  </div>

                </div>

                <button
                  onClick={() =>
                    navigate(`/workspace/${workspace.id}`)
                  }
                  className="mt-8 w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-lg flex justify-center items-center gap-3"
                >

                  Open Workspace

                  <FaArrowRight />

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