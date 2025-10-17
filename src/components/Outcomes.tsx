import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, DollarSign } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "40%",
    label: "Increase in qualified leads",
    period: "within six months",
  },
  {
    icon: DollarSign,
    value: "22%",
    label: "Reduction in wasted spend",
    period: "through optimization",
  },
  {
    icon: Target,
    value: "3.5x",
    label: "ROI improvement",
    period: "on marketing investment",
  },
];

const caseStudies = [
  {
    client: "Healthcare SaaS Platform",
    industry: "Healthcare Technology",
    challenge: "Stagnant growth and inefficient marketing spend across multiple channels",
    solution: "Implemented data-driven growth strategy, optimized channel mix, and built scalable processes",
    outcome: "40% increase in qualified leads and 22% reduction in customer acquisition cost",
    quote: "GRPL transformed our marketing from a cost center to a revenue driver. Their strategic insight and hands-on approach delivered results we couldn't achieve alone.",
    author: "Sarah Chen, CEO",
  },
  {
    client: "Financial Services Disruptor",
    industry: "FinTech",
    challenge: "Scaling marketing operations while maintaining compliance and brand integrity",
    solution: "Developed compliant marketing framework, built internal team capability, and executed multi-channel campaigns",
    outcome: "Successfully scaled from $10M to $50M ARR while maintaining marketing efficiency",
    quote: "The combination of strategic thinking and practical execution was exactly what we needed during our rapid growth phase.",
    author: "Michael Torres, Co-Founder",
  },
];

const Outcomes = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Proven Business Outcomes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real partnerships
          </p>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-8 border-2 border-border hover:border-accent transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center bg-accent text-accent-foreground p-4 rounded-sm mb-4 group-hover:scale-110 transition-transform">
                <metric.icon className="w-8 h-8" />
              </div>
              <div className="text-5xl font-black mb-2 text-accent">{metric.value}</div>
              <div className="text-lg font-bold mb-1">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.period}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-8 border-l-4 border-accent hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="text-sm font-bold text-accent mb-2">{study.industry}</div>
                  <h3 className="text-2xl font-black mb-4">{study.client}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="font-bold">Challenge: </span>
                      <span className="text-muted-foreground">{study.challenge}</span>
                    </div>
                    <div>
                      <span className="font-bold">Solution: </span>
                      <span className="text-muted-foreground">{study.solution}</span>
                    </div>
                    <div>
                      <span className="font-bold">Outcome: </span>
                      <span className="font-semibold">{study.outcome}</span>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-accent pl-4 py-2 italic text-muted-foreground">
                    "{study.quote}"
                  </blockquote>
                  <div className="mt-2 font-bold text-sm">— {study.author}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="group">
            Run Your Marketing Health Check
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
