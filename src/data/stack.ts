import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiFramer,
  SiGithubactions,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiNatsdotio,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiOpenjdk,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Database, KeyRound, Zap } from "lucide-react";

export type StackItem = {
  title: string;
  href?: string;
  icon: IconType | typeof Database;
};

export type StackCategory = {
  category: string;
  items: StackItem[];
};

export const STACK: StackCategory[] = [
  {
    category: "Languages",
    items: [
      { title: "Java", icon: SiOpenjdk },
      { title: "JavaScript", icon: SiJavascript },
      { title: "TypeScript", icon: SiTypescript },
      { title: "SQL", icon: Database },
    ],
  },
  {
    category: "Frontend",
    items: [
      { title: "React.js", icon: SiReact },
      { title: "Next.js", icon: SiNextdotjs },
      { title: "Tailwind CSS", icon: SiTailwindcss },
      { title: "Zustand", icon: Zap },
      { title: "Framer Motion", icon: SiFramer },
      { title: "shadcn/ui", icon: SiShadcnui },
    ],
  },
  {
    category: "Backend",
    items: [
      { title: "Node.js", icon: SiNodedotjs },
      { title: "Express.js", icon: SiExpress },
      { title: "REST APIs", icon: KeyRound },
      { title: "NATS", icon: SiNatsdotio },
      { title: "Auth.js", icon: KeyRound },
      { title: "Drizzle ORM", icon: SiDrizzle },
    ],
  },
  {
    category: "Databases",
    items: [
      { title: "MongoDB", icon: SiMongodb },
      { title: "PostgreSQL", icon: SiPostgresql },
      { title: "Redis", icon: SiRedis },
      { title: "Qdrant", icon: Database },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { title: "OpenAI API", icon: SiOpenai },
      { title: "LangChain", icon: SiLangchain },
      { title: "RAG", icon: Database },
    ],
  },
  {
    category: "Cloud / DevOps",
    items: [
      { title: "AWS (S3, CloudFront, EC2)", icon: SiAmazonwebservices },
      { title: "Docker", icon: SiDocker },
      { title: "GitHub Actions", icon: SiGithubactions },
    ],
  },
];
