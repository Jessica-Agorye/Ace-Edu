import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[90px]">
        <Outlet /> {/* pages show here */}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
