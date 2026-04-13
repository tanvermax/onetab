import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../MainLayout/Home/Home";
import AboutSection from "../MainLayout/Aboutus";
import SDGSection from "../MainLayout/SDGSection";
import UserSolutions from "../MainLayout/UserSolutions";
import TeacherSolutions from "../MainLayout/TeacherSolutions";
import InstitutionSolutions from "../MainLayout/InstitutionSolutions";
import SmartAttendance from "../MainLayout/SmartAttendance";
import DigitalLibrary from "../MainLayout/DigitalLibrary";
import TeacherTraining from "../MainLayout/TeacherTraining";
import TeacherTrainingPage from "../MainLayout/TeacherTrainingPage";
import SecuritySection from "../MainLayout/SecuritySection";
import AboutUs from "../MainLayout/Page/AboutUs";
import MissionPage from "../MainLayout/Page/OurMission";
import VisionPage from "../MainLayout/Page/OurVision";
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
        path:"/whyonetab"
      },
      {
        Component:SDGSection,
        path:"/sdggoals"
      },
      {
        Component:UserSolutions,
        path:"/usersolutions"
      },
      {
        Component:TeacherSolutions,
        path:"/forteachers"
      },
      {
        Component:InstitutionSolutions,
        path:"/forinstitutions"
      },
      {
        Component:SmartAttendance,
        path:"/smartattendance"
      },
      {
        Component:DigitalLibrary,
        path:"/digitallibrary"
      },
      {
        Component:TeacherTraining,
        path:"/teachertraining"
      },
      {
        Component:TeacherTrainingPage,
        path:"/teachertrainingpage"
      },
      {
        Component:SecuritySection,
        path:"/security"
      },
      {
        Component:AboutUs,
        path:"/aboutus"
      },
      {
        Component:MissionPage,
        path:"/ourmission"
      },
      {
        Component:VisionPage,
        path:"/ourvision"
      }
    ]
  },
]);

export default router     ;
