import { Briefcase, MapPin } from "lucide-react";

import { USER } from "@/data/user";
import { Panel, PanelContent } from "@/components/portfolio/panel";
import { LocalTimeItem } from "@/components/portfolio/local-time-item";
import { EmailItem } from "@/components/portfolio/email-item";

function IntroItem({
  icon,
  children,
  href,
  ariaLabel,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  ariaLabel?: string;
}) {
  const content = (
    <>
      <span className="shrink-0 text-muted-foreground [&_svg]:size-4">
        {icon}
      </span>
      <span className="truncate">{children}</span>
    </>
  );

  return (
    <div className="flex min-w-0 items-center gap-2.5 text-sm">
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener"
          aria-label={ariaLabel}
          className="flex min-w-0 items-center gap-2.5 transition-colors hover:text-foreground [&>span:first-child]:text-muted-foreground"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

export function Overview() {
  return (
    <Panel className="relative screen-line-bottom-none screen-line-top-none">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
        <IntroItem
          icon={<Briefcase />}
          href={USER.companyHref}
          ariaLabel={`${USER.role} at ${USER.company}`}
        >
          {USER.role} @ {USER.company}
        </IntroItem>

        <EmailItem />

        <IntroItem
          icon={<MapPin />}
          href={USER.locationHref}
          ariaLabel="Location"
        >
          {USER.location}
        </IntroItem>

        <LocalTimeItem timeZone={USER.timeZone} />
      </PanelContent>

      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-[1] hidden w-px -translate-x-2 border-r border-dashed border-line sm:block"
        aria-hidden
      />
    </Panel>
  );
}
