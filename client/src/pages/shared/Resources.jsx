import DashboardLayout from "../../layouts/DashboardLayout";
import ResourcePanel from "../../components/workspace/ResourcePanel";
import { useAuth } from "../../context/AuthContext";

function Resources() {
  const { user } = useAuth();

  return (
  <DashboardLayout>
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto bg-white border rounded-xl shadow-sm">

        {/* Header */}
        <div className="p-6 border-b">

          <h1 className="text-2xl font-bold text-gray-800">
            Resources
          </h1>

          <p className="text-gray-500 mt-1">
            Access and manage learning resources.
          </p>

        </div>

        {/* Resource Content */}
        <div className="p-6">

          <ResourcePanel
            role={user.role}
          />

        </div>

      </div>

    </div>
  </DashboardLayout>
);
}

export default Resources;