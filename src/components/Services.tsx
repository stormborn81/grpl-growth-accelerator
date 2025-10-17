import { BarChart3, Rocket, Settings, LineChart, Users2, Brain } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Market & Customer Insights",
    description: "Deep understanding of your market, customers, and competitive landscape",
  },
  {
    icon: Rocket,
    title: "Growth Strategy & Roadmap",
    description: "Comprehensive plans that align marketing with business objectives",
  },
  {
    icon: BarChart3,
    title: "Campaign Execution & Optimization",
    description: "Hands-on implementation and continuous improvement of marketing initiatives",
  },
  {
    icon: Settings,
    title: "MarTech Integration & Analytics",
    description: "Technology stack optimization and data-driven decision making",
  },
  {
    icon: Users2,
    title: "Team Mentoring & Capability Uplift",
    description: "Building internal expertise and leadership development",
  },
  {
    icon: LineChart,
    title: "Performance Measurement & Reporting",
    description: "Clear metrics, dashboards, and executive-level insights",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive marketing leadership covering strategy, execution, and team development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border-2 border-border hover:border-accent transition-all group"
            >
              <div className="bg-accent text-accent-foreground w-14 h-14 rounded-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-secondary p-8 border-l-4 border-accent">
          <h3 className="text-2xl font-black mb-4">Flexible Engagement Models</h3>
          <p className="text-muted-foreground mb-4">
            Whether you need strategic oversight, hands-on execution, or both—we tailor our engagement to your specific needs and budget.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Fractional CMO:</strong> Strategic leadership and planning</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Chief Growth Officer:</strong> Revenue-focused execution and optimization</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Project-Based:</strong> Specific initiatives with defined outcomes</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
