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
    <section className="py-24 md:py-32 bg-grpl-black text-grpl-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-grpl-white">
              Fractional CMO Use Cases
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="text-center relative p-8 group">
                  {/* Octagon block background */}
                  <div className="absolute inset-0 bg-grpl-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)"}}></div>
                  <div className="relative mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-grpl-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500"
                         style={{clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"}}>
                      <Icon className="h-7 w-7 text-grpl-white group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="relative text-2xl font-black mb-4 tracking-tight text-grpl-white">
                    {useCase.title}
                  </h3>
                  <p className="relative text-grpl-white/70 leading-relaxed font-light">
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
