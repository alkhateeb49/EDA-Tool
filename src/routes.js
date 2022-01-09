/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Create from "views/Create.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import Delete from "views/Delete.js";
import Set from "views/Set.js";
import Get from "views/Get.js";
import Login from "views/Login.js";

var routes = [
  {
    path: "/Create",
    name: "Create",
    rtlName: "انشاء",
    icon: "tim-icons icon-pencil",
    component: Create,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Update",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  {
    path: "/delete",
    name: "Delete",
    rtlName: "حذف",
    icon: "tim-icons icon-trash-simple",
    component: Delete,
      layout: "/admin",
  },
  {
    path: "/get",
    name: "Get",
    rtlName: "جلب",
    icon: "tim-icons icon-paper",
    component: Get,
    layout: "/admin",
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: Get,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: Delete,
  //   layout: "/admin",
  // },
  {
    path: "/Set",
    name: "Set",
    rtlName: "طباعة",
    icon: "tim-icons icon-tap-02",
    component: Set,
    layout: "/admin",
  },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl",
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   rtlName: "تسجيل الدخول",
  //   icon: "nc-single-02",
  //   component: Login,
  //   layout: "/login",
  // },
];
export default routes;
