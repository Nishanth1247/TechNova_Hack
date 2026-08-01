import { useState } from "react";
import { useParams } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

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

    const [activeTab, setActiveTab] = useState("overview");

    const { user } = useAuth();

    const { subjectId } = useParams();

    const renderContent = () => {

        switch(activeTab){

            case "overview":
                return (
                    <OverviewPanel
                        role={user.role}
                        subjectId={subjectId}
                    />
                );

            case "announcements":
                return (
                    <AnnouncementPanel
                        role={user.role}
                        subjectId={subjectId}
                    />
                );

            case "resources":
                return (
                    <ResourcePanel
                        role={user.role}
                        subjectId={subjectId}
                    />
                );

            case "discussion":
                return (
                    <DiscussionPanel
                        role={user.role}
                        subjectId={subjectId}
                    />
                );

            case "schedule":
                return (
                    <SchedulePanel
                        role={user.role}
                        subjectId={subjectId}
                    />
                );

            case "links":
                return (
                    <LinksPanel
                        role={user.role}
                        subjectId={subjectId}
                    />
                );

            default:
                return (
                    <OverviewPanel
                        role={user.role}
                        subjectId={subjectId}
                    />
                );
        }

    };

    return(

        <DashboardLayout>

            <WorkspaceHeader
                role={user.role}
                subjectId={subjectId}
            />

            <div className="grid lg:grid-cols-4 gap-6 mt-6">

                <WorkspaceSidebar
                    role={user.role}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                <div className="lg:col-span-3">

                    {renderContent()}

                </div>

            </div>

        </DashboardLayout>

    );

}

export default WorkspaceDetails;