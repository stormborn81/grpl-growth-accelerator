import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { blogPosts } from "@/data/blogPosts";

const blogJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "GRPL Blog — Marketing Leadership Insights",
    description: "Expert insights on fractional CMO services, growth strategy, and marketing leadership for ANZ businesses.",
    url: "https://www.grpl.com.au/blog",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grpl.com.au/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.grpl.com.au/blog" },
    ],
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog — Marketing Leadership Insights"
        description="Expert insights on fractional CMO services, growth strategy, and marketing leadership for Australian businesses."
        canonical="https://www.grpl.com.au/blog"
        jsonLd={blogJsonLd}
      />
      <Header />
      <main className="pt-14">
        <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Blog</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground font-light mb-12 max-w-2xl">
              Expert insights on fractional CMO services, growth strategy, and marketing leadership for ANZ businesses.
            </p>

            <div className="grid gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block p-6 md:p-8 rounded-lg border border-border hover:border-accent/30 transition-colors"
                >
                  <p className="text-xs text-muted-foreground mb-2">
                    {new Date(post.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })} · {post.readingTime}
                  </p>
                  <h2 className="text-xl md:text-2xl font-black tracking-tight mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground font-light line-clamp-2 mb-4">{post.excerpt}</p>
                  <span className="text-sm font-medium text-accent">Read more →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
