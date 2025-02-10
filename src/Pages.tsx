import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const Pages = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Pricing />
      <Faq />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Pages;
