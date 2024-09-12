import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import HireMe from "../components/HireMe";
import Contact from "../components/Contact";
import Starfield from "react-starfield";
import "./globals.css";

function App() {
  return (
    <div className="w-full flex flex-col items-center bg-black text-white overflow-x-hidden scroll-smooth">
      <Starfield
        starCount={2000}
        starColor={[255, 255, 255]}
        speedFactor={0.07}
        backgroundColor="black"
      />
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <HireMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
