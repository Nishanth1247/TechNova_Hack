import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import WorkspaceHeader from "../../components/workspace/WorkspaceHeader";
import WorkspaceSidebar from "../../components/workspace/WorkspaceSidebar";

import AnnouncementPanel from "../../components/workspace/AnnouncementPanel";
import ResourcePanel from "../../components/workspace/ResourcePanel";
import DiscussionPanel from "../../components/workspace/DiscussionPanel";
import SchedulePanel from "../../components/workspace/SchedulePanel";
import LinksPanel from "../../components/workspace/LinksPanel";
import OverviewPanel from "../../components/workspace/OverviewPanel";

function WorkspaceDetails() {

    const [activeTab, setActiveTab] = useState("announcements");

    const renderContent = () => {

        switch(activeTab){

            case "announcements":
                return <AnnouncementPanel/>;

            case "resources":
                return <ResourcePanel/>;

            case "discussion":
                return <DiscussionPanel/>;

            case "schedule":
                return <SchedulePanel/>;

            case "links":
                return <LinksPanel/>;

            case "overview":
                return <OverviewPanel />;

            default:
                return <AnnouncementPanel/>;

        }

    }

    return(

        <DashboardLayout role="admin">

            <WorkspaceHeader/>

            <div className="grid lg:grid-cols-4 gap-6 mt-6">

                <WorkspaceSidebar
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                <div className="lg:col-span-3">

                    {renderContent()}

                </div>

            </div>

        </DashboardLayout>

    )

}

export default WorkspaceDetails;