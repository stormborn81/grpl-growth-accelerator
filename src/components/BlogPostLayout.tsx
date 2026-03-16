import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { blogPosts, type BlogPostMeta } from "@/data/blogPosts";

interface BlogPostLayoutProps {
  post: BlogPostMeta;
  relatedSlugs: string[];
  children: React.ReactNode;
  jsonLd?: object | object[];
}

const BlogPostLayout = ({ post, relatedSlugs, children, jsonLd: additionalJsonLd }: BlogPostLayoutProps) => {
  const relatedPosts = blogPosts.filter((p) => relatedSlugs.includes(p.slug));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.seoTitle,
      description: post.metaDescription,
      url: post.canonical,
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Organization", name: "GRPL", url: "https://www.grpl.com.au" },
      publisher: { "@type": "Organization", name: "GRPL", url: "https://www.grpl.com.au" },
      mainEntityOfPage: { "@type": "WebPage", "@id": post.canonical },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grpl.com.au/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.grpl.com.au/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: post.canonical },
      ],
    },
    ...(additionalJsonLd ? (Array.isArray(additionalJsonLd) ? additionalJsonLd : [additionalJsonLd]) : []),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={post.seoTitle}
        description={post.metaDescription}
        canonical={post.canonical}
        ogType="article"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="pt-14">
        <article className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/blog">Blog</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{post.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-2">
                Published by GRPL | {new Date(post.date).toLocaleDateString("en-AU", { month: "long", year: "numeric" })} · {post.readingTime}
              </p>
            </div>

            <div className="prose prose-lg max-w-none [&>h1]:text-4xl [&>h1]:sm:text-5xl [&>h1]:font-black [&>h1]:tracking-tight [&>h1]:mb-8 [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-black [&>h2]:tracking-tight [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:text-muted-foreground [&>p]:font-light [&>p]:leading-relaxed [&>p]:mb-6 [&>ul]:text-muted-foreground [&>ul]:font-light [&>ul]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:text-muted-foreground [&>ol]:font-light [&>ol]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-accent/80 [&_a]:transition-colors">
              {children}
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <section className="mt-16 pt-12 border-t border-border">
                <h2 className="text-2xl font-black tracking-tight mb-6">Related Articles</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      to={`/blog/${rp.slug}`}
                      className="group block p-6 rounded-lg border border-border hover:border-accent/30 transition-colors"
                    >
                      <h3 className="font-bold text-sm mb-2 group-hover:text-accent transition-colors">{rp.title}</h3>
                      <p className="text-xs text-muted-foreground font-light line-clamp-2">{rp.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <section className="mt-16 pt-12 border-t border-border text-center">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">
                Ready to discuss your marketing leadership needs?
              </h2>
              <p className="text-muted-foreground font-light mb-8 max-w-xl mx-auto">
                Book a strategy call to explore how GRPL can accelerate your growth.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book a Strategy Call</Link>
              </Button>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostLayout;
