import PreLoader from "../components/PreLoader";
import { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Github from "../components/Github";
import Projects from "../components/Projects";
import HireMe from "../components/HireMe";
import Contact from "../components/Contact";

function App() {
  return (
    <Suspense fallback={<PreLoader />}>
      <div className="w-full flex flex-col items-center bg-black text-white overflow-x-hidden">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Github />
        <Projects />
        <HireMe />
        <Contact />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
