import DashboardLayout from "../../layouts/DashboardLayout";
import { useAuth } from "../../context/AuthContext";

function Support() {
  const { user } = useAuth();

  return (
  <DashboardLayout>
    <div className="max-w-6xl mx-auto space-y-8">

      {/* Header */}
      <div>

        <h1 className="text-3xl font-bold text-gray-800">
          Support Center
        </h1>

        <p className="mt-2 text-gray-500">
          Raise support requests and track your tickets.
        </p>

      </div>

      {/* Support Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

        {/* Card Header */}
        <div className="border-b border-gray-200 px-6 py-5">

          <h2 className="text-xl font-semibold text-gray-800">
            Support Tickets
          </h2>

        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">

          <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-5">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4-.923L2 17l1.077-3.231A6.964 6.964 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"
              />
            </svg>

          </div>

          <h3 className="text-lg font-semibold text-gray-800">
            No Support Tickets
          </h3>

          <p className="mt-2 text-gray-500 max-w-md">
            You haven't created or received any support tickets yet.
            Create a ticket whenever you need assistance.
          </p>

          {user.role !== "admin" && (

            <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">

              Create Ticket

            </button>

          )}

        </div>

      </div>

    </div>
  </DashboardLayout>
);
}

export default Support;
