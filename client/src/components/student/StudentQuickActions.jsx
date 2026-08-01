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
  <div className="bg-white border rounded-xl shadow-sm">

    {/* Header */}
    <div className="p-5 border-b">

      <h2 className="text-lg font-semibold text-gray-800">
        Quick Actions
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Frequently used shortcuts.
      </p>

    </div>

    {/* Actions */}
    <div className="p-5 space-y-3">

      {actions.map((item, index) => (
        <button
          key={index}
          onClick={() => navigate(item.path)}
          className="w-full flex justify-between items-center border rounded-lg p-4 hover:bg-gray-50 hover:border-blue-500 transition"
        >

          {/* Left */}
          <div className="flex items-center gap-4">

            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color}`}
            >
              {item.icon}
            </div>

            <div className="text-left">

              <h3 className="font-medium text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">
                {item.description}
              </p>

            </div>

          </div>

          {/* Arrow */}
          <FaArrowRight className="text-gray-400 text-sm" />

        </button>
      ))}

    </div>

  </div>
);
}

export default StudentQuickActions;