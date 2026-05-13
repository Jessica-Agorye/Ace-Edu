import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import GetStarted from "./components/GetStarted";
import BookCall from "./components/BookCall";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/Faq";
import Blog from "./sections/Blog";

const App = () => {
  return (
    <Routes>
      {/* WRAP ALL ROUTES HERE */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/book-call" element={<BookCall />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default App;
