import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CardData {
  label: string;
  oneLiner: string;
  back: React.ReactNode;
}

const cards: CardData[] = [
  {
    label: "Vision",
    oneLiner: "A world where every ambitious business has access to the marketing leadership it deserves.",
    back: (
      <p className="text-sm font-light leading-relaxed">
        Too many businesses are trapped between two bad options: hire a $300K+ CMO they cannot yet afford, or muddle through with junior talent and fragmented agency relationships. GRPL exists to eliminate that gap, providing enterprise-grade marketing and growth leadership at a price point and engagement model that matches where the business actually is. Our vision is a market where the quality of your marketing leadership is determined by ambition, not budget.
      </p>
    ),
  },
  {
    label: "Mission",
    oneLiner: "Embed senior marketing leadership inside ANZ businesses to build functions that drive measurable growth.",
    back: (
      <p className="text-sm font-light leading-relaxed">
        We do not advise from the outside. We do not submit recommendations and walk away. GRPL leaders embed inside your business, attending your leadership meetings, managing your teams, owning your strategy, and being accountable for commercial results. Our mission is to build marketing and growth functions that work, not just while we are there, but long after we have transitioned out. Every engagement is designed to leave the business stronger, more capable, and more self-sufficient than we found it.
      </p>
    ),
  },
  {
    label: "Values",
    oneLiner: "Five principles that govern every engagement.",
    back: (
      <div className="text-sm font-light leading-relaxed space-y-3">
        <p><span className="font-bold">Outcomes over activity.</span> We measure success in revenue, pipeline, and market position, not deliverables produced or hours logged.</p>
        <p><span className="font-bold">Honesty over comfort.</span> We will tell you what you need to hear, not what you want to hear. Polite dishonesty is expensive.</p>
        <p><span className="font-bold">Execution over elegance.</span> A good strategy executed beats a perfect strategy in a slide deck. We ship.</p>
        <p><span className="font-bold">Systems over heroics.</span> We build repeatable processes and capable teams, not dependency on any individual, including us.</p>
        <p><span className="font-bold">Collective over individual.</span> No single person has every answer. We bring the right combination of expertise to every engagement.</p>
      </div>
    ),
  },
];

const FlipCard = ({ card, index }: { card: CardData; index: number }) => {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="h-[320px] md:h-[360px] cursor-pointer"
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-foreground text-primary-foreground rounded-lg border border-primary-foreground/10"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <span className="text-xs font-bold tracking-widest uppercase text-accent mb-4">{card.label}</span>
          <p className="text-center text-lg font-medium leading-snug">{card.oneLiner}</p>
          <span className="mt-6 text-xs text-primary-foreground/40">Hover or tap to explore</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col justify-center p-8 bg-accent text-accent-foreground rounded-lg overflow-y-auto"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-xs font-bold tracking-widest uppercase mb-4">{card.label}</span>
          {card.back}
        </div>
      </div>
    </motion.div>
  );
};

const AboutValues = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <motion.h2
          className="text-3xl sm:text-4xl font-black tracking-tight text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          What Drives Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <FlipCard key={card.label} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
