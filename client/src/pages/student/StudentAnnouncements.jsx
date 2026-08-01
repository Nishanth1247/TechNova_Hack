import DashboardLayout from "../../layouts/DashboardLayout";
import AnnouncementPanel from "../../components/workspace/AnnouncementPanel";
import { useAuth } from "../../context/AuthContext";

function StudentAnnouncements() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Page Header */}

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Announcements
          </h1>

          <p className="text-gray-500 mt-2">
            View the latest announcements from your faculty.
          </p>
        </div>

        {/* Shared Announcement Panel */}

        <AnnouncementPanel role={user.role} />

      </div>
    </DashboardLayout>
  );
}

export default StudentAnnouncements;