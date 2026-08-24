export type Achievement = {
  title: string;
  detail: string;
  href?: string;
  icon: "trophy" | "code" | "medal";
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "HackerRank Orchestrate Hackathon",
    detail: "Secured Rank 82 out of 1,983 participants · Aug 2026",
    href: "https://www.hackerrank.com/contests/hackerrank-orchestrate-august26/challenges/message-notification-router/leaderboard?username=harshitjoshidev",
    icon: "trophy",
  },
  {
    title: "LeetCode Knight",
    detail: "Max rating 1969 · 1,350+ problems solved",
    href: "https://leetcode.com/Harshit_3905/",
    icon: "medal",
  },
  {
    title: "Codeforces Specialist",
    detail: "Max rating 1407 · 500+ problems solved",
    href: "https://codeforces.com/profile/Harshit_3905",
    icon: "code",
  },
];
