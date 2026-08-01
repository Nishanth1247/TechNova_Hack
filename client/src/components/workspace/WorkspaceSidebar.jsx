import {
  FaBullhorn,
  FaFolderOpen,
  FaComments,
  FaCalendarDays,
  FaLink,
  FaChartSimple,
} from "react-icons/fa6";

function WorkspaceSidebar({
    role,
    activeTab,
    setActiveTab
}) {
  const menu = [
    {
      id: "overview",
      name: "Overview",
      icon: <FaChartSimple />,
      badge: "",
    },
    {
      id: "announcements",
      name: "Announcements",
      icon: <FaBullhorn />,
      badge: "3",
    },
    {
      id: "resources",
      name: "Resources",
      icon: <FaFolderOpen />,
      badge: "18",
    },
    {
      id: "discussion",
      name: "Discussions",
      icon: <FaComments />,
      badge: "25",
    },
    {
      id: "schedule",
      name: "Schedule",
      icon: <FaCalendarDays />,
      badge: "",
    },
    {
      id: "links",
      name: "Important Links",
      icon: <FaLink />,
      badge: "",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5 h-fit sticky top-6">

      <h2 className="text-lg font-bold mb-6">
        Collaboration Hub
      </h2>

      <div className="space-y-2">

        {menu.map((item) => (

          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex justify-between items-center px-4 py-3 rounded-xl transition ${
              activeTab === item.id
                ? "bg-blue-800 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-3">

              {item.icon}

              {item.name}

            </div>

            {item.badge && (
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  activeTab === item.id
                    ? "bg-white text-blue-800"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {item.badge}
              </span>
            )}

          </button>

        ))}

      </div>

      {/* Workspace Status */}

      <div className="mt-8 border-t pt-6">

        <h3 className="font-semibold mb-4">
          Workspace Status
        </h3>

        <div className="space-y-3 text-sm">

          <div className="flex justify-between">
            <span>Faculty Online</span>
            <span className="text-green-600 font-medium">
              ● Online
            </span>
          </div>

          <div className="flex justify-between">
            <span>Students Online</span>
            <span className="font-medium">
              28
            </span>
          </div>

          <div className="flex justify-between">
            <span>Last Activity</span>
            <span className="font-medium">
              5 mins ago
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default WorkspaceSidebar;