import { USER } from "@/data/user";
import { Panel, PanelHeader, PanelTitle } from "@/components/portfolio/panel";

const ABOUT_BULLETS = [
  "Software Engineer at KoinX, shipping backend systems for a crypto tax platform used by thousands of investors.",
  "Built a Cursor SDK pipeline that detects bad exchange uploads and opens fix PRs — plus 25+ exchange and blockchain integrations.",
  "I ship full-stack products end to end, from RAG chat with cited answers to video APIs serving aggregated data at scale.",
];

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>
          <a href="#about">About</a>
        </PanelTitle>
      </PanelHeader>

      <div className="px-4 pt-4 pb-4">
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          Full-stack engineer with 1+ years of experience building and shipping
          scalable, production-grade software.
        </p>

        <ul className="mt-4 space-y-3">
          {ABOUT_BULLETS.map((bullet, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
              <span
                className="mt-[9px] size-1 shrink-0 rounded-full bg-muted-foreground"
                aria-hidden
              />
              <span className="text-foreground/90">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}
