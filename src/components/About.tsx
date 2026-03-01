import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-grpl-black text-grpl-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-grpl-white">
              About GRPL
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="space-y-8 text-lg text-grpl-white/70 font-light leading-relaxed">
            <p>
              GRPL partners with ambitious ANZ businesses to transform marketing from a cost centre 
              into a strategic growth engine. Our <Link to="/services/fractional-cmo" className="text-accent hover:underline">fractional CMO</Link> and <Link to="/services/chief-growth-officer" className="text-accent hover:underline">Chief Growth Officer</Link> services 
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

          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Learn more about GRPL <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
