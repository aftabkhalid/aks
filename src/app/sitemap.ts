import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

// Static export requires metadata routes to be forced static.
export const dynamic = "force-static";

const BASE_URL = "https://www.aftabkhalid.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/writing", "/resume"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${BASE_URL}/writing/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }));

  return [...staticRoutes, ...posts];
}
