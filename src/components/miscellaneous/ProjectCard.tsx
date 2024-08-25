import React from "react";
import Image, { StaticImageData } from "next/image";
import { CgScreen } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  image: StaticImageData;
  name: string;
  description: string;
  techStack: Array<string>;
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  name,
  description,
  techStack,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="flex flex-col w-full h-450px bg-[#262626] rounded-2xl p-3 items-center justify-center border border-[#FBFBFB]">
      <div className="text-[20px] md:text-[30px] text-center text-[#F56E0F] underline underline-offset-4">
        {name}
      </div>
      <div className="w-full flex flex-col pt-5 gap-5 items-center">
        <div className="w-full">
          <Image
            src={image}
            alt={name}
            quality={100}
            priority={false}
            loading="lazy"
            className="border"
          />
        </div>
        <div className="flex flex-col gap-3 text-center md:text-left items-center md:items-start w-full px-5 justify-center">
          <p className="text-[15px] md:text-[16px] text-white">{description}</p>
          <div className="flex flex-wrap w-full gap-2 items-center justify-center">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="px-2 py-1 bg-gray-200 text-sm rounded-full"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="flex gap-2 w-full justify-center">
            <div>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <button className="text-[15px] md:text-[18px] flex items-center gap-2 bg-[#F56E0F] rounded-xl border border-[#F56E0F] hover:text-[#F56E0F] hover:bg-[#262626] h-[45px] px-4">
                  Live
                  <CgScreen className="w-[15px] md:w-[18px] h-[15px] md:h-[18px]" />
                </button>
              </a>
            </div>
            <div>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <button className="text-[15px] md:text-[18px] flex items-center gap-2 bg-[#F56E0F] rounded-xl border border-[#F56E0F] hover:text-[#F56E0F] hover:bg-[#262626] h-[45px] px-4">
                  Github
                  <FaGithub className="w-[15px] md:w-[18px] h-[15px] md:h-[18px]" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
