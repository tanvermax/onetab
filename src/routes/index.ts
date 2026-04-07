import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../MainLayout/Home/Home";
import AboutSection from "../MainLayout/Aboutus";
import SDGSection from "../MainLayout/SDGSection";
// import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children:[
      {
        Component:Home,
        path:"/"
      },
      {
        Component:AboutSection,
        path:"/about"
      },
      {
        Component:SDGSection,
        path:"/sdggoals"
      }
    ]
  },
]);

export default router     ;
