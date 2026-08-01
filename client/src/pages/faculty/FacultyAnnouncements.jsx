import DashboardLayout from "../../layouts/DashboardLayout";
import AnnouncementPanel from "../../components/workspace/AnnouncementPanel";
import { useAuth } from "../../context/AuthContext";

function FacultyAnnouncements() {
  const { user } = useAuth();

  return (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-8">

      {/* Page Header */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-8 py-6">

        <h1 className="text-3xl font-bold text-gray-800">
          Announcements
        </h1>

        <p className="mt-2 text-gray-500">
          Create and manage course announcements.
        </p>

      </div>

      {/* Announcement Panel */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

        <AnnouncementPanel role={user.role} />

      </div>

    </div>
  </DashboardLayout>
);
}

export default FacultyAnnouncements;