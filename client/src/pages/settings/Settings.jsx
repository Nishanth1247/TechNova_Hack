import DashboardLayout from "../../layouts/DashboardLayout";
import { useAuth } from "../../context/AuthContext";

import AdminSettings from "../../components/settings/AdminSettings";
import FacultySettings from "../../components/settings/FacultySettings";
import StudentSettings from "../../components/settings/StudentSettings";

function Settings() {
  const { user } = useAuth();

  if (!user) {
    return (
      <DashboardLayout>
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-white rounded-2xl shadow border p-10 text-center">
            <h2 className="text-2xl font-bold">
              Loading...
            </h2>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      {user.role === "admin" && (
        <AdminSettings />
      )}

      {user.role === "faculty" && (
        <FacultySettings />
      )}

      {user.role === "student" && (
        <StudentSettings />
      )}

    </DashboardLayout>
  );
}

export default Settings;