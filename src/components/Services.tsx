import { Search, Map, Zap, BarChart, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Market & Customer Insights",
    description: "Deep analysis of your market position and customer needs",
  },
  {
    icon: Map,
    title: "Growth Strategy & Roadmap",
    description: "Clear, actionable plans aligned with business objectives",
  },
  {
    icon: Zap,
    title: "Campaign Execution",
    description: "End-to-end management and optimisation of marketing initiatives",
  },
  {
    icon: BarChart,
    title: "MarTech & Analytics",
    description: "Integration and optimisation of marketing technology stack",
  },
  {
    icon: GraduationCap,
    title: "Team Development",
    description: "Mentoring and capability uplift for internal teams",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 md:py-40 bg-background border-b border-border/30 relative overflow-hidden">
      {/* Subtle octagon background */}
      <div className="absolute top-20 right-10 w-96 h-96 opacity-[0.015] pointer-events-none animate-pulse">
        <img src="/src/assets/octagon-rings.png" alt="" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tighter mb-6 leading-tight">
              Our Services
            </h2>
            <div className="w-20 h-px bg-accent/50 mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground font-extralight max-w-3xl leading-relaxed">
              Comprehensive marketing leadership, unlocking your next growth phase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="relative bg-secondary/50 border border-border/50 p-10 group hover:bg-secondary hover:border-accent/20 transition-all duration-500">
                  <Icon className="h-10 w-10 text-muted-foreground mb-8 group-hover:text-accent transition-colors duration-500" strokeWidth={1} />
                  <h3 className="text-2xl font-light mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-extralight text-lg">
                    {service.description}
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

export default Services;
