import React from "react";
import { Route, Switch } from "react-router";

// PAGES
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import AccountPage from "../pages/AccountPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";

const PublicLayout = () => {
  return (
    <div id="home">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={DetailPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={AccountPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default PublicLayout;
