import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { listAllRoutableSlugs } from "@/lib/content-store";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];
  for (const item of listAllRoutableSlugs()) {
    routes.push({
      url: `${SITE.url}/${item.slug}`,
      lastModified: item.date ? new Date(item.date) : now,
      changeFrequency: item.type === "page" ? "monthly" : "yearly",
      priority: item.type === "page" ? 0.6 : 0.5,
    });
  }
  return routes;
}
