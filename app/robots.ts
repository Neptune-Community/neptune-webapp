import type { MetadataRoute } from "next";

/**
 * Robots.txt Generator
 *
 * This generates the robots.txt file for search engine crawlers.
 * According to Next.js App Router conventions, this file:
 * - Must be named "robots.ts"
 * - Should export a default function that returns MetadataRoute.Robots
 * - Can be placed at any route segment level
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard/", "/admin/", "/_next/", "/private/"],
    },
    sitemap: `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/sitemap.xml`,
  };
}
