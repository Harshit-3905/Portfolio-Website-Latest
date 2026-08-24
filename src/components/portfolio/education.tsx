import { GraduationCap } from "lucide-react";

import { EDUCATION, type Education } from "@/data/education";
import { Panel, PanelHeader, PanelTitle } from "@/components/portfolio/panel";
import { IconTile, Tag } from "@/components/ui/tag";

const ID = "education";

function EducationItem({ item }: { item: Education }) {
  return (
    <div
      id={`education-${item.id}`}
      className="relative p-4 before:absolute before:left-7 before:top-4 before:h-[calc(100%-1rem)] before:w-px before:bg-border"
    >
      <div className="relative mb-1 flex items-start gap-3 text-base">
        <IconTile>
          <GraduationCap />
        </IconTile>
        <h3 className="flex-1 pt-0.5 font-medium text-balance">
          {item.school}
        </h3>
      </div>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pl-9 text-sm text-muted-foreground">
        <span className="tabular-nums">
          {item.period.start} — {item.period.end}
        </span>
        <span aria-hidden>·</span>
        <span>
          {item.degree} in {item.fieldOfStudy}
        </span>
        <span aria-hidden>·</span>
        <span>{item.location}</span>
      </div>

      <ul className="flex flex-wrap gap-1.5 pl-9 pt-3">
        <li>
          <Tag>{item.score}</Tag>
        </li>
      </ul>
    </div>
  );
}

export function EducationSection() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Education</a>
        </PanelTitle>
      </PanelHeader>

      {EDUCATION.map((item) => (
        <EducationItem key={item.id} item={item} />
      ))}
    </Panel>
  );
}
