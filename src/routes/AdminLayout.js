import React from "react";
import { Route, Switch } from "react-router";
import ProfilePage from "../pages/ProfilePage";

const AdminLayout = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/admin/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
};

export default AdminLayout;
