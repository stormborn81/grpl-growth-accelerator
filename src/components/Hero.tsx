import { Button } from "@/components/ui/button";
import buttonOctagon from "@/assets/button-octagon.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-14">
      <div className="container mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8">
            {/* Octagon background decoration */}
            <div className="absolute top-1/4 right-10 w-96 h-96 opacity-[0.03] pointer-events-none hidden lg:block">
              <img src="/src/assets/octagon-outline.png" alt="" className="w-full h-full" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight relative">
              Executive‑level growth leadership
              <span className="block mt-2">Without the Full‑Time Cost</span>
            </h1>
            
            <div className="w-16 h-0.5 bg-accent mx-auto"></div>
            
            <div className="relative inline-block">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                Access executive‑level marketing strategy and revenue growth planning without the overhead of a full‑time CMO
              </p>
              {/* Octagon highlight accent */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Run Marketing Health Check
                <img src={buttonOctagon} alt="" className="ml-2 h-3 w-3" />
              </Button>
              <Button variant="heroSecondary" size="lg" className="w-full sm:w-auto">
                Book Discovery Call
                <img src={buttonOctagon} alt="" className="ml-2 h-3 w-3 opacity-50" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
