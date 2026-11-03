import type { MetadataRoute } from "next";

// Static export requires metadata routes to be forced static.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.aftabkhalid.com/sitemap.xml",
  };
}
