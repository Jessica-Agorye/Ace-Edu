import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* pages show here */}
      <Footer />
    </>
  );
};

export default MainLayout;
