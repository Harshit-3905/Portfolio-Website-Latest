import {
  FaRegCopyright,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Social from "./miscellaneous/Social";
import Link from "next/link";

const Footer = () => {
  const hover = "text-[#F56E0F]";

  return (
    <div className="w-full lg:w-[80%] pt-20 pb-32 flex flex-col justify-center items-center">
      <div className="text-[#F56E0F] text-2xl font-medium">Harshit Joshi</div>
      <div className="hidden md:flex lg:flex justify-between gap-5 pt-5">
        <Link href="#home" className={`text-lg font-normal hover:${hover}`}>
          Home
        </Link>
        <Link href="#about" className={`text-lg font-normal hover:${hover}`}>
          About
        </Link>
        <Link href="#skills" className={`text-lg font-normal hover:${hover}`}>
          Skills
        </Link>
        <Link href="#projects" className={`text-lg font-normal hover:${hover}`}>
          Projects
        </Link>
        <Link href="#contact" className={`text-lg font-normal hover:${hover}`}>
          Contact
        </Link>
      </div>
      <div className="pt-5 flex gap-3">
        <a
          href="https://www.linkedin.com/in/harshit-joshi-40953321b/"
          className="hover:text-[#F56E0F]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Social icon={FaLinkedin} />
        </a>
        <a
          href="https://github.com/Harshit-3905"
          className="hover:text-[#F56E0F]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Social icon={FaGithub} />
        </a>
        <a
          href="https://twitter.com/Harshit3905"
          className="hover:text-[#F56E0F]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Social icon={FaTwitter} />
        </a>
        <a href="#contact" className="hover:text-[#F56E0F]">
          <Social icon={IoIosMail} />
        </a>
      </div>
      <div className="pt-10 flex items-center gap-2">
        <FaRegCopyright />
        <div className="text-sm">2024 Harshit Joshi. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
