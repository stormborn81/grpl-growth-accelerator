import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const insights = [
  {
    title: "When to Hire a Fractional CMO",
    category: "Strategy",
    readTime: "5 min read",
    excerpt: "Key indicators that your business needs executive marketing leadership",
  },
  {
    title: "Maximising Marketing ROI in Scale-ups",
    category: "Growth",
    readTime: "7 min read",
    excerpt: "Proven frameworks for improving marketing efficiency and effectiveness",
  },
  {
    title: "Building Marketing Capability",
    category: "Leadership",
    readTime: "6 min read",
    excerpt: "How to develop high-performing marketing teams that drive growth",
  },
];

const Insights = () => {
  return (
    <section id="insights" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
              Latest Insights
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <article key={index} className="bg-secondary p-8 rounded-2xl group hover:shadow-lg transition-shadow cursor-pointer">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {insight.category}
                  </span>
                  <span className="text-xs text-muted-foreground ml-3 font-light">
                    {insight.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-foreground transition-colors">
                  {insight.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                  {insight.excerpt}
                </p>
                
                <div className="flex items-center text-sm font-medium group-hover:text-foreground transition-colors">
                  Read article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
