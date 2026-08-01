import DashboardLayout from "../../layouts/DashboardLayout";
import AnnouncementPanel from "../../components/workspace/AnnouncementPanel";
import { useAuth } from "../../context/AuthContext";

function StudentAnnouncements() {
  const { user } = useAuth();

  return (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-8">

      {/* Page Header */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-8 py-6">

        <h1 className="text-3xl font-bold text-gray-800">
          Announcements
        </h1>

        <p className="mt-2 text-gray-500">
          View the latest announcements from your faculty.
        </p>

      </div>

      {/* Announcement List */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">

        <div className="border-b border-gray-200 px-6 py-5">

          <h2 className="text-xl font-semibold text-gray-800">
            Recent Announcements
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Stay updated with important academic and departmental notices.
          </p>

        </div>

        <div className="p-6">

          <AnnouncementPanel role={user.role} />

        </div>

      </div>

    </div>
  </DashboardLayout>
);
}

export default StudentAnnouncements;