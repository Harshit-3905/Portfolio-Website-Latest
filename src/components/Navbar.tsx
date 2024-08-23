import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaHome, FaUser, FaCode } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <FaHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "About",
      icon: (
        <FaUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Skills",
      icon: (
        <FaCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Projects",
      icon: (
        <AiOutlineFundProjectionScreen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Contact",
      icon: (
        <IoCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];

  return (
    <div className="fixed bottom-5 flex items-center justify-between p-5 z-20 h-[10%]">
      <FloatingDock items={links} />
    </div>
  );
}

export default Navbar;
