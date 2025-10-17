import { Button } from "@/components/ui/button";
import octagonFullStop from "@/assets/logo-fullstop-reversed.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-14 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {/* Octagon background decoration */}
            <div className="absolute top-1/4 right-10 w-[600px] h-[600px] opacity-[0.02] pointer-events-none hidden lg:block animate-pulse">
              <img src="/src/assets/octagon-outline.png" alt="" className="w-full h-full" />
            </div>
            
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter relative leading-[0.9]">
              Executive‑level
              <span className="block">growth leadership</span>
            </h1>
            
            <div className="w-24 h-px bg-accent/50"></div>
            
            <div className="relative max-w-2xl">
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-extralight leading-relaxed">
                Access executive‑level marketing strategy and revenue growth planning without the overhead of a full‑time CMO
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-6 pt-8">
              <Button variant="hero" size="lg" className="group">
                <span className="font-light tracking-wide">Run Marketing Health Check</span>
                <img src={octagonFullStop} alt="" className="ml-3 h-2.5 w-2.5 group-hover:rotate-90 transition-transform duration-300" />
              </Button>
              <Button variant="heroSecondary" size="lg" className="group">
                <span className="font-light tracking-wide">Book Discovery Call</span>
                <img src={octagonFullStop} alt="" className="ml-3 h-2.5 w-2.5 opacity-60 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
