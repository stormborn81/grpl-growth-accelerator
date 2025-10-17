import { DollarSign, Zap, Target, TrendingUp, Eye } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Cost-Effective Leadership",
    description: "Access executive-level strategic and executional capability without paying a six-figure salary. Get the expertise you need, when you need it.",
  },
  {
    icon: Zap,
    title: "Adaptable Engagement",
    description: "Scale involvement up or down based on your business needs. Flexible arrangements that grow with your business.",
  },
  {
    icon: Target,
    title: "Strategic Focus",
    description: "We handle revenue growth planning while your in-house team focuses on day-to-day marketing execution.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Capacity & Capability",
    description: "We provide both strategic direction and executional support to accelerate your growth trajectory.",
  },
  {
    icon: Eye,
    title: "Objective Perspective",
    description: "An outsider's view that identifies opportunities and challenges assumptions to drive better results.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-32 md:py-40 bg-secondary border-b border-border/30 relative overflow-hidden">
      {/* Octagon background decoration */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] opacity-[0.02] pointer-events-none animate-pulse">
        <img src="/src/assets/octagon-rings.png" alt="" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tighter mb-6 leading-tight">
              Why Choose GRPL
            </h2>
            <div className="w-20 h-px bg-accent/50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="group relative">
                  <div className="relative mb-8">
                    <Icon className="h-12 w-12 text-muted-foreground group-hover:text-accent transition-colors duration-500" strokeWidth={1} />
                  </div>
                  <h3 className="relative text-2xl font-light mb-4 tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="relative text-muted-foreground leading-relaxed font-extralight text-lg">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
