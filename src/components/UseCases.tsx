import { Card } from "@/components/ui/card";
import { Unlock, Lightbulb, Users } from "lucide-react";

const useCases = [
  {
    icon: Unlock,
    title: "Unlock Growth",
    description: "Break through stagnant growth cycles and maximize marketing ROI.",
    benefits: [
      "Identify and eliminate wasted marketing spend",
      "Prioritize high-value activities that drive revenue",
      "Build scalable processes for sustainable growth",
      "Optimize channel mix for maximum efficiency",
    ],
  },
  {
    icon: Lightbulb,
    title: "Strategic Planning",
    description: "Executive-level marketing thinking without the full-time commitment.",
    benefits: [
      "Develop comprehensive growth strategies",
      "Align marketing with business objectives",
      "Create actionable roadmaps with clear milestones",
      "Empower teams to execute with confidence",
    ],
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Build marketing capability and foster executive alignment.",
    benefits: [
      "Mentor and develop internal marketing leaders",
      "Scale team capacity without overhead",
      "Facilitate cross-functional collaboration",
      "Establish best practices and frameworks",
    ],
  },
];

const UseCases = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            How We Help
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three core ways GRPL drives value for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all hover:scale-105 border-t-4 border-accent"
            >
              <div className="bg-accent text-accent-foreground w-16 h-16 rounded-sm flex items-center justify-center mb-6">
                <useCase.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-black mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground mb-6">{useCase.description}</p>
              
              <ul className="space-y-3">
                {useCase.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
