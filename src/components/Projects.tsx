import ProjectCard from "./miscellaneous/ProjectCard";
import { projects } from "@/components/miscellaneous/projectsData";
import SectionHeading from "./miscellaneous/SectionHeading";

const Projects = () => {
  return (
    <div id="projects" className="w-full lg:w-[70%]">
      <SectionHeading text="Projects" />
      <div className="flex flex-wrap gap-5 pt-2 text-black justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
            techStack={project.techStack}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
