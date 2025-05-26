import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Services from "./components/sections/Services";
import WorkDone from "./components/sections/WorkDone";
import ChooseUs from "./pages/ChooseUs";
import Tesimonials from "./components/sections/Tesimonials";
import BlogNews from "./components/sections/BlogNews";
import Faq from "./components/sections/Faq";
import NewsLater from "./components/layout/NewsLater";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <WorkDone />
      <ChooseUs />
      <Tesimonials />
      <BlogNews />
      <Faq />
      <NewsLater />
      <Footer />
    </>
  );
};

export default App;
