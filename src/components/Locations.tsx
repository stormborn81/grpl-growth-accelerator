import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const cities = [
  { name: "Fractional CMO Sydney", link: "/fractional-cmo-sydney" },
  { name: "Fractional CMO Melbourne", link: "/fractional-cmo-melbourne" },
  { name: "Fractional CMO Brisbane", link: "/fractional-cmo-brisbane" },
  { name: "Fractional CMO Perth", link: "/fractional-cmo-perth" },
];

const Locations = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">
            Serving Businesses Across Australia
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {cities.map((city) => (
              <Link
                key={city.link}
                to={city.link}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-background hover:border-accent/30 hover:text-accent transition-colors text-sm font-medium"
              >
                <MapPin className="h-4 w-4" />
                {city.name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-light">
            GRPL provides fractional CMO and growth leadership services across Australia, combining on-site and remote engagement models.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Locations;
