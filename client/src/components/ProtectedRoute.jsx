import { Navigate } from "react-router-dom";
import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
    if (isAuthenticated) {
      return children
    }
    return <Navigate to="/login" replace />;; 
  
};

export default ProtectedRoute;
