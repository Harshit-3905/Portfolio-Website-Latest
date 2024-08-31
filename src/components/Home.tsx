import WordRotate from "@/components/magicui/word-rotate";
import Ripple from "@/components/magicui/ripple";
import SocialLinks from "./miscellaneous/SocialLinks";

const Home = () => {
  return (
    <div
      id="home"
      className="flex lg:flex-row pt-50 w-full lg-w-[75%] min-h-[95vh] items-center justify-center relative overflow-hidden"
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
        <SocialLinks />
      </div>
      <Ripple mainCircleSize={420} mainCircleOpacity={10} numCircles={5} />
    </div>
  );
};

export default Home;
