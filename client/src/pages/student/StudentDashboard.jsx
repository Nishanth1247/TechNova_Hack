import DashboardLayout from "../../layouts/DashboardLayout";

import StudentHeader from "../../components/student/StudentHeader";
import StudentStats from "../../components/student/StudentStats";
import TodayClasses from "../../components/student/TodayClasses";
import PendingTasks from "../../components/student/PendingTasks";
import LatestAnnouncements from "../../components/student/LatestAnnouncements";
import LatestResources from "../../components/student/LatestResources";
import FacultyReplies from "../../components/student/FacultyReplies";
import StudentQuickActions from "../../components/student/StudentQuickActions";
import StudentActivity from "../../components/student/StudentActivity";

function StudentDashboard() {

    return (
  <DashboardLayout>
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto space-y-6">

        {/* Welcome */}
        <div className="bg-white border rounded-xl shadow-sm">
          <StudentHeader />
        </div>

        {/* Statistics */}
        <div className="bg-white border rounded-xl shadow-sm">
          <StudentStats />
        </div>

        {/* Dashboard Content */}
        <div className="grid xl:grid-cols-3 gap-6">

          {/* Left */}
          <div className="xl:col-span-2 space-y-6">

            <div className="bg-white border rounded-xl shadow-sm">
              <TodayClasses />
            </div>

            <div className="bg-white border rounded-xl shadow-sm">
              <LatestAnnouncements />
            </div>

            <div className="bg-white border rounded-xl shadow-sm">
              <LatestResources />
            </div>

            <div className="bg-white border rounded-xl shadow-sm">
              <FacultyReplies />
            </div>

          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="bg-white border rounded-xl shadow-sm">
              <PendingTasks />
            </div>

            <div className="bg-white border rounded-xl shadow-sm">
              <StudentQuickActions />
            </div>

            <div className="bg-white border rounded-xl shadow-sm">
              <StudentActivity />
            </div>

          </div>

        </div>

      </div>

    </div>
  </DashboardLayout>
);

}

export default StudentDashboard;