import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import HireMe from "../components/HireMe";
import Contact from "../components/Contact";
import "./globals.css";

function App() {
  return (
    <div className="w-full flex flex-col items-center bg-black text-white overflow-x-hidden scroll-smooth">
      <Home />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <HireMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
