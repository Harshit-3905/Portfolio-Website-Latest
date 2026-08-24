import { STACK } from "@/data/stack";
import { Panel, PanelHeader, PanelTitle } from "@/components/portfolio/panel";

const ID = "stack";

export function TechStack() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Stack</a>
        </PanelTitle>
      </PanelHeader>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-48 -z-[1] hidden w-px border-r border-dashed border-line sm:block"
          aria-hidden
        />

        {STACK.map(({ category, items }, index) => {
          const categoryId = `${ID}-${category
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")}`;

          return (
            <div
              key={category}
              className="grid items-start gap-y-2 border-b border-line py-4 last:border-b-0 sm:grid-cols-[12rem_1fr]"
            >
              <div id={categoryId} className="pl-4 text-sm leading-6">
                <span
                  className="mr-1.5 font-mono text-muted-foreground/80 select-none"
                  aria-hidden
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {category}
              </div>

              <ul
                aria-labelledby={categoryId}
                className="flex flex-wrap gap-1.5 px-4"
              >
                {items.map(({ title, icon: Icon }) => (
                  <li key={title}>
                    <span className="flex h-6 items-center justify-center gap-1.5 rounded-full bg-muted/80 px-2 font-mono text-xs [&_svg]:shrink-0">
                      <Icon className="pointer-events-none size-3.5 shrink-0 text-muted-foreground/80" />
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
