import { Button } from "@/components/ui/button";
import { LinkedinIcon } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 md:py-40 bg-background border-y border-border/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tighter mb-6 leading-tight">
              About GRPL
            </h2>
            <div className="w-20 h-px bg-accent/50"></div>
          </div>

          <div className="space-y-10 text-xl md:text-2xl text-muted-foreground font-extralight leading-relaxed">
            <p>
              GRPL partners with ambitious ANZ businesses to transform marketing from a cost centre 
              into a strategic growth engine. Our fractional CMO and Chief Growth Officer services 
              deliver C-suite marketing leadership without the overhead of full-time executive salaries.
            </p>
            
            <p>
              Founded by experienced marketing executives who've scaled businesses across healthcare, 
              finance, technology and retail, we bring deep strategic expertise combined with hands-on 
              execution capability.
            </p>
            
            <p>
              Whether you're breaking through a growth plateau, transitioning from founder-led marketing, 
              or building marketing capability for the next phase, GRPL provides the leadership, 
              strategy and execution support you need to succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
