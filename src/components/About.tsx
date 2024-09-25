import MyImage from "../assets/HarshitImage.png";
import Image from "next/image";
import SectionHeading from "./miscellaneous/SectionHeading";

const About = () => {
  return (
    <div
      id="about"
      className="w-full lg:w-[75%] lg:max-h-[1000px] min-h-[700px]"
    >
      <SectionHeading text="About" />
      <div className="flex flex-col gap-5 lg:flex-row w-full py-10">
        <div className="w-full lg:w-2/5 flex items-center justify-center">
          <Image
            src={MyImage}
            alt="My Image"
            className="w-80 h-80 rounded-full object-cover"
            quality={100}
          />
        </div>
        <div className="w-full lg:w-3/5 text-center rounded-lg px-8 md:px-20 lg:px-0 pt-5 space-y-5">
          <p className="font-bold text-xl">Hi, I&apos;m Harshit!</p>
          <p className="text-lg text-center">
            I am a passionate developer and a Final Year Information Technology
            undergraduate student at Kalyani Government Engineering College.
          </p>
          <p className="text-lg text-center">
            My aspiration is to make a positive impact on the people around me
            through personal projects, internships, hackathons, and various
            experiences.
          </p>
          <p className="text-lg text-center">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning, I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
          <span className="mt-3 lg:space-x-2 justify-center">
            <span className="text-lg">Feel free to reach out to me at </span>
            <span className="text-[#F56E0F] text-lg font-semibold">
              harshitjoshidev@gmail.com
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
