import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaBookOpen,
  FaUserTie,
  FaBullhorn,
  FaFolderOpen,
  FaComments,
  FaArrowRight,
} from "react-icons/fa6";

function MySubjects() {
  const navigate = useNavigate();

  const subjects = [
    {
      id: 1,
      name: "Data Structures",
      code: "CS301",
      faculty: "Dr. R. Kumar",
      announcements: 3,
      resources: 12,
      discussions: 8,
      color: "from-blue-600 to-indigo-700",
    },
    {
      id: 2,
      name: "Database Management System",
      code: "CS302",
      faculty: "Dr. S. Priya",
      announcements: 2,
      resources: 15,
      discussions: 6,
      color: "from-green-600 to-emerald-700",
    },
    {
      id: 3,
      name: "Operating Systems",
      code: "CS304",
      faculty: "Dr. M. Arun",
      announcements: 1,
      resources: 10,
      discussions: 4,
      color: "from-orange-500 to-red-600",
    },
    {
      id: 4,
      name: "Computer Networks",
      code: "CS305",
      faculty: "Dr. S. Kumar",
      announcements: 4,
      resources: 18,
      discussions: 11,
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-white">

          <h1 className="text-4xl font-bold">
            My Subjects
          </h1>

          <p className="text-blue-200 mt-2">
            Access announcements, resources and discussions for every subject.
          </p>

        </div>

        {/* Subject Cards */}

        <div className="grid lg:grid-cols-2 gap-6">

          {subjects.map((subject) => (

            <div
              key={subject.id}
              className="bg-white rounded-2xl shadow border overflow-hidden hover:shadow-xl transition"
            >

              <div
                className={`bg-gradient-to-r ${subject.color} p-6 text-white`}
              >

                <h2 className="text-2xl font-bold">
                  {subject.name}
                </h2>

                <p className="text-white/80 mt-2">
                  {subject.code}
                </p>

              </div>

              <div className="p-6">

                <div className="flex items-center gap-3 mb-6">

                  <FaUserTie className="text-blue-700" />

                  <span>{subject.faculty}</span>

                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">

                  <div className="bg-blue-50 rounded-xl p-4 text-center">

                    <FaBullhorn className="mx-auto text-blue-700 text-xl mb-2" />

                    <p className="text-2xl font-bold">
                      {subject.announcements}
                    </p>

                    <p className="text-xs text-gray-500">
                      Notices
                    </p>

                  </div>

                  <div className="bg-green-50 rounded-xl p-4 text-center">

                    <FaFolderOpen className="mx-auto text-green-700 text-xl mb-2" />

                    <p className="text-2xl font-bold">
                      {subject.resources}
                    </p>

                    <p className="text-xs text-gray-500">
                      Resources
                    </p>

                  </div>

                  <div className="bg-purple-50 rounded-xl p-4 text-center">

                    <FaComments className="mx-auto text-purple-700 text-xl mb-2" />

                    <p className="text-2xl font-bold">
                      {subject.discussions}
                    </p>

                    <p className="text-xs text-gray-500">
                      Discussions
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => navigate(`/workspace/${subject.id}`)}
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-xl flex justify-center items-center gap-2"
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

export default MySubjects;