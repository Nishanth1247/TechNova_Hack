import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ children, role }) {
  const { user, isAuthenticated } = useAuth();

  // User not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Wrong role
  if (role && user.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default ProtectedRoute;