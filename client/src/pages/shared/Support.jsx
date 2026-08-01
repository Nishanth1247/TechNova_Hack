import DashboardLayout from "../../layouts/DashboardLayout";
import { useAuth } from "../../context/AuthContext";

function Support() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold">
            Support Center
          </h1>

          <p className="text-gray-500 mt-2">
            Raise support requests and track your tickets.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Support Tickets
          </h2>

          <p className="text-gray-500">
            No support tickets available.
          </p>

          {user.role !== "admin" && (
            <button className="mt-6 bg-blue-800 text-white px-5 py-3 rounded-lg">
              Create Ticket
            </button>
          )}

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Support;
