import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: lastMod, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.url}/contact`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/sitemap`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE.url}/terms`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/accessibility`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.2 },
  ];
  return routes;
}
