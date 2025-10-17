const metrics = [
  { value: "40%", label: "Increase in qualified leads", period: "within 6 months" },
  { value: "22%", label: "Reduction in wasted spend", period: "year one" },
  { value: "3.2x", label: "Marketing ROI improvement", period: "average" },
];

const Outcomes = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
              Business Outcomes
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <div className="text-6xl md:text-7xl font-black tracking-tight">
                    {metric.value}
                  </div>
                </div>
                <div className="space-y-1">
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
