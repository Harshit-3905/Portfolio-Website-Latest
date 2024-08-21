import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./miscellaneous/ProjectCard";
import { projects } from "@/components/miscellaneous/projectsData";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="w-[70%] py-20">
      <h2 className="pt-5 text-[#F56E0F] underline underline-offset-4 text-[2rem] text-center">
        Projects
      </h2>
      <div className="pt-5 mt-5 text-black">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 ">
                <ProjectCard
                  name={project.name}
                  image={project.image}
                  description={project.description}
                  techStack={project.techStack}
                  liveLink={project.liveLink}
                  githubLink={project.githubLink}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
