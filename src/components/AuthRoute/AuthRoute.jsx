import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";

const AuthRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/register" state={{ from: location }} replace />
  );
};

export default AuthRoute;
