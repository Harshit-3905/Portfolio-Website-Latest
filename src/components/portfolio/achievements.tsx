import { Award, Code2, Medal } from "lucide-react";

import { ACHIEVEMENTS, type Achievement } from "@/data/achievements";
import { Panel, PanelHeader, PanelTitle } from "@/components/portfolio/panel";

const ID = "achievements";

const ICONS: Record<
  Achievement["icon"],
  React.ComponentType<{ className?: string }>
> = {
  trophy: Award,
  medal: Medal,
  code: Code2,
};

export function Achievements() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Achievements</a>
        </PanelTitle>
      </PanelHeader>

      <ul className="px-4 pt-4 pb-5">
        {ACHIEVEMENTS.map((achievement) => {
          const Icon = ICONS[achievement.icon];
          const content = (
            <>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-line bg-muted/50 text-muted-foreground">
                <Icon className="size-4" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium leading-tight">
                  {achievement.title}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {achievement.detail}
                </span>
              </span>
            </>
          );

          return (
            <li
              key={achievement.title}
              className="border-b border-line py-3 last:border-b-0 first:pt-0 last:pb-0"
            >
              {achievement.href ? (
                <a
                  href={achievement.href}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-3 rounded-lg transition-colors hover:text-foreground"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-center gap-3">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}
