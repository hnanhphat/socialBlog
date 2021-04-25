import React from "react";
import { Redirect, Route } from "react-router";

const ProtectedRoute = (rest) => {
  const isAuthenticated = localStorage.getItem("accessToken"); // Changed
  if (isAuthenticated) return <Route {...rest} />;
  return <Redirect to="/login" />;
};

export default ProtectedRoute;
