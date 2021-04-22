import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = (props) => {
  let user = useSelector((state) => state.auth.user);
  if (user) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
