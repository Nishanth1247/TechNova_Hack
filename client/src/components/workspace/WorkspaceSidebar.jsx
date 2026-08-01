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
  <div className="bg-white border rounded-xl shadow-sm p-5 h-fit sticky top-6">

    {/* Header */}
    <div className="mb-5">

      <h2 className="text-lg font-semibold text-gray-800">
        Collaboration Hub
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Workspace navigation
      </p>

    </div>

    {/* Navigation */}
    <div className="space-y-2">

      {menu.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`w-full flex justify-between items-center px-3 py-3 rounded-lg transition ${
            activeTab === item.id
              ? "bg-blue-50 text-blue-700 border border-blue-200"
              : "hover:bg-gray-50 text-gray-700"
          }`}
        >

          <div className="flex items-center gap-3">

            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                activeTab === item.id
                  ? "bg-blue-100"
                  : "bg-gray-100"
              }`}
            >
              {item.icon}
            </div>

            <span className="font-medium">
              {item.name}
            </span>

          </div>

          {item.badge && (
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                activeTab === item.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {item.badge}
            </span>
          )}

        </button>
      ))}

    </div>

    {/* Status */}
    <div className="border-t mt-6 pt-5">

      <h3 className="text-sm font-semibold text-gray-700 mb-4">
        Workspace Status
      </h3>

      <div className="space-y-3 text-sm">

        <div className="flex justify-between items-center">

          <span className="text-gray-500">
            Faculty
          </span>

          <span className="flex items-center gap-2 text-green-600 font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Online
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="text-gray-500">
            Students Online
          </span>

          <span className="font-medium text-gray-800">
            28
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="text-gray-500">
            Last Activity
          </span>

          <span className="font-medium text-gray-800">
            5 mins ago
          </span>

        </div>

      </div>

    </div>

  </div>
);
}

export default WorkspaceSidebar;