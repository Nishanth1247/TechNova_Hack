import DashboardLayout from "../../layouts/DashboardLayout";
import ResourcePanel from "../../components/workspace/ResourcePanel";
import { useAuth } from "../../context/AuthContext";

function Resources() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Resources
          </h1>

          <p className="text-gray-500 mt-2">
            Access and manage learning resources.
          </p>
        </div>

        <ResourcePanel
          role={user.role}
        />

      </div>
    </DashboardLayout>
  );
}

export default Resources;