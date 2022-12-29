import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Route, Navigate } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
    if (isAuthenticated) {
      return children
    }
    return <Navigate to="/login" replace />;; 
  
};

export default ProtectedRoute;
