import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    title: "The Hidden Cost of Not Having a CMO",
    excerpt: "Why growing companies stall when marketing leadership is missing—and what to do about it.",
    category: "Strategy",
    date: "Dec 2024",
    readTime: "5 min read",
  },
  {
    title: "From Founder-Led to Scalable Marketing",
    excerpt: "A practical framework for transitioning from ad-hoc marketing to a growth engine that scales.",
    category: "Growth",
    date: "Nov 2024",
    readTime: "7 min read",
  },
  {
    title: "Measuring What Matters: KPIs for Executive Teams",
    excerpt: "The marketing metrics that boards and C-suites actually care about (and how to improve them).",
    category: "Analytics",
    date: "Nov 2024",
    readTime: "6 min read",
  },
];

const Insights = () => {
  return (
    <section id="insights" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Insights & Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic thinking and practical advice for marketing leaders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="p-0 overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="h-48 bg-secondary flex items-center justify-center border-b-4 border-accent">
                <div className="text-6xl font-black text-muted-foreground/20">
                  {article.category.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="font-bold text-accent uppercase">{article.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-black mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Insights;
