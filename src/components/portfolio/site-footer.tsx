import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { USER } from "@/data/user";
import { BrandMark } from "@/components/portfolio/brand-mark";

export function SiteFooter() {
  return (
    <footer className="screen-line-top border-x border-line">
      <div className="flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div>
          <p>
            <BrandMark />
          </p>
          <p className="mt-0.5 text-sm text-muted-foreground">
            © {new Date().getFullYear()} · Built with Next.js & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-1">
          {[
            {
              href: `https://github.com/${USER.githubUsername}`,
              label: "GitHub",
              Icon: FaGithub,
            },
            {
              href: "https://www.linkedin.com/in/harshit-joshi05/",
              label: "LinkedIn",
              Icon: FaLinkedin,
            },
            {
              href: "https://twitter.com/Harshit3905",
              label: "X",
              Icon: FaXTwitter,
            },
            { href: `mailto:${USER.email}`, label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              aria-label={label}
              className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
