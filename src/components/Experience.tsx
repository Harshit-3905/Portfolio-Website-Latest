import SectionHeading from "./miscellaneous/SectionHeading";
import ExperienceCard from "./miscellaneous/ExperienceCard";
import { experiences } from "./miscellaneous/experiencesData";

const Experience = () => {
  return (
    <div id="experience" className="w-full lg:w-[70%] px-4">
      <SectionHeading text="Experience" />
      <div className="flex flex-wrap gap-5 pt-5 text-black justify-center">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            location={experience.location}
            duration={experience.duration}
            description={experience.description}
            techStack={experience.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
