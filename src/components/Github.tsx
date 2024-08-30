import GitHubCalendar from "react-github-calendar";
import { FC } from "react";
import SectionHeading from "./miscellaneous/SectionHeading";

const Github: FC = () => {
  return (
    <div id="about" className="w-[80%] lg:w-[75%] pt-10">
      <SectionHeading text="Github Contributions" />
      <div className="flex justify-center pt-8">
        <GitHubCalendar username="Harshit-3905" fontSize={20} throwOnError />
      </div>
    </div>
  );
};

export default Github;
