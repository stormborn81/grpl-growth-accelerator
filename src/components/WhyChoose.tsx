import { DollarSign, Zap, Target, TrendingUp, Eye } from "lucide-react";
import octagonRings from "@/assets/octagon-rings.png";

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
    <section className="py-24 md:py-32 bg-grpl-black text-grpl-white relative overflow-hidden">
      {/* Octagon background decoration */}
      <div className="absolute bottom-10 left-10 w-64 h-64 opacity-[0.08] pointer-events-none">
        <img src={octagonRings} alt="" className="w-full h-full brightness-0 invert" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-grpl-white">
              Why Choose GRPL
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="relative">
                  <div className="mb-6">
                    <Icon className="h-8 w-8 text-grpl-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight text-grpl-white">
                    {reason.title}
                  </h3>
                  <p className="text-grpl-white/70 leading-relaxed font-light">
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
