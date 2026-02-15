import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, LayoutGrid, Wrench, Rocket, Handshake } from "lucide-react";

const stages = [
  {
    icon: Search,
    stage: "DIAGNOSE",
    duration: "Weeks 1-4",
    headline: "Understand before you act.",
    body: "Every engagement begins with GRPL's six-dimension marketing diagnostic. We assess strategy, channels, team, technology, measurement, and competitive positioning — not through surveys or workshops, but through forensic analysis of your actual business data, customer behaviour, and market reality. The output is a clear-eyed assessment of where you are, what is broken, and where the highest-impact opportunities sit.",
  },
  {
    icon: LayoutGrid,
    stage: "ARCHITECT",
    duration: "Weeks 4-8",
    headline: "Strategy tied to revenue, not vanity.",
    body: "Based on the diagnostic, we build a strategic architecture that connects every marketing activity to a revenue outcome. Positioning. Ideal customer profile. Channel strategy. Budget allocation. Measurement framework. 12-month execution roadmap. This is not a 60-slide deck — it is a working document designed to be executed, measured, and iterated.",
  },
  {
    icon: Wrench,
    stage: "BUILD",
    duration: "Months 2-4",
    headline: "Assemble the right capability.",
    body: "Strategy requires capability. GRPL builds the marketing function to match the strategy — whether that means restructuring the existing team, hiring new talent, selecting and onboarding agencies, implementing marketing technology, or assembling specialist capability from the GRPL network. We do not just advise on what to build. We build it.",
  },
  {
    icon: Rocket,
    stage: "EXECUTE",
    duration: "Months 3-6+",
    headline: "Ship. Measure. Optimise. Repeat.",
    body: "Execution is where most strategies die. GRPL leads execution directly — managing teams, driving campaigns, coordinating agencies, and measuring every activity against pipeline and revenue contribution. Monthly reporting connects marketing to commercial outcomes. Quarterly reviews recalibrate strategy based on what the market is actually telling us. No set-and-forget. No autopilot.",
  },
  {
    icon: Handshake,
    stage: "TRANSITION",
    duration: "Months 6-12",
    headline: "Build it to last without us.",
    body: "The goal is never dependency. From day one, GRPL builds systems, processes, documentation, and team capability so the marketing function can stand on its own. When the time comes — whether that is a full-time CMO hire, a permanent fractional arrangement, or a self-sufficient team — the transition is planned, supported, and seamless. The best measure of our success is a business that does not need us anymore.",
  },
];

const StageCard = ({ stage, index }: { stage: typeof stages[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = stage.icon;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row gap-6 md:gap-10 items-start"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Timeline marker */}
      <div className="flex flex-col items-center shrink-0">
        <motion.div
          className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center border border-accent/30"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        >
          <Icon className="h-6 w-6 text-accent" />
        </motion.div>
        {index < stages.length - 1 && (
          <motion.div
            className="w-px h-16 md:h-full bg-border mt-3 hidden md:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ transformOrigin: "top" }}
          />
        )}
      </div>

      <div className="flex-1 pb-12 md:pb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold tracking-widest uppercase text-accent">{stage.stage}</span>
          <span className="text-xs text-muted-foreground font-light px-2 py-0.5 border border-border rounded-full">{stage.duration}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">{stage.headline}</h3>
        <p className="text-muted-foreground font-light leading-relaxed">{stage.body}</p>
      </div>
    </motion.div>
  );
};

const AboutOperatingSystem = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">The GRPL Operating System</h2>
          <p className="text-muted-foreground font-light max-w-xl mx-auto">
            Every engagement follows a disciplined framework. No guesswork. No wasted motion.
          </p>
        </motion.div>

        <div className="space-y-0">
          {stages.map((stage, i) => (
            <StageCard key={stage.stage} stage={stage} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutOperatingSystem;
