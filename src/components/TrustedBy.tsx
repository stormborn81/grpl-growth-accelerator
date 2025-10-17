const clients = [
  "BRG",
  "Mable",
  "Healthengine",
  "MedX Finance",
  "Exec Finance",
  "Mangrove Digital",
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-8">
            Trusted by Leading Brands
          </h3>
          <p className="text-lg text-foreground font-medium">
            Across healthcare, finance, retail and technology
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-2xl font-black text-muted-foreground hover:text-accent transition-colors cursor-default"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
