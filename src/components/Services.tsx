import { Search, Map, Zap, BarChart, GraduationCap, Sparkles } from "lucide-react";

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
  {
    icon: Sparkles,
    title: "Creative Excellence",
    description: "Elevate your creative output with executive‑level alignment and vision.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
              Our Services
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Comprehensive marketing leadership, unlocking your next growth phase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="relative bg-secondary p-8 group hover:shadow-lg transition-all duration-500"
                     style={{clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)"}}>
                  {/* Octagon border accent */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-accent/30 transition-colors duration-500"
                       style={{clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)"}}></div>
                  <Icon className="h-8 w-8 text-foreground mb-6 group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
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
