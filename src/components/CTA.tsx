import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import octagonOutline from "@/assets/octagon-outline.png";

const CTA = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-full h-full flex items-center justify-center">
        <img src={octagonOutline} alt="" className="w-full max-w-4xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6">
            Ready to Transform Marketing into a Growth Engine?
          </h2>
          
          <p className="text-lg sm:text-xl text-background/80 mb-10 max-w-2xl mx-auto">
            Start with a free marketing health check or book a discovery call to discuss your growth challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Run Your Marketing Health Check
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="xl" 
              className="bg-background text-foreground hover:bg-background/90 rounded-sm font-bold"
            >
              Book a Discovery Call
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-background/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>No obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>30-minute consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Actionable insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
