import HireMeCard from "./miscellaneous/HireMeCard";
import communicativeImage from "../assets/Hire/communicative.webp";
import collaborativeImage from "../assets/Hire/collaborative.webp";
import workEthicImage from "../assets/Hire/work-ethic.webp";
import selfMotivatedImage from "../assets/Hire/self-motivation.webp";
import SectionHeading from "./miscellaneous/SectionHeading";

const HireMe = () => {
  return (
    <div className="w-full lg:w-[75%] py-10">
      <SectionHeading text="Why Hire Me?" />
      <div className="flex flex-wrap lg:flex-nowrap w-full justify-around items-center pt-10 gap-5">
        <HireMeCard
          src={communicativeImage}
          heading="Communicative"
          description="I balance talking and listening hence ensuring effective communication."
        />
        <HireMeCard
          src={collaborativeImage}
          heading="Collaborative"
          description="Teamwork makes the dream work. Collaboration first, then work."
        />
        <HireMeCard
          src={workEthicImage}
          heading="Work Ethic"
          description="I don't wait for deadlines, deadlines wait for me."
        />
        <HireMeCard
          src={selfMotivatedImage}
          heading="Self Motivated"
          description="I put myself into action to achieve my goals."
        />
      </div>
    </div>
  );
};

export default HireMe;
