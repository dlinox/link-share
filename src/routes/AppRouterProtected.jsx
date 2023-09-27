import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function AppRouterProtected () {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default AppRouterProtected;
