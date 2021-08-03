import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import User from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/user" component={User} />
      <Redirect from="/" to="/user/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
