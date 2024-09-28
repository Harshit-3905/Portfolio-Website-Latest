import {
  ReactIcon,
  ReduxIcon,
  JSIcon,
  TailwindIcon,
  NextJsIcon,
  TypescriptIcon,
  PostmanIcon,
  DockerIcon,
  ExpressIcon,
  NodeIcon,
  MongoIcon,
  AppwriteIcon,
  RedisIcon,
  PostgresqlIcon,
  AWSIcon,
  PrismaIcon,
} from "@/components/miscellaneous/Icons";
import SectionHeading from "./miscellaneous/SectionHeading";

const skills = [
  { name: "JavaScript", icon: JSIcon },
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "Next.js", icon: NextJsIcon },
  { name: "React", icon: ReactIcon },
  { name: "Redux", icon: ReduxIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Postman", icon: PostmanIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Express.js", icon: ExpressIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "MongoDB", icon: MongoIcon },
  { name: "Appwrite", icon: AppwriteIcon },
  { name: "Redis", icon: RedisIcon },
  { name: "PostgreSQL", icon: PostgresqlIcon },
  { name: "AWS", icon: AWSIcon },
  { name: "Prisma", icon: PrismaIcon },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:w-[75%] pb-7 mt-10">
      <SectionHeading text="Skills" />
      <div className="flex flex-wrap gap-5 pt-10 px-10 items-center justify-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col flex-wrap items-center justify-center border border-[#FBFBFB] rounded-[20px] h-[100px] bg-[#1B1B1E] w-[125px] hover:scale-105 transition-transform duration-300"
          >
            <skill.icon />
            <span className="mt-2 text-sm text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
