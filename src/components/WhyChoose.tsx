import { Link } from "react-router-dom";
import { Users, Rocket, Brain } from "lucide-react";
import octagonRings from "@/assets/octagon-rings.png";

const reasons = [
  {
    icon: Users,
    title: "A Collective, Not a Solo Act",
    description: "GRPL is not one person. It is a curated network of senior specialists: brand strategists, demand generation experts, marketing technologists, revenue operators, and creative leaders. Every engagement is assembled from this network, the right combination of strategic leadership and specialist execution for your specific challenge.",
    link: "/about",
    linkText: "Meet the collective →",
  },
  {
    icon: Rocket,
    title: "Strategy That Ships",
    description: "We blend the analytical rigour of a management consultancy with the operational intensity of an in-house marketing leader who has a number to hit. The result: strategies built on evidence and designed to be executed, not presentations that collect dust in a shared drive.",
    link: "/about",
    linkText: "How GRPL works →",
  },
  {
    icon: Brain,
    title: "Built for AI-First Search",
    description: "The way buyers find businesses is changing. GRPL builds marketing strategies designed for 2026, optimised not just for Google, but for ChatGPT, Perplexity, Google AI Overviews, and the AI-powered search platforms that are reshaping how decisions are made. First-mover advantage matters.",
    link: "/blog/ai-reshaping-cmo-role-2026",
    linkText: "Read about AI search →",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 md:py-32 bg-grpl-black text-grpl-white relative overflow-hidden">
      <div className="absolute bottom-10 left-10 w-64 h-64 opacity-[0.08] pointer-events-none">
        <img src={octagonRings} alt="" className="w-full h-full brightness-0 invert" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-grpl-white">
              Why GRPL Is Different
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
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
                  <p className="text-grpl-white/70 leading-relaxed font-light mb-4">
                    {reason.description}
                  </p>
                  <Link to={reason.link} className="text-sm text-accent hover:text-accent/80 transition-colors font-medium">
                    {reason.linkText}
                  </Link>
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
