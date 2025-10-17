import brgLogo from "@/assets/clients/brg.png";
import mableLogo from "@/assets/clients/mable.png";
import healthengineLogo from "@/assets/clients/healthengine.webp";
import medxLogo from "@/assets/clients/medx.png";
import mangroveLogo from "@/assets/clients/mangrove.png";

const clients = [
  { name: "BRG", logo: brgLogo },
  { name: "Mable", logo: mableLogo },
  { name: "Healthengine", logo: healthengineLogo },
  { name: "MedX Finance", logo: medxLogo },
  { name: "Mangrove Digital", logo: mangroveLogo },
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
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
