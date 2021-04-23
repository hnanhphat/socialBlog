import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// COMPONENTS
import AlertMsg from "../components/AlertMsg";
import Header from "../components/Header";
import Footer from "../components/Footer";

// PAGES
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";

const Routes = () => {
  return (
    <div>
      <AlertMsg />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />

        <ProtectedRoute
          path="/:id"
          render={(props) => <DetailPage {...props} />}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Routes;
