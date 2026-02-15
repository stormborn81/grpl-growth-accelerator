import { Link } from "react-router-dom";
import { UserCheck, TrendingUp, Search, Building2, Palette, Rocket, Shield } from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Fractional CMO",
    description: "Enterprise-grade marketing leadership on a part-time basis: positioning, demand generation, team building, and measurement. 2-4 days per week.",
    link: "/services/fractional-cmo",
  },
  {
    icon: TrendingUp,
    title: "Chief Growth Officer",
    description: "Integrated growth leadership spanning marketing, sales, product, and customer success, for when growth is a system problem, not just a marketing problem.",
    link: "/services/chief-growth-officer",
  },
  {
    icon: Search,
    title: "Marketing Audit",
    description: "A six-dimension diagnostic that reveals what is actually broken in your marketing and builds the roadmap to fix it. Completed in 4 weeks.",
    link: "/services/marketing-audit",
  },
  {
    icon: Building2,
    title: "Outsourced Marketing Department",
    description: "A complete marketing function without the overhead of building one in-house: strategic leadership combined with execution capability.",
    link: "/services/outsourced-marketing-department",
  },
  {
    icon: Palette,
    title: "Brand Foundation",
    description: "Build your brand from the ground up: vision, identity, positioning, and market presence for founders. Complete in 4 weeks.",
    link: "/services/brand-foundation",
  },
  {
    icon: Rocket,
    title: "Growth Projects",
    description: "Strategic marketing projects with clear scope, timeline, and deliverables, from product launches to rebrands to growth sprints. Fixed fee.",
    link: "/services/growth-projects",
  },
  {
    icon: Shield,
    title: "Interim CMO",
    description: "Immediate marketing leadership to bridge the gap while you recruit a permanent CMO. Operational within 1-2 weeks.",
    link: "/services/interim-cmo",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
              What We Do
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Comprehensive marketing and growth leadership, from diagnostic to execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="relative bg-secondary p-8 group hover:shadow-lg transition-all duration-500 rounded-lg border border-border hover:border-accent/30"
                >
                  <Icon className="h-8 w-8 text-foreground mb-6 group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light mb-4">
                    {service.description}
                  </p>
                  <span className="text-sm text-accent font-medium">Learn more →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
