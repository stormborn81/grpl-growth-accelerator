const metrics = [
  { value: "40%", label: "Increase in qualified leads", period: "within 6 months" },
  { value: "22%", label: "Reduction in wasted spend", period: "year one" },
  { value: "3.2x", label: "Marketing ROI improvement", period: "average" },
];

const Outcomes = () => {
  return (
    <section className="py-24 md:py-32 bg-grpl-black text-grpl-white relative overflow-hidden">
      {/* Octagon background decoration */}
      <div className="absolute top-20 right-20 w-80 h-80 opacity-[0.04] pointer-events-none hidden lg:block">
        <img src="/src/assets/octagon-outline.png" alt="" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-grpl-white">
              Business Outcomes
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <div className="text-6xl md:text-7xl font-black tracking-tight text-grpl-white">
                    {metric.value}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-medium text-grpl-white">{metric.label}</p>
                  <p className="text-sm text-grpl-white/60 font-light">{metric.period}</p>
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
