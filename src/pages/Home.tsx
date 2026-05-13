import Hero from "../sections/Hero";
import AboutUs from "../sections/AboutUs";
import Services from "../sections/Services";
// import ChatWidget from "./components/ChatWidget";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services preview={true} />

      {/* <ChatWidget /> */}
    </>
  );
};

export default Home;
