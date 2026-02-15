import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const leftKeywords = ["Research", "Frameworks", "Positioning", "Segmentation", "Competitive Analysis"];
const rightKeywords = ["Campaigns", "Pipeline", "Team Building", "Technology", "Revenue"];
const centerKeywords = ["Plans that ship", "Metrics that matter", "Growth that compounds"];

const AboutPhilosophy = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-black tracking-tight text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Where Strategy Meets the Real World
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
          {/* Text column */}
          <motion.div
            className="space-y-4 text-muted-foreground font-light leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>There are two types of marketing consultants in the world.</p>
            <p>The first type produces impressive strategic documents. Detailed research. Beautiful frameworks. Comprehensive recommendations. The work looks exceptional in a boardroom presentation. Then it sits in a shared drive and nothing changes.</p>
            <p>The second type jumps straight into execution. Run ads. Post content. Build funnels. Activity is high, but there is no strategic coherence. Every campaign is an isolated bet.</p>
            <p className="text-foreground font-medium">GRPL exists at the intersection.</p>
            <p>We bring the analytical depth of a management consultancy: rigorous diagnostics, evidence-based strategy, frameworks that have been tested across dozens of businesses and industries. But we couple it with the operational intensity of an in-house marketing leader who has a number to hit and a team to manage.</p>
            <p className="text-foreground font-bold">We believe the best strategy in the world is worthless if nobody executes it.</p>
            <p>And the best execution in the world is wasted if it is pointed in the wrong direction.</p>
            <p>Every GRPL engagement combines both. Strategy that is designed to be executed. Execution that is anchored in strategy. Plans that are prioritised, resourced, and delivered, not filed away.</p>
          </motion.div>

          {/* Venn diagram */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full max-w-md aspect-[4/3]">
              {/* Left circle */}
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full bg-foreground/5 border border-foreground/10 flex flex-col items-center justify-center p-6"
                initial={{ x: -60, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <span className="text-xs font-bold tracking-widest uppercase mb-3">Strategic Rigour</span>
                <div className="flex flex-wrap gap-1 justify-center">
                  {leftKeywords.map((kw) => (
                    <span key={kw} className="text-[10px] text-muted-foreground font-light px-2 py-0.5 bg-foreground/5 rounded-full">{kw}</span>
                  ))}
                </div>
              </motion.div>

              {/* Right circle */}
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full bg-foreground/5 border border-foreground/10 flex flex-col items-center justify-center p-6"
                initial={{ x: 60, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <span className="text-xs font-bold tracking-widest uppercase mb-3">Execution Discipline</span>
                <div className="flex flex-wrap gap-1 justify-center">
                  {rightKeywords.map((kw) => (
                    <span key={kw} className="text-[10px] text-muted-foreground font-light px-2 py-0.5 bg-foreground/5 rounded-full">{kw}</span>
                  ))}
                </div>
              </motion.div>

              {/* Center overlap */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[30%] aspect-square rounded-full bg-accent/15 border border-accent/40 flex flex-col items-center justify-center p-3"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
              >
                <span className="text-[10px] md:text-xs font-black text-accent mb-1">GRPL</span>
                <div className="flex flex-col items-center gap-0.5">
                  {centerKeywords.map((kw) => (
                    <span key={kw} className="text-[8px] md:text-[9px] text-accent/80 font-light text-center leading-tight">{kw}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
