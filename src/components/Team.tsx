import mattGudge from "@/assets/matt-gudge.png";

const Team = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
              Our Team
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            {/* Octagon Image */}
            <div className="flex-shrink-0">
              <div 
                className="relative w-40 h-40 border-2 border-accent transition-all duration-300 hover:border-primary group"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                }}
              >
                <img
                  src={mattGudge}
                  alt="Matt Gudge, Founder of GRPL"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-6 flex-1 max-w-3xl">
              <div>
                <h3 className="text-3xl font-bold mb-2">Matt Gudge</h3>
                <p className="text-accent font-semibold text-lg">Founder & Chief Marketing Officer</p>
              </div>
              <p className="text-foreground/80 leading-relaxed text-lg font-light">
                Matt Gudge is a Chief Marketing Officer, senior marketing strategist and founder of GRPL, 
                a consultancy built for companies ready to bridge the gap between business strategy and 
                creative execution. With over 15 years of experience leading marketing for brands across 
                finance, healthcare, and technology, Matt specialises in unlocking growth by aligning 
                leadership vision, commercial priorities, and brand strategy. Known for his ability to 
                quickly grasp complex categories and define sharp positioning, Matt helps CEOs and founders 
                clarify their competitive advantage, build cohesive go-to-market strategies, and scale 
                high-performing marketing functions without the overhead of a full-time executive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
