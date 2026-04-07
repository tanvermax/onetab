import { Outlet } from "react-router";
import Footer from "./Footer";
import NavbarPage from "./Navber";

export default function CommonLayout() {
  return (
    <div>
      <NavbarPage />
      <Outlet />

      <Footer />
    </div>
  );
}
