import { FaCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  techStack: string[];
}

const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <div className="flex flex-col h-auto w-[90%] bg-primarybackground rounded-2xl p-5 border border-primarytext">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-highlightedtext">
            {props.company}
          </h3>
          <p className="text-lg md:text-xl text-primarytext">
            {props.title}
          </p>
        </div>
        <div className="text-right">
          <p className="flex items-center text-primarytext mb-1">
            <FaCalendarAlt className="w-4 h-4 mr-2" />
            <span className="text-sm md:text-base">
              {props.duration}
            </span>
          </p>
          <p className="flex items-center text-primarytext justify-end">
            <MdLocationOn className="w-4 h-4 mr-2" />
            <span className="text-sm md:text-base">
              {props.location}
            </span>
          </p>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-4 text-primarytext text-sm md:text-base">
        {props.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      <div className="flex flex-wrap w-full gap-y-1 gap-x-2 items-center justify-center mt-5">
        {props.techStack.map((tech) => (
          <div
            key={tech}
            className="px-2 py-1 bg-black text-highlightedtext text-[10px] md:text-[12px] lg:text-[16px] rounded-full"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
