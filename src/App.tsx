import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import About from "./pages/About";
import Services from "./components/sections/Services";
import WorkDone from "./components/sections/WorkDone";
import ChooseUs from "./pages/ChooseUs";
import Testimonials from "./components/sections/Tesimonials";
import BlogNews from "./components/sections/BlogNews";
import Faq from "./components/sections/Faq";
import NewsLater from "./components/layout/NewsLater";
import Footer from "./components/layout/Footer";
import Contact from "./components/layout/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Services />
              <WorkDone />
              <ChooseUs />
              <Testimonials />
              <BlogNews />
              <Faq />
              <NewsLater />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work-done" element={<WorkDone />} />
        <Route path="/choose-us" element={<ChooseUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog-news" element={<BlogNews />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/news-later" element={<NewsLater />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

      <Footer />
      <footer className="bg-amber-600 text-white p-4">
        &copy;{new Date().getFullYear()} Australian Facilities Expert. All
        rights reserved.
      </footer>
    </Router>
  );
};

export default App;
