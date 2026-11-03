import Link from "next/link";
import Navigation from "@/components/navigation/Navigation";
import FooterSection from "@/components/footer/FooterSection";
import { getAllPosts, formatPostDate } from "@/lib/posts";

export const metadata = {
  title: "Writing",
  description:
    "Writing on design, experiments, and AI workflows by Aftab Khalid.",
};

export default function WritingListingPage() {
  const posts = getAllPosts();
  const count = posts.length.toString().padStart(2, "0");

  return (
    <main className="">

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Navigation />
          </div>
        </div>
      </div>

      <div className="container px-30 text-dark pt-120 pb-300">
        {/* Header Section */}
        <section className="row justify-content-center mb-5 pt-4">
          <div className="col-12 col-lg-8 col-md-10">
            <span className="ak-badge">
              Writing / {count}
            </span>
            <h1 className="fs-40 fw-normal mb-0">
              Writing on design, <span className="font-rubik">experiments,</span> and <span className="font-rubik">AI workflows</span>
            </h1>
          </div>
        </section>

        {/* Minimal Listing */}
        <section className="row justify-content-center">
          <div className="col-12 col-lg-8 col-md-10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="row py-4 border-bottom text-decoration-none align-items-center hover-row px-20"
                style={{ transition: "background-color 0.15s ease" }}
              >
                <div className="col-12 col-md-7 mb-2 mb-md-0">
                  <span className="d-block fs-16">{post.title}</span>
                  <span className="d-block fs-14 text-muted mt-1">
                    {post.description}
                  </span>
                </div>
                <div className="col-6 col-md-3 fs-12">
                  {post.category} · {post.readingTime} min read
                </div>
                <div className="col-6 col-md-2 text-end fs-12">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <FooterSection />
    </main>
  );
}
