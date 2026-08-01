import { useNavigate } from "react-router-dom";
import {
  FaBullhorn,
  FaFolderOpen,
  FaComments,
  FaHeadset,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa6";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Post Announcement",
      description: "Notify students instantly",
      icon: <FaBullhorn />,
      color: "bg-blue-100 text-blue-700",
      path: "/announcements/create",
    },
    {
      title: "Upload Resource",
      description: "Share notes & materials",
      icon: <FaFolderOpen />,
      color: "bg-green-100 text-green-700",
      path: "/admin/resources/upload",
    },
    {
      title: "Start Discussion",
      description: "Create a new academic discussion",
      icon: <FaComments />,
      color: "bg-purple-100 text-purple-700",
      path: "/workspace",
    },
    {
      title: "Support Tickets",
      description: "Respond to student requests",
      icon: <FaHeadset />,
      color: "bg-orange-100 text-orange-700",
      path: "/admin/support",
    },
    {
      title: "My Subjects",
      description: "Open subject workspaces",
      icon: <FaBookOpen />,
      color: "bg-red-100 text-red-700",
      path: "/workspace",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border">

      {/* Header */}

      <div className="p-6 border-b">

        <h2 className="text-2xl font-bold">
          Quick Actions
        </h2>

        <p className="text-gray-500 mt-1">
          Frequently used faculty actions.
        </p>

      </div>

      {/* Actions */}

      <div className="p-5 space-y-4">

        {actions.map((item, index) => (

          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="w-full flex items-center justify-between border rounded-xl p-4 hover:shadow-md hover:border-blue-500 transition-all"
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

                <p className="text-sm text-gray-500 mt-1">
                  {item.description}
                </p>

              </div>

            </div>

            <FaArrowRight className="text-gray-400" />

          </button>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;