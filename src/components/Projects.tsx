import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./miscellaneous/ProjectCard";
import { projects } from "@/components/miscellaneous/projectsData";
import SectionHeading from "./miscellaneous/SectionHeading";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="w-full lg:w-[70%]">
      <SectionHeading text="Projects" />
      <div className="pt-2 text-black">
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
