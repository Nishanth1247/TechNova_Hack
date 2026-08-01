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

        <DashboardLayout >

            <div className="space-y-6">

                <FacultyHeader />

                <FacultyStats />

                <div className="grid xl:grid-cols-3 gap-6">

                    <div className="xl:col-span-2 space-y-6">

                        <TodaySchedule />

                        <PendingDoubts />

                        <RecentActivity />

                    </div>

                    <div className="space-y-6">

                        <QuickActions />

                        <RecentDownloads />

                        <StudentEngagement />

                        <CommunicationHealth />

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default FacultyDashboard;