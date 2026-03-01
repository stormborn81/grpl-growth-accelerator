import brgLogo from "@/assets/clients/brg.png";
import mableLogo from "@/assets/clients/mable.png";
import healthengineLogo from "@/assets/clients/healthengine.webp";
import medxLogo from "@/assets/clients/medx.png";
import mangroveLogo from "@/assets/clients/mangrove.png";
import adrenalineLogo from "@/assets/clients/adrenaline.webp";
import redballoonLogo from "@/assets/clients/redballoon.webp";

const clients: { name: string; logo: string; url?: string }[] = [
  { name: "BRG", logo: brgLogo },
  { name: "Mable", logo: mableLogo },
  { name: "Healthengine", logo: healthengineLogo },
  { name: "MedX Finance", logo: medxLogo, url: "https://www.medxfinance.com.au" },
  { name: "Mangrove Digital", logo: mangroveLogo },
  { name: "Adrenaline", logo: adrenalineLogo },
  { name: "RedBalloon", logo: redballoonLogo },
];

const TrustedBy = () => {
  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];
  
  return (
    <section className="py-16 bg-grpl-black text-grpl-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold text-grpl-white/70 uppercase tracking-wide mb-8">
            Trusted by Leading Brands
          </h3>
          <p className="text-lg text-grpl-white font-medium">
            Across healthcare, finance, retail and technology
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll-logos">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                {client.url ? (
                  <a href={client.url} target="_blank" rel="noopener">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-12 w-auto object-contain"
                    />
                  </a>
                ) : (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-12 w-auto object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
