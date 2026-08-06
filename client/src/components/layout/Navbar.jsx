import { useState, useRef, useEffect } from "react";
import {
  FaBell,
  FaCircleUser,
  FaEnvelope,
  FaUserShield,
  FaUser,
  FaGear,
  FaRightFromBracket,
} from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
      <div className="h-20 px-8 flex items-center justify-between">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            CampusConnect
          </h2>

          <p className="text-sm text-gray-500">
            Unified Communication & Academic Operations Platform
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          {/* Notifications */}
          <button className="relative flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-100 transition">
            <FaBell
              size={18}
              className="text-gray-700"
            />

            <span className="absolute top-1 right-1 flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-semibold">
              3
            </span>
          </button>

          {/* Profile */}
          <div
            className="relative"
            ref={profileRef}
          >
            <button
              onClick={() =>
                setShowProfile(!showProfile)
              }
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm hover:bg-gray-50 transition"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-50">
                <FaCircleUser
                  size={28}
                  className="text-blue-600"
                />
              </div>

              <div className="text-left">
                <h4 className="text-sm font-semibold text-gray-800">
                  {user?.name || "Guest"}
                </h4>

                <span
                  className={`inline-block mt-1 rounded-full px-3 py-1 text-[11px] font-medium capitalize ${
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
            </button>

            {/* Dropdown */}
            {showProfile && (
              <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">

                {/* Header */}
                <div className="bg-blue-600 p-6 text-white">

                  <div className="flex items-center gap-4">

                    <FaCircleUser size={60} />

                    <div>
                      <h3 className="text-xl font-bold">
                        {user?.name}
                      </h3>

                      <p className="capitalize text-blue-100">
                        {user?.role}
                      </p>
                    </div>

                  </div>

                </div>

                {/* Body */}
                <div className="p-6 space-y-5">

                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-gray-500" />

                    <div>
                      <p className="text-xs text-gray-500">
                        Email
                      </p>

                      <p className="text-sm font-medium">
                        {user?.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaUserShield className="text-gray-500" />

                    <div>
                      <p className="text-xs text-gray-500">
                        Role
                      </p>

                      <p className="capitalize font-medium">
                        {user?.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaUser className="text-gray-500" />

                    <div>
                      <p className="text-xs text-gray-500">
                        User ID
                      </p>

                      <p className="font-medium">
                        {user?.id}
                      </p>
                    </div>
                  </div>

                  <hr />

                  <button
                    onClick={() => navigate("/profile")}
                    className="w-full flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-100 transition"
                  >
                    <FaGear />
                    Settings
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 rounded-lg px-4 py-3 text-red-600 hover:bg-red-50 transition"
                  >
                    <FaRightFromBracket />
                    Logout
                  </button>

                </div>

              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar;