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
    <section className="py-32 md:py-40 bg-secondary border-b border-border/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tighter mb-6 leading-tight">
              Fractional CMO Use Cases
            </h2>
            <div className="w-20 h-px bg-accent/50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="text-center relative group">
                  <div className="relative mb-8 flex justify-center">
                    <Icon className="h-14 w-14 text-muted-foreground group-hover:text-accent transition-colors duration-500" strokeWidth={1} />
                  </div>
                  <h3 className="relative text-2xl font-light mb-5 tracking-tight">
                    {useCase.title}
                  </h3>
                  <p className="relative text-muted-foreground leading-relaxed font-extralight text-lg">
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
