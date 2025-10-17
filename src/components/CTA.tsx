import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import octagonOutline from "@/assets/octagon-outline.png";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 bg-grpl-black text-grpl-white relative overflow-hidden">
      {/* Octagon background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
        <img src="/src/assets/octagon-rings.png" alt="" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 text-grpl-white">
            Ready to Transform Marketing Into a Growth Engine?
          </h2>
          
          <div className="w-16 h-0.5 bg-accent mx-auto mb-8"></div>
          
          <p className="text-xl text-grpl-white/70 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Start with a complimentary marketing health check or book a discovery call 
            to explore how GRPL can accelerate your growth
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg">
              Run Marketing Health Check
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="heroSecondary" size="lg">
              Book Discovery Call
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-grpl-white/60 font-light">
            <p>Questions? Email us at <a href="mailto:hello@grpl.co" className="underline hover:text-grpl-white transition-colors">hello@grpl.co</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
