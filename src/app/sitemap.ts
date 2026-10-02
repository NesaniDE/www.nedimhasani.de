import type { MetadataRoute } from "next";

const SITE_URL = "https://www.nedimhasani.de";

/**
 * Each page with the date of its last content change — deliberately not the
 * build time. Bing relies heavily on lastmod to schedule recrawls and stops
 * trusting it when it jumps to "today" on every deploy. /api/indexnow also
 * only submits pages whose date falls within the last few days.
 *
 * When a page's content changes, bump `updated` to that day.
 * /bachelorarbeit is noindex and stays out of the sitemap.
 */
const PAGES: {
  path: string;
  updated: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", updated: "2026-09-02", changeFrequency: "monthly", priority: 1 },
  { path: "/imprint", updated: "2026-05-01", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", updated: "2026-05-01", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: new Date(`${p.updated}T00:00:00.000Z`),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
