import { Routes, Route } from "react-router";
import Pages from "./Pages";
import GetStarted from "./components/GetStarted";
import BookCall from "./components/BookCall";
import Blog from "./sections/Blog";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/book-call" element={<BookCall />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default App;
