/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// import Person from "@material-ui/icons/Person";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/Administrar/Administrar.js";
import TableList from "views/TableList/TableList.js";
import Resources from "views/Resources/Resoruces";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import MemoryOutlinedIcon from '@material-ui/icons/MemoryOutlined';
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import NotificationsPage from "views/Notifications/Notifications.js";
import GavelIcon from '@material-ui/icons/Gavel';
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Panel",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Administración",
    rtlName: "ملف تعريفي للمستخدم",
    icon: GavelIcon,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Máquinas",
    rtlName: "قائمة الجدول",
    icon: DesktopWindowsIcon,
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/resources",
    name: "Recursos",
    rtlName: "طباعة",
    icon: MemoryOutlinedIcon,
    component: Resources,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notificaciones",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
];

export default dashboardRoutes;
