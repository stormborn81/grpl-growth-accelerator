import { Button } from "@/components/ui/button";
import octagonFullStop from "@/assets/logo-fullstop-reversed.png";

const CTA = () => {
  return (
    <section className="py-32 md:py-40 bg-background border-b border-border/30 relative overflow-hidden">
      {/* Octagon background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.015] pointer-events-none animate-pulse">
        <img src="/src/assets/octagon-rings.png" alt="" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tighter mb-8 leading-tight">
            Ready to Transform Marketing Into a Growth Engine?
          </h2>
          
          <div className="w-20 h-px bg-accent/50 mx-auto mb-10"></div>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-16 font-extralight max-w-3xl mx-auto leading-relaxed">
            Start with a complimentary marketing health check or book a discovery call 
            to explore how GRPL can accelerate your growth
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="hero" size="lg" className="group">
              <span className="font-light tracking-wide">Run Marketing Health Check</span>
              <img src={octagonFullStop} alt="" className="ml-3 h-2.5 w-2.5 group-hover:rotate-90 transition-transform duration-300" />
            </Button>
            <Button variant="heroSecondary" size="lg" className="group">
              <span className="font-light tracking-wide">Book Discovery Call</span>
              <img src={octagonFullStop} alt="" className="ml-3 h-2.5 w-2.5 opacity-60 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-300" />
            </Button>
          </div>
          
          <div className="mt-16 text-base text-muted-foreground font-extralight">
            <p>Questions? Email us at <a href="mailto:hello@grpl.co" className="text-foreground hover:text-accent transition-colors">hello@grpl.co</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
