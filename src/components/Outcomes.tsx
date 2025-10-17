const metrics = [
  { value: "40%", label: "Increase in qualified leads", period: "within 6 months" },
  { value: "22%", label: "Reduction in wasted spend", period: "year one" },
  { value: "3.2x", label: "Marketing ROI improvement", period: "average" },
];

const Outcomes = () => {
  return (
    <section className="py-32 md:py-40 bg-background border-b border-border/30 relative overflow-hidden">
      {/* Octagon background decoration */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] opacity-[0.015] pointer-events-none hidden lg:block animate-pulse">
        <img src="/src/assets/octagon-outline.png" alt="" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tighter mb-6 leading-tight">
              Business Outcomes
            </h2>
            <div className="w-20 h-px bg-accent/50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center relative group">
                <div className="relative mb-6">
                  <div className="text-7xl md:text-8xl font-light tracking-tighter">
                    {metric.value}
                  </div>
                </div>
                <div className="relative space-y-2">
                  <p className="text-xl font-light">{metric.label}</p>
                  <p className="text-base text-muted-foreground font-extralight">{metric.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
