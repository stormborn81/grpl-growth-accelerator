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
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Why Choose GRPL
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Five compelling reasons to partner with us for your marketing leadership needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-background p-8 border-l-4 border-accent hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
