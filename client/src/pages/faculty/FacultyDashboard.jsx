import DashboardLayout from "../../layouts/DashboardLayout";

import FacultyHeader from "../../components/faculty/FacultyHeader";
import FacultyStats from "../../components/faculty/FacultyStats";
import TodaySchedule from "../../components/faculty/TodaySchedule";
import PendingDoubts from "../../components/faculty/PendingDoubts";
import RecentDownloads from "../../components/faculty/RecentDownloads";
import StudentEngagement from "../../components/faculty/StudentEngagement";
import CommunicationHealth from "../../components/faculty/CommunicationHealth";
import QuickActions from "../../components/faculty/QuickActions";
import RecentActivity from "../../components/faculty/RecentActivity";

function FacultyDashboard() {

    return (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-8">

      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <FacultyHeader />
      </div>

      {/* Statistics */}
      <FacultyStats />

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left Section */}
        <div className="xl:col-span-2 space-y-6">

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <TodaySchedule />
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <PendingDoubts />
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <RecentActivity />
          </div>

        </div>

        {/* Right Section */}
        <div className="space-y-6">

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <QuickActions />
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <RecentDownloads />
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <StudentEngagement />
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <CommunicationHealth />
          </div>

        </div>

      </div>

    </div>
  </DashboardLayout>
);

}

export default FacultyDashboard;