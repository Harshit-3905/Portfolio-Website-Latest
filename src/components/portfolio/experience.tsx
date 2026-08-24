import { Briefcase } from "lucide-react";

import {
  EXPERIENCES,
  type Experience,
  type ExperiencePosition,
} from "@/data/experiences";
import { Panel, PanelHeader, PanelTitle } from "@/components/portfolio/panel";
import {
  Collapsible,
  CollapsibleChevronsUpDownIcon,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { IconTile, Tag } from "@/components/ui/tag";

const ID = "experience";

function formatDuration(start: string, end?: string): string {
  const parse = (s: string) => {
    const [month, year] = s.split(" ");
    return new Date(
      parseInt(year, 10),
      new Date(`${month} 1, 2000`).getMonth(),
    );
  };

  const startDate = parse(start);
  const endDate = end ? parse(end) : new Date();

  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;

  if (totalMonths <= 0) return "";

  if (totalMonths < 12) return `${totalMonths}m`;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return months === 0 ? `${years}y` : `${years}y ${months}m`;
}

function Period({ start, end }: { start: string; end?: string }) {
  const isOngoing = !end;

  return (
    <span className="flex items-center gap-1 tabular-nums">
      <span>{start}</span>
      <span className="font-mono">—</span>
      {isOngoing ? (
        <span className="relative flex size-2.5 items-center justify-center">
          <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-info opacity-50" />
          <span className="relative inline-flex size-1.5 rounded-full bg-info" />
        </span>
      ) : (
        <span>{end}</span>
      )}
    </span>
  );
}

function PositionItem({
  position,
  defaultOpen,
}: {
  position: ExperiencePosition;
  defaultOpen?: boolean;
}) {
  const duration = formatDuration(position.period.start, position.period.end);

  return (
    <Collapsible
      defaultOpen={defaultOpen}
      className="group/collapsible relative"
    >
      <div className="pointer-events-none absolute bottom-0 left-3 hidden size-4 bg-background group-last/collapsible:flex">
        <span className="size-full -translate-y-2 rounded-bl-sm border-b border-l border-line" />
      </div>

      <CollapsibleTrigger
        className={
          "group block w-full text-left outline-none " +
          "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-[1] before:rounded-lg before:transition-colors hover:before:bg-accent/60 focus-visible:before:ring-1 focus-visible:before:ring-ring"
        }
      >
        <div className="relative z-[1] mb-1 flex items-start gap-3 text-base">
          <IconTile>
            <Briefcase />
          </IconTile>

          <h4 className="flex-1 pt-0.5 font-medium text-balance">
            {position.title}
          </h4>

          <div className="shrink-0 pt-1 text-muted-foreground [&_svg]:size-4">
            <CollapsibleChevronsUpDownIcon />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pl-9 text-sm text-muted-foreground">
          <span>{position.employmentType}</span>
          <span aria-hidden>·</span>
          <Period start={position.period.start} end={position.period.end} />
          {duration && (
            <>
              <span aria-hidden>·</span>
              <span className="tabular-nums">{duration}</span>
            </>
          )}
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <ul className="space-y-2 pl-9 pr-2 pt-3">
          {position.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
              <span
                className="mt-[8px] size-1 shrink-0 rounded-full bg-muted-foreground"
                aria-hidden
              />
              <span className="text-foreground/90">{bullet}</span>
            </li>
          ))}
        </ul>
      </CollapsibleContent>

      <ul className="flex flex-wrap gap-1.5 pl-9 pt-3">
        {position.skills.map((skill) => (
          <li key={skill}>
            <Tag>{skill}</Tag>
          </li>
        ))}
      </ul>
    </Collapsible>
  );
}

function CompanyItem({
  experience,
  expandFirst,
}: {
  experience: Experience;
  expandFirst?: boolean;
}) {
  return (
    <div
      id={`experience-${experience.id}`}
      className="screen-line-bottom space-y-4 py-4 first:pt-0 last:pb-0 last:after:content-none"
    >
      <div className="flex items-start justify-between gap-3 pl-4 pr-4 sm:items-center sm:pl-4">
        <h3 className="text-xl font-medium tracking-tight">
          {experience.companyWebsite ? (
            <a
              href={experience.companyWebsite}
              target="_blank"
              rel="noopener"
              className="link-underline decoration-line"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </h3>

        <p className="whitespace-nowrap text-sm text-muted-foreground">
          {experience.location}
        </p>
      </div>

      <div className="relative space-y-6 pl-4 pr-4 before:absolute before:left-7 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position, index) => (
          <PositionItem
            key={position.id}
            position={position}
            defaultOpen={expandFirst && index === 0}
          />
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Experience</a>
        </PanelTitle>
      </PanelHeader>

      <div className="px-0 pt-3 pb-2">
        {EXPERIENCES.map((experience, index) => (
          <CompanyItem
            key={experience.id}
            experience={experience}
            expandFirst={index === 0}
          />
        ))}
      </div>
    </Panel>
  );
}
