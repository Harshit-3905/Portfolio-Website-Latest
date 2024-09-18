import React from "react";
import Image, { StaticImageData } from "next/image";
import { CgScreen } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface ProjectCardProps {
  index: number;
  image: StaticImageData;
  name: string;
  description: string;
  techStack: Array<string>;
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  image,
  name,
  description,
  techStack,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="flex flex-col h-450px w-[90%] bg-[#262626] rounded-2xl p-3 items-center justify-center border border-[#FBFBFB]">
      <div className="text-[15px] md:text-[30px] text-center text-[#F56E0F] underline underline-offset-4">
        {name}
      </div>
      <div
        className={`w-full flex flex-col ${
          index % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
        } pt-5 gap-5 items-center`}
      >
        <div className="w-full lg:w-1/2">
          <Image
            src={image}
            alt={name}
            quality={100}
            priority={false}
            loading="lazy"
            className="border"
          />
        </div>
        <div className="flex flex-col gap-3 text-center md:text-left items-center md:items-start w-full lg:w-1/2 justify-center">
          <p className="text-[14px] lg:text-[16px] text-white text-center">
            {description}
          </p>
          <div className="flex flex-wrap w-full gap-y-1 gap-x-2 items-center justify-center">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="px-2 py-1 bg-black text-[#F56E0F] text-[12px] lg:text-[16px] rounded-full"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="flex gap-2 pt-1 lg:pt-2 w-full justify-center">
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <button className="text-[15px] md:text-[18px] flex items-center gap-2 bg-[#F56E0F] rounded-xl border border-[#F56E0F] hover:text-[#F56E0F] hover:bg-[#262626] h-[35px] px-3 lg:h-[45px] lg:px-4">
                Live
                <CgScreen className="w-[15px] md:w-[18px] h-[15px] md:h-[18px]" />
              </button>
            </Link>
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <button className="text-[15px] md:text-[18px] flex items-center gap-2 bg-[#F56E0F] rounded-xl border border-[#F56E0F] hover:text-[#F56E0F] hover:bg-[#262626] h-[35px] px-3 lg:h-[45px] lg:px-4">
                Github
                <FaGithub className="w-[15px] md:w-[18px] h-[15px] md:h-[18px]" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
