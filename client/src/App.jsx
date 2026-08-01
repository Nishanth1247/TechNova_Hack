import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import Announcements from "./pages/admin/Announcements";
import CreateAnnouncement from "./pages/admin/CreateAnnouncement";
import AnnouncementDetails from "./pages/admin/AnnouncementDetails";
import Resources from "./pages/admin/Resources";
import UploadResource from "./pages/admin/UploadResource";
import SupportDesk from "./pages/admin/SupportDesk";
import SupportTicketDetails from "./pages/admin/SupportTicketDetails";
import Notifications from "./pages/admin/Notifications";
import EmergencyAlerts from "./pages/admin/EmergencyAlerts";
import Users from "./pages/admin/Users";
import WorkspaceList from "./pages/workspace/WorkspaceList";
import WorkspaceDetails from "./pages/workspace/Workspace";
import Profile from "./pages/profile/Profile";
import AnnouncementAnalytics from "./pages/admin/AnnouncementAnalytics";
import AddUser from "./pages/admin/AddUser";
import Settings from "./pages/settings/Settings";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import MySubjects from "./pages/student/MySubjects";
import Unauthorized from "./pages/Unauthorized";
import FacultyAnnouncements from "./pages/faculty/FacultyAnnouncements";
import StudentAnnouncements from "./pages/student/StudentAnnouncements";
import SharedResources from "./pages/shared/Resources";
import SharedSupport from "./pages/shared/Support";
import SharedNotifications from "./pages/shared/Notifications";

function App() {
  return (
    <Routes>

  {/* Public Routes */}

  <Route path="/" element={<Navigate to="/login" replace />} />

  <Route path="/login" element={<Login />} />

  <Route path="/unauthorized" element={<Unauthorized />} />

  {/* ---------------- ADMIN ---------------- */}

  <Route
    path="/admin/dashboard"
    element={
      <ProtectedRoute role="admin">
        <AdminDashboard />
      </ProtectedRoute>
    }
  />

  <Route
    path="/admin/users"
    element={
      <ProtectedRoute role="admin">
        <Users />
      </ProtectedRoute>
    }
  />
  <Route
  path="/faculty/notifications"
  element={
    <ProtectedRoute role="faculty">
      <SharedNotifications />
    </ProtectedRoute>
  }
/>

<Route
  path="/student/notifications"
  element={
    <ProtectedRoute role="student">
      <SharedNotifications />
    </ProtectedRoute>
  }
/>

  <Route
    path="/admin/users/add"
    element={
      <ProtectedRoute role="admin">
        <AddUser />
      </ProtectedRoute>
    }
  />

  <Route
    path="/admin/announcements"
    element={
      <ProtectedRoute role="admin">
        <Announcements />
      </ProtectedRoute>
    }
  />

  <Route
    path="/admin/announcements/create"
    element={
      <ProtectedRoute role="admin">
        <CreateAnnouncement />
      </ProtectedRoute>
    }
  />
  <Route
  path="/faculty/support"
  element={
    <ProtectedRoute role="faculty">
      <SharedSupport />
    </ProtectedRoute>
  }
/>

<Route
  path="/student/support"
  element={
    <ProtectedRoute role="student">
      <SharedSupport />
    </ProtectedRoute>
  }
/>

  <Route
    path="/admin/announcements/analytics"
    element={
      <ProtectedRoute role="admin">
        <AnnouncementAnalytics />
      </ProtectedRoute>
    }
  />
  <Route
  path="/faculty/resources"
  element={
    <ProtectedRoute role="faculty">
      <SharedResources />
    </ProtectedRoute>
  }
/>

<Route
  path="/student/resources"
  element={
    <ProtectedRoute role="student">
      <SharedResources />
    </ProtectedRoute>
  }
/>

  <Route
    path="/admin/announcements/:id"
    element={
      <ProtectedRoute role="admin">
        <AnnouncementDetails />
      </ProtectedRoute>
    }
  />

  <Route
    path="/admin/resources"
    element={
      <ProtectedRoute role="admin">
        <Resources />
      </ProtectedRoute>
    }
  />

  <Route
    path="/admin/resources/upload"
    element={
      <ProtectedRoute role="admin">
        <UploadResource />
      </ProtectedRoute>
    }
  />

  <Route
  path="/student/announcements"
  element={
    <ProtectedRoute role="student">
      <StudentAnnouncements />
    </ProtectedRoute>
  }
/>

  <Route
    path="/admin/support"
    element={
      <ProtectedRoute role="admin">
        <SupportDesk />
      </ProtectedRoute>
    }
  />

  <Route
    path="/admin/support/:id"
    element={
      <ProtectedRoute role="admin">
        <SupportTicketDetails />
      </ProtectedRoute>
    }
  />

  <Route
    path="/admin/notifications"
    element={
      <ProtectedRoute role="admin">
        <Notifications />
      </ProtectedRoute>
    }
  />

  <Route
    path="/admin/emergency"
    element={
      <ProtectedRoute role="admin">
        <EmergencyAlerts />
      </ProtectedRoute>
    }
  />

  {/* ---------------- FACULTY ---------------- */}

  <Route
    path="/faculty/dashboard"
    element={
      <ProtectedRoute role="faculty">
        <FacultyDashboard />
      </ProtectedRoute>
    }
  />
  <Route
  path="/faculty/announcements"
  element={
    <ProtectedRoute role="faculty">
      <FacultyAnnouncements />
    </ProtectedRoute>
  }
/>

  {/* ---------------- STUDENT ---------------- */}

  <Route
    path="/student/dashboard"
    element={
      <ProtectedRoute role="student">
        <StudentDashboard />
      </ProtectedRoute>
    }
  />

  <Route
    path="/student/subjects"
    element={
      <ProtectedRoute role="student">
        <MySubjects />
      </ProtectedRoute>
    }
  />

  {/* ---------------- SHARED ---------------- */}

  <Route
    path="/workspace"
    element={
      <ProtectedRoute>
        <WorkspaceList />
      </ProtectedRoute>
    }
  />

  <Route
  path="/student/workspace"
  element={
    <ProtectedRoute role="student">
      <WorkspaceDetails />
    </ProtectedRoute>
  }
/>

<Route
  path="/faculty/workspace"
  element={
    <ProtectedRoute role="faculty">
      <WorkspaceDetails />
    </ProtectedRoute>
  }
/>

  <Route
    path="/settings"
    element={
      <ProtectedRoute>
        <Settings />
      </ProtectedRoute>
    }
  />

  <Route
    path="/profile"
    element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    }
  />

  {/* 404 */}

  <Route
    path="*"
    element={
      <div className="flex items-center justify-center min-h-screen text-3xl font-bold">
        404 | Page Not Found
      </div>
    }
  />

</Routes>
  );
}

export default App;