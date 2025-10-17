import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import buttonOctagon from "@/assets/button-octagon.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center bg-background pt-14 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[80%] w-auto object-cover opacity-20"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for seamless blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-6xl">
          <div className="space-y-8 text-left">
            {/* Octagon background decoration */}
            <div className="absolute -top-10 -right-20 w-96 h-96 opacity-[0.03] pointer-events-none hidden lg:block">
              <img src="/src/assets/octagon-outline.png" alt="" className="w-full h-full" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight relative max-w-4xl">
              Executive‑level growth leadership
              <span className="block mt-2">Without the Full‑Time Cost</span>
            </h1>
            
            <div className="w-16 h-0.5 bg-accent"></div>
            
            <div className="relative">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                Access executive‑level marketing strategy and revenue growth planning without the overhead of a full‑time CMO
              </p>
              {/* Octagon highlight accent */}
              <div className="absolute -bottom-2 left-0 w-32 h-0.5 bg-gradient-to-r from-accent via-accent to-transparent"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-8">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => navigate('/marketing-health-check')}
              >
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
