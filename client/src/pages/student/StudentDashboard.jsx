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

            <div className="space-y-6">

                <StudentHeader/>

                <StudentStats/>

                <div className="grid xl:grid-cols-3 gap-6">

                    <div className="xl:col-span-2 space-y-6">

                        <TodayClasses/>

                        <LatestAnnouncements/>

                        <LatestResources/>

                        <FacultyReplies/>

                    </div>

                    <div className="space-y-6">

                        <PendingTasks/>

                        <StudentQuickActions/>

                        <StudentActivity/>

                    </div>

                </div>

            </div>

        </DashboardLayout>

    )

}

export default StudentDashboard;