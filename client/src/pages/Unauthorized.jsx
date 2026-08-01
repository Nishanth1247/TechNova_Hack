import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";

function Unauthorized() {
  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

    <div className="w-full max-w-lg bg-white border border-gray-200 rounded-3xl shadow-sm p-10 text-center">

      {/* Icon */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">

        <FaLock className="text-red-600 text-4xl" />

      </div>

      {/* Error Code */}
      <h2 className="mt-6 text-sm font-semibold uppercase tracking-widest text-red-600">
        Error 403
      </h2>

      {/* Title */}
      <h1 className="mt-2 text-3xl font-bold text-gray-800">
        Access Denied
      </h1>

      {/* Description */}
      <p className="mt-4 text-gray-500 leading-7">
        You don't have permission to access this page.
        Please sign in with an authorized account or contact the administrator if you believe this is an error.
      </p>

      {/* Button */}
      <div className="mt-8">

        <Link
          to="/login"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition"
        >
          Go to Login
        </Link>

      </div>

    </div>

  </div>
);
}

export default Unauthorized;