import GitHubCalendar from "react-github-calendar";
import { FC } from "react";

const Github: FC = () => {
  return (
    <div id="about" className="w-full lg:w-[75%] pt-10">
      <h2 className="py-10 text-[#F56E0F] text-3xl font-bold underline underline-offset-5 text-center">
        My Github Contributions
      </h2>
      <div className="flex justify-center">
        <GitHubCalendar username="Harshit-3905" fontSize={20} throwOnError />
      </div>
    </div>
  );
};

export default Github;
