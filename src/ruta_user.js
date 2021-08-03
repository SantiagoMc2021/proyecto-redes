// @material-ui/icons
// import Person from "@material-ui/icons/Person";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import Home from "views/Home/Home.js";
import About from "views/About/About.js";
import GavelIcon from '@material-ui/icons/Gavel';
import Dashboard from "@material-ui/icons/Dashboard";
import Available from "views/Available/Available";
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/Home",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Home,
    layout: "/user",
  },
  {
    path: "/About",
    name: "About",
    rtlName: "ملف تعريفي للمستخدم",
    icon: GavelIcon,
    component: About,
    layout: "/user",
  },
  {
    path: "/Available",
    name: "Available",
    rtlName: "ملف تعريفي للمستخدم",
    icon: GavelIcon,
    component: Available,
    layout: "/user",
  },
];

export default dashboardRoutes;
