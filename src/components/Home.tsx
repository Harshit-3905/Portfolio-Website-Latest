import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Social from "./miscellaneous/Social";
import WordRotate from "@/components/magicui/word-rotate";
import Ripple from "@/components/magicui/ripple";

const Home = () => {
  return (
    <div
      id="home"
      className="flex lg:flex-row pt-50 w-full lg-w-[75%] min-h-screen items-center justify-center"
    >
      <div className="text-[#FBFBBF] flex flex-col justify-center text-center z-10">
        <p className="text-[30px] md:text-[35px]">Hey!</p>
        <div className="flex text-[40px] md:text-[45px] ">
          <p>I&apos;m </p>
          &nbsp;
          <p className="text-[#F56E0F]"> Harshit Joshi</p>
        </div>
        <WordRotate
          className="text-2xl font-bold font-mono"
          words={[
            "Full Stack Developer",
            "Open Source Enthusiast",
            "Problem Solver",
          ]}
        />
        <div className="flex pt-5 gap-3 justify-center">
          <a
            href="https://www.linkedin.com/in/harshit-joshi-40953321b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Social icon={FaLinkedin} />
          </a>
          <a
            href="https://github.com/Harshit-3905"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Social icon={FaGithub} />
          </a>
          <a
            href="https://twitter.com/Harshit3905"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Social icon={FaTwitter} />
          </a>
          <a href="#contact">
            <Social icon={IoIosMail} />
          </a>
        </div>
      </div>
      <Ripple mainCircleSize={420} mainCircleOpacity={10} numCircles={5} />
    </div>
  );
};

export default Home;
