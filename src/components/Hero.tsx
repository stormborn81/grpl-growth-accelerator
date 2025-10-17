import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import octagonRings from "@/assets/octagon-rings.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-5 w-1/2 h-full flex items-center justify-end">
        <img src={octagonRings} alt="" className="w-full max-w-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6">
            Enterprise‑Grade Marketing Leadership{" "}
            <span className="text-accent">Without the Full‑Time Cost</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl font-medium">
            Access executive‑level marketing strategy, revenue growth planning, and marketing transformation for ANZ businesses—without the overhead of a full‑time CMO.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="xl" className="group">
              Run Your Marketing Health Check
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroSecondary" size="xl">
              Book a Discovery Call
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-accent"></div>
              <span className="font-semibold">No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-accent"></div>
              <span className="font-semibold">Flexible engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-accent"></div>
              <span className="font-semibold">Proven results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
