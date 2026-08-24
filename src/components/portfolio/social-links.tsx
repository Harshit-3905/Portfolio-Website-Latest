import { ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import { SOCIALS, type Social } from "@/data/socials";
import { Panel, PanelContent } from "@/components/portfolio/panel";

const ICONS: Record<
  Social["icon"],
  React.ComponentType<{ className?: string }>
> = {
  x: FaXTwitter,
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
};

export function SocialLinks() {
  return (
    <Panel className="screen-line-top-none">
      <h2 className="sr-only">Social Links</h2>

      <PanelContent className="grid gap-2 sm:grid-cols-2">
        {SOCIALS.map((social) => {
          const Icon = ICONS[social.icon];

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-3 rounded-lg border border-line px-3 py-2.5 transition-colors hover:bg-accent/60"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-line bg-muted/50 text-muted-foreground transition-colors group-hover:text-foreground [&_svg]:size-4">
                <Icon className="size-4" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium leading-tight">
                  {social.name}
                </span>
                <span className="block truncate text-xs text-muted-foreground">
                  {social.handle}
                </span>
              </span>

              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          );
        })}
      </PanelContent>
    </Panel>
  );
}
