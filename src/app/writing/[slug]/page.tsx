import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/navigation/Navigation";
import ArticleBookingLinks from "@/components/book-call/ArticleBookingLinks";
import { getAllPosts, getPostBySlug, formatPostDate } from "@/lib/posts";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  const path = `/writing/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: path,
      siteName: SITE_NAME,
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: [{ ...OG_IMAGE, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [OG_IMAGE.url],
    },
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Person",
      name: "Aftab Khalid",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/writing/${post.slug}`,
    },
    image: `${SITE_URL}${OG_IMAGE.url}`,
    articleSection: post.category,
    inLanguage: "en",
  };

  return (
    <main className="">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Navigation />
          </div>
        </div>
      </div>

      <div className="container px-30">
        <div className="row">
          <div className="col-12">
            <article className="py-160 mx-auto" style={{ maxWidth: "680px" }}>
              {/* Navigation back */}
              {/* <Link
                href="/writing"
                className="text-secondary text-decoration-none small d-inline-block mb-5"
              >
                ← Back to Writing
              </Link> */}

              {/* Article Meta Header */}
              <header className="mb-5">
                <div className="d-flex align-items-center gap-3 text-secondary small mb-3">
                  <span className="ak-badge px-2 py-1">
                    / {post.category}
                  </span>
                </div>
                <h1 className="display-4 fw-normal lh-sm mb-0">{post.title}</h1>
                <span className="fs-14">By {post.author}</span>
                {" - "}
                <span className="fs-14">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                </span>
                {" · "}
                <span className="fs-14">{post.readingTime} min read</span>
              </header>

              <hr className="my-5 opacity-10" />

              {/* Body Content */}
              <ArticleBookingLinks
                className="article-body fs-18 fw-lighter text-secondary"
                style={{ lineHeight: "1.8" }}
                html={post.contentHtml || ""}
              />
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
