import type { StaticImageData } from "next/image";
import BinaryBlogsLogo from "@/assets/Projects/BinaryBlogs.webp";
import PotterHeadGPTLogo from "@/assets/Projects/PotterHeadGPT.webp";
import VideoTubeLogo from "@/assets/Projects/VideoTube.webp";

export type Project = {
  title: string;
  summary: string;
  description: string[];
  skills: string[];
  period: { start: string; end?: string };
  logo?: StaticImageData;
  github?: string;
  live?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "PotterHeadGPT",
    summary: "RAG chat with cited answers from the books",
    description: [
      "Multi-user RAG chat app delivering cited answers with grounded refusals, built with Next.js, LangChain, OpenAI, PostgreSQL/Drizzle, and Qdrant.",
      "Auth.js + Google OAuth for authentication and cross-device history merge.",
      "Rate limiting, idempotent ingest CLI, and a Vitest/Playwright/CI eval suite — 90% retrieval hit rate, 90% citation compliance, and 92% refusal accuracy.",
    ],
    skills: [
      "Next.js",
      "LangChain",
      "OpenAI API",
      "PostgreSQL",
      "Drizzle ORM",
      "Qdrant",
      "Auth.js",
      "Vitest",
      "Playwright",
    ],
    period: { start: "2025" },
    logo: PotterHeadGPTLogo,
    github: "https://github.com/Harshit-3905/PotterHeadGPT",
    live: "https://potterhead-gpt.harshitjoshi.dev",
  },
  {
    title: "BinaryBlogs",
    summary: "Blogging platform on S3 + CloudFront",
    description: [
      "Blogging platform built with React.js, Tailwind CSS, and Appwrite, using code splitting to improve load performance.",
      "AWS S3 and CloudFront for scalable hosting and efficient content delivery.",
      "Automated deployment and cache invalidation via GitHub Actions to ensure updated content access.",
    ],
    skills: [
      "React.js",
      "TailwindCSS",
      "Appwrite",
      "AWS S3",
      "CloudFront",
      "GitHub Actions",
    ],
    period: { start: "2024" },
    logo: BinaryBlogsLogo,
    github: "https://github.com/Harshit-3905/Binary-Blogs",
    live: "https://binary-blogs.harshitjoshi.dev",
  },
  {
    title: "VideoTube",
    summary: "Video API with JWT, Redis, and Docker",
    description: [
      "Video sharing backend with Node.js, Express.js, and MongoDB, including JWT auth (access + refresh tokens) and aggregation pipelines for data queries.",
      "Improved responsiveness with Redis caching and containerized the service with Docker for consistent deployments.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "Redis", "JWT", "Docker"],
    period: { start: "2024" },
    logo: VideoTubeLogo,
    github: "https://github.com/Harshit-3905/VideoTube-Backend",
  },
];
