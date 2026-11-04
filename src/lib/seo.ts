import type { Metadata } from "next";

export const SITE_URL = "https://www.aftabkhalid.com";
export const SITE_NAME = "Aftab Khalid";

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Aftab Khalid — UX Designer",
};

/**
 * Consistent per-page metadata with canonical URL and social previews.
 * `absoluteTitle` bypasses the root title template (used by the home page).
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
