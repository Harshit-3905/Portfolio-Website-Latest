import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { PROJECTS, type Project } from "@/data/projects";
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/portfolio/panel";
import {
  Collapsible,
  CollapsibleChevronsUpDownIcon,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { IconTile, Tag } from "@/components/ui/tag";

const ID = "projects";

function ProjectLogo({ project }: { project: Project }) {
  if (project.logo) {
    return (
      <Image
        src={project.logo}
        alt=""
        width={40}
        height={40}
        className="size-10 rounded-md object-cover"
      />
    );
  }

  return (
    <IconTile className="size-10 rounded-md text-sm [&_svg]:size-5">
      <span className="font-mono text-xs font-medium">
        {project.title.slice(0, 2).toUpperCase()}
      </span>
    </IconTile>
  );
}

function ProjectItem({
  project,
  defaultOpen,
}: {
  project: Project;
  defaultOpen?: boolean;
}) {
  return (
    <Collapsible
      defaultOpen={defaultOpen}
      className="group/collapsible screen-line-bottom last:after:content-none"
    >
      <div className="group/project flex items-center hover:bg-accent/40">
        <div className="mx-4 flex size-10 shrink-0 select-none items-center justify-center text-muted-foreground">
          <ProjectLogo project={project} />
        </div>

        <div className="flex min-w-0 flex-1 border-l border-dashed border-line">
          <CollapsibleTrigger className="min-w-0 flex-1 p-4 pr-2 text-left outline-none transition-colors hover:bg-accent/40 focus-visible:ring-1 focus-visible:ring-ring">
            <h3 className="mb-1 font-medium leading-snug text-balance">
              {project.title}
            </h3>

            <p className="truncate text-sm text-muted-foreground">
              {project.summary}
            </p>
          </CollapsibleTrigger>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener"
              aria-label={`${project.title} on GitHub`}
              className="my-auto mr-1 flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <FaGithub className="size-4" />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener"
              aria-label={`Open ${project.title}`}
              className="my-auto mr-1 flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <ExternalLink className="size-4" />
            </a>
          )}

          <CollapsibleTrigger className="my-auto mr-3 flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring [&_svg]:size-4">
            <CollapsibleChevronsUpDownIcon />
          </CollapsibleTrigger>
        </div>
      </div>

      <CollapsibleContent>
        <div className="space-y-4 border-t border-line p-4 pl-[5.5rem]">
          <ul className="space-y-2">
            {project.description.map((line, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                <span
                  className="mt-[8px] size-1 shrink-0 rounded-full bg-muted-foreground"
                  aria-hidden
                />
                <span className="text-foreground/90">{line}</span>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-1.5">
            {project.skills.map((skill) => (
              <li key={skill}>
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function Projects() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Projects</a>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div>
        {PROJECTS.map((project, index) => (
          <ProjectItem
            key={project.title}
            project={project}
            defaultOpen={index < 2}
          />
        ))}
      </div>
    </Panel>
  );
}
