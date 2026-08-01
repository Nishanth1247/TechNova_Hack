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
    <div className="min-h-screen flex bg-slate-100">

      {/* Left */}

      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white p-12 flex-col justify-between">

        <div>

          <div className="flex items-center gap-3">

            <HiAcademicCap size={45} />

            <div>

              <h1 className="text-4xl font-bold">

                CampusConnect

              </h1>

              <p className="text-blue-200">

                Smart Communication & Discussion Portal

              </p>

            </div>

          </div>

        </div>

        <div>

          <h2 className="text-5xl font-bold leading-tight">

            One Portal.

            <br />

            Every Student.

            <br />

            Every Faculty.

          </h2>

          <p className="text-blue-200 mt-6 text-lg leading-8">

            Connect students, faculty, HODs and administrators through one secure communication platform.

          </p>

        </div>

        <div className="grid grid-cols-3 gap-6">

          <div>

            <h3 className="text-4xl font-bold">

              1500+

            </h3>

            <p className="text-blue-200">

              Students

            </p>

          </div>

          <div>

            <h3 className="text-4xl font-bold">

              120+

            </h3>

            <p className="text-blue-200">

              Faculty

            </p>

          </div>

          <div>

            <h3 className="text-4xl font-bold">

              24/7

            </h3>

            <p className="text-blue-200">

              Communication

            </p>

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="flex-1 flex justify-center items-center p-8">

        <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-10">

          <div className="text-center">

            <div className="mx-auto w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">

              <FaGraduationCap
                size={35}
                className="text-blue-800"
              />

            </div>

            <h2 className="text-3xl font-bold mt-6">

              Welcome Back

            </h2>

            <p className="text-gray-500 mt-2">

              Sign in to continue

            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            {/* Email */}

            <div>

              <label className="block mb-2 font-medium">

                Email Address

              </label>

              <div className="flex items-center border rounded-xl px-4">

                <FaEnvelope className="text-gray-400" />

                <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-4 px-3 outline-none"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="block mb-2 font-medium">

                Password

              </label>

              <div className="flex items-center border rounded-xl px-4">

                <FaLock className="text-gray-400" />

                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-4 px-3 outline-none"
                    />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
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

            <div className="flex justify-between items-center">

              <label className="flex items-center gap-2">

                <input type="checkbox" />

                Remember Me

              </label>

              <Link
                to="/forgot-password"
                className="text-blue-700 hover:underline"
              >

                Forgot Password?

              </Link>

            </div>
            {error && (
            <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                {error}
            </div>
            )}

            {/* Login */}

            <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-800 hover:bg-blue-900 disabled:bg-gray-400 text-white py-4 rounded-xl text-lg font-semibold transition"
            >
            {loading ? "Signing In..." : "Login"}
            </button>
          </form>

          {/* Footer */}

          <div className="mt-10 border-t pt-6 text-center">

            <p className="text-sm text-gray-500">

              CampusConnect © 2026

            </p>

            <p className="text-xs text-gray-400 mt-2">

              Bannari Amman Institute of Technology

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;