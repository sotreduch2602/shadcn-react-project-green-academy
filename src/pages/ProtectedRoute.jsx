import { UserContext } from "@/contexts/user/UserContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ requiredRole }) => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    console.log("Login with your account to access this page");

    return <Navigate to="/login" replace />;
  }

  if (currentUser && currentUser.role == requiredRole) {
    // return <Navigate to="/profile" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
