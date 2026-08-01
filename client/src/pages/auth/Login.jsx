import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGraduationCap,
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../api/authApi";

function Login() {
    const navigate = useNavigate();
const { login } = useAuth();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");
  setLoading(true);

  try {
    const data = await loginUser(email, password);

    login(data.user, data.token);

    switch (data.user.role) {

  case "admin":
    navigate("/admin/dashboard");
    break;

  case "faculty":
    navigate("/faculty/dashboard");
    break;

  case "student":
    navigate("/student/dashboard");
    break;

  default:
    navigate("/login");
}
  } catch (err) {
    setError(
      err.response?.data?.message || "Login failed"
    );
  }

  setLoading(false);
};

  return (
  <div className="min-h-screen bg-gray-100 flex">

    {/* Left Side */}
    <div className="hidden lg:flex w-1/2 bg-white border-r border-gray-200 items-center justify-center p-16">

      <div className="max-w-md">

        <div className="flex items-center gap-3 mb-10">
          <HiAcademicCap className="text-blue-600" size={48} />

          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              CampusConnect
            </h1>

            <p className="text-gray-500 mt-1">
              Unified Communication Platform
            </p>
          </div>
        </div>

        <h2 className="text-5xl font-bold leading-tight text-gray-800">
          Learn.
          <br />
          Connect.
          <br />
          Grow.
        </h2>

        <p className="mt-6 text-gray-500 leading-8 text-lg">
          A centralized platform for students, faculty, and administrators
          to communicate, collaborate, and manage academic activities.
        </p>

        <div className="flex gap-10 mt-12">

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              1500+
            </h3>

            <p className="text-gray-500">
              Students
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              120+
            </h3>

            <p className="text-gray-500">
              Faculty
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              24/7
            </h3>

            <p className="text-gray-500">
              Support
            </p>
          </div>

        </div>

      </div>

    </div>

    {/* Right Side */}
    <div className="flex-1 flex items-center justify-center p-8">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-10">

        <div className="text-center">

          <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
            <FaGraduationCap
              className="text-blue-600"
              size={28}
            />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-gray-800">
            Welcome Back
          </h2>

          <p className="mt-2 text-gray-500">
            Sign in to your account
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          {/* Email */}

          <div>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-blue-500">

              <FaEnvelope className="text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-4 outline-none bg-transparent"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-blue-500">

              <FaLock className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-4 outline-none bg-transparent"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="text-gray-500"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

          </div>

          {/* Remember */}

          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-gray-600">

              <input
                type="checkbox"
                className="rounded"
              />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {error && (

            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-600">

              {error}

            </div>

          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center">

          <p className="text-sm text-gray-500">
            CampusConnect © 2026
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Bannari Amman Institute of Technology
          </p>

        </div>

      </div>

    </div>

  </div>
);
}

export default Login;