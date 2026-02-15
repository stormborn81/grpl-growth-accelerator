import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

// Featured posts - update these slugs to match your most-viewed articles
const FEATURED_SLUGS = [
  "fractional-cmo-australia-guide",
  "fractional-cmo-cost-australia",
  "fractional-cmo-vs-marketing-agency",
];

const Insights = () => {
  const featured = FEATURED_SLUGS.map((slug) =>
    blogPosts.find((p) => p.slug === slug)
  ).filter(Boolean);

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-medium tracking-widest text-accent uppercase mb-3">
                Insights
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Latest Thinking
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((post) => (
              <Link
                key={post!.slug}
                to={`/blog/${post!.slug}`}
                className="group block rounded-lg border border-border bg-background p-6 hover:border-accent/30 transition-colors"
              >
                <p className="text-xs text-muted-foreground mb-3">
                  {new Date(post!.date).toLocaleDateString("en-AU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  · {post!.readingTime}
                </p>
                <h3 className="text-lg font-bold tracking-tight mb-3 group-hover:text-accent transition-colors leading-snug">
                  {post!.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light line-clamp-3 mb-4">
                  {post!.excerpt}
                </p>
                <span className="text-sm font-medium text-accent">
                  Read more →
                </span>
              </Link>
            ))}
          </div>

          <Link
            to="/blog"
            className="sm:hidden inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline mt-8"
          >
            View all insights <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights;
