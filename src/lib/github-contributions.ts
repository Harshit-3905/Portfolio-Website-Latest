import { unstable_cache } from "next/cache";

import { USER } from "@/data/user";

export type Activity = { date: string; count: number; level: number };

export const getGitHubContributions = unstable_cache(
  async (): Promise<Activity[]> => {
    try {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${USER.githubUsername}?y=last`,
        { next: { revalidate: 86400 } },
      );
      if (!res.ok) return [];
      const data = (await res.json()) as { contributions?: Activity[] };
      return data.contributions ?? [];
    } catch {
      return [];
    }
  },
  ["github-contributions", USER.githubUsername],
  { revalidate: 86400 },
);
