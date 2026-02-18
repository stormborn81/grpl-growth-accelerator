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
            <div className="relative w-full max-w-lg" style={{ aspectRatio: '4/3' }}>
              {/* Left circle – center-left */}
              <motion.div
                className="absolute w-[62%] aspect-square rounded-full bg-foreground/5 border border-foreground/10"
                style={{ left: '5%', top: '5%' }}
                initial={{ x: -60, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <span className="absolute top-[42%] left-[18%] text-xs font-bold tracking-widest uppercase">Strategic Rigour</span>
              </motion.div>

              {/* Right circle – center-right */}
              <motion.div
                className="absolute w-[62%] aspect-square rounded-full bg-foreground/5 border border-foreground/10"
                style={{ right: '5%', top: '5%' }}
                initial={{ x: 60, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <span className="absolute top-[42%] right-[14%] text-xs font-bold tracking-widest uppercase">Execution Discipline</span>
              </motion.div>

              {/* Center overlap – GRPL orange circle, dead center of the overlap */}
              <motion.div
                className="absolute z-10 w-[28%] aspect-square rounded-full bg-accent/15 border border-accent/40 flex flex-col items-center justify-center p-3"
                style={{ left: '50%', top: 'calc(5% + 31%)', transform: 'translate(-50%, -50%)' }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
              >
                <span className="text-sm font-black text-accent mb-1">GRPL</span>
                <div className="flex flex-col items-center gap-0.5">
                  {centerKeywords.map((kw) => (
                    <span key={kw} className="text-[9px] text-accent/80 font-light text-center leading-tight">{kw}</span>
                  ))}
                </div>
              </motion.div>

              {/* Left keywords – below circles */}
              <motion.div
                className="absolute left-0 w-[48%] flex flex-wrap gap-1.5 justify-center"
                style={{ bottom: 0 }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {leftKeywords.map((kw) => (
                  <span key={kw} className="text-[10px] text-muted-foreground font-light px-2.5 py-1 bg-foreground/5 rounded-full">{kw}</span>
                ))}
              </motion.div>

              {/* Right keywords – below circles */}
              <motion.div
                className="absolute right-0 w-[48%] flex flex-wrap gap-1.5 justify-center"
                style={{ bottom: 0 }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.85 }}
              >
                {rightKeywords.map((kw) => (
                  <span key={kw} className="text-[10px] text-muted-foreground font-light px-2.5 py-1 bg-foreground/5 rounded-full">{kw}</span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
