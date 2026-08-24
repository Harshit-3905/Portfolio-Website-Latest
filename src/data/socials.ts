export type Social = {
  name: string;
  handle: string;
  href: string;
  icon: "x" | "github" | "linkedin" | "leetcode";
};

export const SOCIALS: Social[] = [
  {
    name: "LinkedIn",
    handle: "harshit-joshi05",
    href: "https://www.linkedin.com/in/harshit-joshi05/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    handle: "Harshit-3905",
    href: "https://github.com/Harshit-3905",
    icon: "github",
  },
  {
    name: "X (formerly Twitter)",
    handle: "@Harshit3905",
    href: "https://twitter.com/Harshit3905",
    icon: "x",
  },
  {
    name: "LeetCode",
    handle: "Harshit_3905 · Knight",
    href: "https://leetcode.com/Harshit_3905/",
    icon: "leetcode",
  },
];
