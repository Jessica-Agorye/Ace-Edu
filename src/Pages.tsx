import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";

const Pages = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Pricing />
      <Faq />
    </>
  );
};

export default Pages;
