import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import GetStarted from "./components/GetStarted";
import BookCall from "./components/BookCall";
import FAQ from "./sections/Faq";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import StudyAbroad from "./ServicesPages/StudyAbroad";
import TravelAndTour from "./ServicesPages/TravelAndTour";
import PremiumConsulting from "./ServicesPages/PremiumConsulting";
import CareerLeadership from "./ServicesPages/CareerLeadership";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/book-call" element={<BookCall />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/travel-tour" element={<TravelAndTour />} />
        <Route path="/premium-consulting" element={<PremiumConsulting />} />
        <Route path="/career-leadership" element={<CareerLeadership />} />
      </Route>
    </Routes>
  );
};

export default App;
