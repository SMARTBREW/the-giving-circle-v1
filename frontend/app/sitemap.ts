import type { MetadataRoute } from "next";
import { LIVE_CAUSES, SITE } from "@/constants";
import { BLOG_ARTICLES } from "@/constants/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/causes",
    "/stories",
    "/blog",
    "/champion",
    "/champion/apply",
    "/partner",
    "/volunteer",
    "/faqs",
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "/faqs" ? "weekly" : "monthly",
    priority: path === "" || path === "/faqs" ? 0.9 : 0.7,
  }));

  const causes = LIVE_CAUSES.map((cause) => ({
    url: `${base}/causes/${cause.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogs = BLOG_ARTICLES.map((article) => ({
    url: `${base}/blog/${article.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...causes, ...blogs];
}
