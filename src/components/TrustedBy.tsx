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
  const duplicatedClients = [...clients, ...clients, ...clients];
  
  return (
    <section className="py-10 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground font-light mb-8">
          Trusted by leaders across healthcare, finance, technology, and retail
        </p>

        <div className="relative">
          <div className="flex animate-scroll-logos">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 grayscale opacity-50 hover:opacity-80 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
