import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";

function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white rounded-2xl shadow-xl p-10 text-center w-full max-w-md">

        <FaLock className="text-red-600 text-6xl mx-auto mb-6" />

        <h1 className="text-3xl font-bold mb-3">
          Access Denied
        </h1>

        <p className="text-gray-500 mb-8">
          You don't have permission to access this page.
        </p>

        <Link
          to="/login"
          className="inline-block bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg"
        >
          Go to Login
        </Link>

      </div>

    </div>
  );
}

export default Unauthorized;