import { Search, Map, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnose",
    description: "Every engagement starts with GRPL's six-dimension marketing diagnostic, a forensic assessment of your strategy, channels, team, technology, measurement, and competitive positioning.",
  },
  {
    icon: Map,
    step: "02",
    title: "Architect",
    description: "We build a strategic plan tied directly to your revenue targets. Positioning, channel strategy, budget allocation, and a 12-month execution roadmap designed to be implemented, not filed.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execute",
    description: "GRPL leads execution, managing your team, coordinating agencies, driving campaigns, and measuring everything against pipeline and revenue contribution.",
  },
  {
    icon: BarChart,
    step: "04",
    title: "Scale",
    description: "We build systems, processes, and team capability so the marketing function stands on its own. The goal is growth that compounds, not dependency.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-grpl-black text-grpl-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-grpl-white">
              How It Works
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative text-center p-6">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-grpl-white/10" />
                  )}
                  <div className="relative mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-grpl-white/10 rounded-full flex items-center justify-center">
                      <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                    </div>
                  </div>
                  <span className="text-xs font-bold text-accent tracking-widest uppercase mb-2 block">{step.step}</span>
                  <h3 className="text-xl font-bold mb-3 tracking-tight text-grpl-white">
                    {step.title}
                  </h3>
                  <p className="text-grpl-white/70 leading-relaxed font-light text-sm">
                    {step.description}
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

export default HowItWorks;
