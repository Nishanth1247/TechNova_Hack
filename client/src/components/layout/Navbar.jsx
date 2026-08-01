import {
  FaBell,
  FaCircleUser,
} from "react-icons/fa6";

import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
      <div className="h-20 px-8 flex items-center justify-between">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            CampusConnect
          </h2>

          <p className="text-sm text-gray-500">
            Unified Communication & Academic Operations Platform
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">

          {/* Notification */}
          <button className="relative flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-100 transition">
            <FaBell size={18} className="text-gray-700" />

            <span className="absolute top-1 right-1 flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-semibold">
              3
            </span>
          </button>

          {/* User Card */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm">

            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-50">
              <FaCircleUser
                size={28}
                className="text-blue-600"
              />
            </div>

            <div className="leading-tight">
              <h4 className="text-sm font-semibold text-gray-800">
                {user?.name || "Guest"}
              </h4>

              <span
                className={`inline-block mt-1 rounded-full px-3 py-1 text-[11px] font-medium capitalize
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
      </div>
    </header>
  );
}

export default Navbar;