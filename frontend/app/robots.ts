import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const isStaging = process.env.NEXT_PUBLIC_SITE_ENV === "staging";

  if (isStaging) {
    return {
      rules: [
        { userAgent: "*", disallow: "/" },
        { userAgent: "Googlebot", disallow: "/" },
        { userAgent: "Googlebot-Image", disallow: "/" },
        { userAgent: "Googlebot-News", disallow: "/" },
        { userAgent: "Googlebot-Video", disallow: "/" },
        { userAgent: "Bingbot", disallow: "/" },
        { userAgent: "Slurp", disallow: "/" },
        { userAgent: "DuckDuckBot", disallow: "/" },
        { userAgent: "Baiduspider", disallow: "/" },
        { userAgent: "YandexBot", disallow: "/" },
        { userAgent: "facebookexternalhit", disallow: "/" },
        { userAgent: "Twitterbot", disallow: "/" },
        { userAgent: "LinkedInBot", disallow: "/" },
        { userAgent: "GPTBot", disallow: "/" },
        { userAgent: "ChatGPT-User", disallow: "/" },
        { userAgent: "CCBot", disallow: "/" },
        { userAgent: "anthropic-ai", disallow: "/" },
        { userAgent: "ClaudeBot", disallow: "/" },
        { userAgent: "Bytespider", disallow: "/" },
      ],
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://thegivingcircle.in/sitemap.xml",
  };
}
