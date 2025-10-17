import { Rocket, Compass, Users } from "lucide-react";

const useCases = [
  {
    icon: Rocket,
    title: "Unlock Growth",
    description: "Break through stagnant growth cycles, improve spend efficiency and prioritise high‑value activities that drive results",
  },
  {
    icon: Compass,
    title: "Strategic Planning",
    description: "Provide executive‑level marketing thinking without a full‑time hire, empowering teams to move cohesively",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Foster executive‑team alignment, scale capacity and uplift internal leadership capabilities",
  },
];

const UseCases = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
              Fractional CMO Use Cases
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
                      <Icon className="h-7 w-7 text-foreground" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {useCase.description}
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

export default UseCases;
