import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import {
  FaHouse,
  FaBullhorn,
  FaBookOpen,
  FaFolderOpen,
  FaHeadset,
  FaBell,
  FaTriangleExclamation,
  FaUsers,
  FaRightFromBracket,
} from "react-icons/fa6";

const menuItems = [
  {
    name: "Dashboard",
    icon: <FaHouse />,
    roles: ["admin", "faculty", "student"],
    paths: {
      admin: "/admin/dashboard",
      faculty: "/faculty/dashboard",
      student: "/student/dashboard",
    },
  },
  {
    name: "Workspace",
    icon: <FaBookOpen />,
    roles: ["faculty", "student"],
    paths: {
      faculty: "/faculty/workspace",
      student: "/student/workspace",
    },
  },
  {
    name: "Announcements",
    icon: <FaBullhorn />,
    roles: ["admin", "faculty", "student"],
    paths: {
      admin: "/admin/announcements",
      faculty: "/faculty/announcements",
      student: "/student/announcements",
    },
  },
  {
    name: "Resources",
    icon: <FaFolderOpen />,
    roles: ["admin", "faculty", "student"],
    paths: {
      admin: "/admin/resources",
      faculty: "/faculty/resources",
      student: "/student/resources",
    },
  },
  {
    name: "Support",
    icon: <FaHeadset />,
    roles: ["admin", "faculty", "student"],
    paths: {
      admin: "/admin/support",
      faculty: "/faculty/support",
      student: "/student/support",
    },
  },
  {
    name: "Notifications",
    icon: <FaBell />,
    roles: ["admin", "faculty", "student"],
    paths: {
      admin: "/admin/notifications",
      faculty: "/faculty/notifications",
      student: "/student/notifications",
    },
  },
  {
    name: "Users",
    icon: <FaUsers />,
    roles: ["admin"],
    paths: {
      admin: "/admin/users",
    },
  },
  {
    name: "Emergency Alerts",
    icon: <FaTriangleExclamation />,
    roles: ["admin"],
    paths: {
      admin: "/admin/emergency",
    },
  },
];

function Sidebar() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const role = user?.role;

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };
  return (
    <aside className="w-72 bg-blue-900 text-white flex flex-col">

      {/* Logo */}

      <div className="h-20 flex items-center justify-center border-b border-blue-800">
        <h1 className="text-2xl font-bold">
          CampusConnect
        </h1>
      </div>

      {/* Menu */}

      <nav className="flex-1 py-6">

        {menuItems
  .filter((item) => item.roles.includes(role))
  .map((item) => (

          <NavLink
            key={item.name}
            to={item.paths[role]}
            className={({ isActive }) =>
              `flex items-center gap-4 px-8 py-4 transition
              ${
                isActive
                  ? "bg-blue-700"
                  : "hover:bg-blue-800"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>

            <span>{item.name}</span>

          </NavLink>

        ))}

      </nav>

      {/* Logout */}

      <button
  onClick={handleLogout}
  className="m-6 flex items-center justify-center gap-3 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
>
  <FaRightFromBracket />
  Logout
</button>

    </aside>
  );
}

export default Sidebar;