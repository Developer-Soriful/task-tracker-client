// components/ProtectedRoute.jsx
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user?.email) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
