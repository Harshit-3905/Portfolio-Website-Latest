import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
import SocialLinks from "./miscellaneous/SocialLinks";

const Footer = () => {
  const hover = "text-highlightedtext";

  return (
    <div className="w-full lg:w-[80%] pt-20 pb-32 flex flex-col justify-center items-center">
      <div className="text-highlightedtext text-2xl font-medium">Harshit Joshi</div>
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
      <SocialLinks />
      <div className="pt-10 flex items-center gap-2">
        <FaRegCopyright />
        <div className="text-sm">2024 Harshit Joshi. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
