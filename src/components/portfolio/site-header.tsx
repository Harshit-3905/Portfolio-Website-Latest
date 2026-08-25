"use client";

import { useEffect, useState } from "react";
import { Github } from "lucide-react";

import { USER } from "@/data/user";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import { BrandMark } from "@/components/portfolio/brand-mark";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#about", id: "about", label: "About" },
  { href: "#stack", id: "stack", label: "Stack" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#education", id: "education", label: "Education" },
  { href: "#projects", id: "projects", label: "Projects" },
] as const;

export function SiteHeader() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = NAV.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-3xl items-center gap-3 border-x border-line px-4">
        <a href="#" className="shrink-0 text-foreground" aria-label="Home">
          <BrandMark />
        </a>

        <nav
          aria-label="Sections"
          className="hidden min-w-0 flex-1 items-center justify-center gap-3 sm:flex"
        >
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "shrink-0 px-1 py-1 text-sm font-medium tracking-wide transition-colors",
                activeId === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1 sm:ml-0">
          <a
            href={`https://github.com/${USER.githubUsername}`}
            target="_blank"
            rel="noopener"
            aria-label="GitHub profile"
            className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <Github className="size-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
