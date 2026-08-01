import {
  FaBell,
  FaCircleUser,
} from "react-icons/fa6";

import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <header className="h-20 bg-white shadow-sm px-8 flex justify-between items-center">

      {/* Left */}

      <div>

        <h2 className="text-2xl font-bold text-slate-800">
          CampusConnect
        </h2>

        <p className="text-gray-500 text-sm">
          Unified Communication & Academic Operations Platform
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Notification */}

        <button className="relative">

          <FaBell
            size={22}
            className="text-slate-700"
          />

          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">

            3

          </span>

        </button>

        {/* User */}

        <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-xl">

  <FaCircleUser
    size={38}
    className="text-blue-800"
  />

  <div>

    <h4 className="font-semibold">
      {user?.name || "Guest"}
    </h4>

    <span
      className={`text-xs px-2 py-1 rounded-full font-medium capitalize
        ${
          user?.role === "admin"
            ? "bg-red-100 text-red-700"
            : user?.role === "faculty"
            ? "bg-blue-100 text-blue-700"
            : "bg-green-100 text-green-700"
        }`}
    >
      {user?.role}
    </span>

  </div>

</div>

      </div>

    </header>
  );
}

export default Navbar;