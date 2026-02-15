import { Link } from "react-router-dom";

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
              GRPL is a collective of senior marketing and growth leaders who partner with ambitious ANZ businesses to transform marketing from a cost centre into a strategic growth engine.
            </p>
            
            <p>
              Founded by marketing executives who have scaled businesses across healthcare, finance, technology, and retail, GRPL brings enterprise-grade strategic expertise combined with hands-on execution capability. Every engagement is led by a senior leader and supported by a curated network of specialists: brand strategists, demand generation experts, creative directors, marketing technologists, and revenue operators.
            </p>
            
            <p>
              Whether you are breaking through a growth plateau, transitioning from founder-led marketing, building your first marketing function, or bridging a leadership gap, GRPL provides the leadership, strategy, and execution to get you there. We plan, prioritise, and deliver.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link to="/about" className="text-sm text-accent hover:text-accent/80 transition-colors font-medium">
              Learn more about the GRPL collective →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
