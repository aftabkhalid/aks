import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/seo";

// Static export requires metadata routes to be forced static.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/writing", "/resume"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/writing/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }));

  return [...staticRoutes, ...posts];
}
