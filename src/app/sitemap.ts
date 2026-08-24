import type { MetadataRoute } from "next";

import { USER } from "@/data/user";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: USER.website,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
