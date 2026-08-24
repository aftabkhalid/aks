import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/navigation/Navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="">
      
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
                <span className="fs-14">By {post.author}</span>  - <span className="fs-14"><time>{post.date}</time></span>
              </header>

              <hr className="my-5 opacity-10" />

              {/* Body Content */}
              <div
                className="article-body fs-18 fw-lighter text-secondary"
                style={{ lineHeight: "1.8" }}
                dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
              />
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}