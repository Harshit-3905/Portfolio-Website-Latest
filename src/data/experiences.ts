export type ExperiencePosition = {
  id: string;
  title: string;
  employmentType: string;
  period: { start: string; end?: string };
  bullets: string[];
  skills: string[];
};

export type Experience = {
  id: string;
  company: string;
  companyWebsite?: string;
  location: string;
  positions: ExperiencePosition[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "koinx",
    company: "KoinX",
    companyWebsite: "https://www.koinx.com",
    location: "Remote",
    positions: [
      {
        id: "koinx-swe",
        title: "Software Engineer",
        employmentType: "Full-time",
        period: { start: "Jul 2025" },
        bullets: [
          "Built an automation pipeline to detect invalid rows from exchange file uploads, then used the Cursor SDK to generate fix pull requests, reducing manual data remediation.",
          "Refactored the Bybit integration pipeline with failure checkpointing and sequential processing, cutting DB calls by 93% and eliminating race conditions on retries.",
          "Streamlined price fetching using bulk cache reads/writes, reducing O(N) database queries to chunked operations and improving performance by 75%.",
        ],
        skills: ["Node.js", "Express.js", "MongoDB", "Redis", "NATS", "Docker"],
      },
      {
        id: "koinx-intern",
        title: "Backend Engineering Intern",
        employmentType: "Internship",
        period: { start: "Feb 2025", end: "Jun 2025" },
        bullets: [
          "Integrated 25+ exchange/blockchain APIs (Noves, Tatum, Coinbase, Kraken, etc.), expanding supported platforms for transaction ingestion.",
          "Designed a generic transaction mapper, cutting duplicated integration code by 60% and reducing time to add new exchange support.",
        ],
        skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      },
    ],
  },
  {
    id: "vexio",
    company: "Vexio",
    location: "Remote",
    positions: [
      {
        id: "vexio-intern",
        title: "Frontend Engineering Intern",
        employmentType: "Internship",
        period: { start: "Oct 2024", end: "Jan 2025" },
        bullets: [
          "Implemented the full authentication flow and end-to-end private beta, invite, and onboarding flows, enabling secure user access and faster activation.",
          "Built and enhanced responsive UI components and client-side state management, improving usability and interaction responsiveness.",
        ],
        skills: ["Next.js", "TailwindCSS", "Zustand", "Framer Motion"],
      },
    ],
  },
];
