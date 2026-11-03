import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface Post {
  slug: string;
  title: string;
  /** Short excerpt shown in listings and used for SEO metadata. */
  description: string;
  category: string;
  /** ISO date (yyyy-mm-dd). */
  date: string;
  author: string;
  /** Estimated read time in minutes. */
  readingTime: number;
  /** Draft posts are excluded from the build entirely. */
  draft: boolean;
  contentHtml?: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");
const WORDS_PER_MINUTE = 200;

/**
 * Normalize any parseable front matter date to an ISO yyyy-mm-dd string.
 * Sorting and display should always go through this, never string comparison.
 */
function normalizeDate(value: unknown): string {
  const parsed = new Date(String(value ?? ""));
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toISOString().slice(0, 10);
}

/** Plain-text excerpt: first content paragraph, markdown stripped, ~180 chars. */
function excerptFrom(content: string, maxLength = 180): string {
  const firstParagraph =
    content
      .split(/\n\s*\n/)
      .map((block) => block.trim())
      .find((block) => block.length > 0) ?? "";
  const text = firstParagraph
    .replace(/[#>*_`~\-]+/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\s+/g, " ");
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).replace(/\s+\S*$/, "")}…`;
}

function readingTimeFor(contentMd: string): number {
  const words = contentMd.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function loadPost(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "Untitled",
    description:
      data.description?.toString().trim() || excerptFrom(content),
    category: data.category || "General",
    date: normalizeDate(data.date),
    author: data.author?.toString() || "Aftab Khalid",
    readingTime: readingTimeFor(content),
    draft: Boolean(data.draft),
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const posts = fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(loadPost)
    .filter((post) => !post.draft);

  // Sort by real date, newest first (ISO strings sort chronologically).
  return posts.sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  );
}

export async function getPostBySlug(
  slug: string
): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Drafts are not published, even if requested directly.
  if (data.draft) return null;

  const processedContent = await remark().use(html).process(content);

  return {
    ...loadPost(`${slug}.md`),
    contentHtml: processedContent.toString(),
  };
}

/** Human-friendly date for display, e.g. "Jan 17, 2021". UTC-stable. */
export function formatPostDate(iso: string): string {
  if (!iso) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}
