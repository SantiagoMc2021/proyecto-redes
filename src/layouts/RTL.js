import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
// import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// core components
// import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";

import routes from "ruta_user.js";

//import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/user" to="/user/Home" />
  </Switch>
);


export default function User() {
  const getRoute = () => {
    return window.location.pathname !== "/user/maps";
  };
  return (
    <div >
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div>
            <div>{switchRoutes}</div>
          </div>
        ) : (
          <div>{switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
    </div>
  );
}
