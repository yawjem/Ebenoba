import type { MetadataRoute } from "next";
import { getNews } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

const PAGES = ["", "/about", "/services", "/marketplace", "/sell", "/partnerships", "/news", "/careers", "/contact", "/faqs", "/privacy", "/terms", "/cookies", "/accessibility"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const news = await getNews();
  return [
    ...PAGES.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...news.map((n) => ({ url: `${SITE_URL}/news/${n.slug}`, lastModified: n.date, priority: 0.6 })),
  ];
}
