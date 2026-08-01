import { useNavigate } from "react-router-dom";
import {
  FaBookOpen,
  FaBullhorn,
  FaFolderOpen,
  FaComments,
  FaHeadset,
  FaUser,
  FaArrowRight,
} from "react-icons/fa6";

function StudentQuickActions() {

  const navigate = useNavigate();

  const actions = [
    {
      title: "My Subjects",
      description: "Open subject workspaces",
      icon: <FaBookOpen />,
      color: "bg-blue-100 text-blue-700",
      path: "/student/subjects",
    },
    {
      title: "Announcements",
      description: "View latest notices",
      icon: <FaBullhorn />,
      color: "bg-red-100 text-red-700",
      path: "/announcements",
    },
    {
      title: "Resources",
      description: "Download study materials",
      icon: <FaFolderOpen />,
      color: "bg-green-100 text-green-700",
      path: "/resources",
    },
    {
      title: "Discussion Hub",
      description: "Ask doubts & participate",
      icon: <FaComments />,
      color: "bg-purple-100 text-purple-700",
      path: "/workspace",
    },
    {
      title: "Support",
      description: "Create support tickets",
      icon: <FaHeadset />,
      color: "bg-orange-100 text-orange-700",
      path: "/support",
    },
    {
      title: "My Profile",
      description: "View your profile",
      icon: <FaUser />,
      color: "bg-cyan-100 text-cyan-700",
      path: "/profile",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border">

      {/* Header */}

      <div className="p-6 border-b">

        <h2 className="text-2xl font-bold">

          Quick Actions

        </h2>

        <p className="text-gray-500 mt-2">

          Frequently used shortcuts

        </p>

      </div>

      {/* Buttons */}

      <div className="p-5 space-y-4">

        {actions.map((item, index) => (

          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="w-full flex justify-between items-center border rounded-xl p-4 hover:border-blue-500 hover:shadow-md transition-all"
          >

            <div className="flex items-center gap-4">

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl ${item.color}`}
              >

                {item.icon}

              </div>

              <div className="text-left">

                <h3 className="font-semibold">

                  {item.title}

                </h3>

                <p className="text-sm text-gray-500">

                  {item.description}

                </p>

              </div>

            </div>

            <FaArrowRight className="text-gray-400"/>

          </button>

        ))}

      </div>

    </div>
  );
}

export default StudentQuickActions;