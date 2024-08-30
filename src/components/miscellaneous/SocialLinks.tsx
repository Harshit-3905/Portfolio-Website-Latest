import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Social from "@/components/miscellaneous/Social";

const SocialLinks = () => {
  return (
    <div className="flex pt-5 gap-3 justify-center">
      <Link
        href="https://www.linkedin.com/in/harshit-joshi-40953321b/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Social icon={FaLinkedin} />
      </Link>
      <Link
        href="https://github.com/Harshit-3905"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Social icon={FaGithub} />
      </Link>
      <Link
        href="https://twitter.com/Harshit3905"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <Social icon={FaTwitter} />
      </Link>
      <Link href="#contact" aria-label="Contact">
        <Social icon={IoIosMail} />
      </Link>
    </div>
  );
};

export default SocialLinks;
