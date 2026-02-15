import { Link } from "react-router-dom";

const problems = [
  "You are spending on marketing but cannot connect it to revenue.",
  "Growth has stalled and adding more tactics is not fixing it.",
  "You have outgrown founder-led marketing but a $300K CMO hire feels premature.",
  "Your agencies are executing but nobody is leading the strategy.",
];

const ProblemStatement = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              Sound Familiar?
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="p-6 bg-secondary rounded-lg border border-border"
              >
                <p className="text-foreground font-medium leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto">
              These are not marketing problems. They are marketing leadership problems. And they are exactly what GRPL exists to solve.
            </p>
            <Link
              to="/growth-diagnostic"
              className="text-sm text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Not sure where you stand? Take the free Growth Diagnostic →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
