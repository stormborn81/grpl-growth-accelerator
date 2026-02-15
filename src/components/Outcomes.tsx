const metrics = [
  { value: "60%+", label: "Growth in revenue", period: "with a tourism brand" },
  { value: "$5m+", label: "Secured in incremental marketing investments", period: "" },
  { value: "22%", label: "Reduction in wasted spend", period: "" },
  { value: "80%", label: "Increase in site traffic", period: "with stable CVR%" },
  { value: "40%+", label: "Increase in lead gen", period: "B2B SaaS" },
];

const Outcomes = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Octagon background decoration */}
      <div className="absolute top-20 right-20 w-80 h-80 opacity-[0.04] pointer-events-none hidden lg:block">
        <img src="/src/assets/octagon-outline.png" alt="" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
              Business Outcomes
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 md:gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center relative group">
                {/* Octagon border frame */}
                <div className="absolute inset-0 -m-8" 
                     style={{clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"}}>
                  <div className="w-full h-full border border-accent/20 group-hover:border-accent/40 transition-colors duration-500"></div>
                </div>
                <div className="relative mb-4">
                  <div className="text-6xl md:text-7xl font-black tracking-tight">
                    {metric.value}
                  </div>
                </div>
                <div className="relative space-y-1">
                  <p className="text-lg font-medium">{metric.label}</p>
                  <p className="text-sm text-muted-foreground font-light">{metric.period}</p>
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
