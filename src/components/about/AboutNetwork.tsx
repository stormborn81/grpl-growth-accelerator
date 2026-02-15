import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const nodes = [
  {
    label: "Brand Strategy & Positioning",
    description: "Senior brand strategists who have built and repositioned brands across B2B, SaaS, financial services, and professional services. From market research and competitive analysis to brand architecture and messaging frameworks.",
  },
  {
    label: "Demand Generation & Growth",
    description: "Performance marketers and growth operators who build full-funnel demand generation engines, from awareness to pipeline to revenue. Specialists in paid media, content marketing, SEO, and marketing automation.",
  },
  {
    label: "Content & Thought Leadership",
    description: "Experienced content strategists, writers, and editors who create content that builds authority and drives commercial outcomes. Not content for content's sake, but content that positions, differentiates, and converts.",
  },
  {
    label: "Marketing Technology",
    description: "CRM architects, marketing automation specialists, and analytics experts who build the technology infrastructure that makes modern marketing work. HubSpot, Salesforce, GA4, and custom data solutions.",
  },
  {
    label: "Creative & Design",
    description: "Art directors, designers, and creative leads who translate brand strategy into visual identity systems, campaign creative, and digital experiences. Design with strategic purpose.",
  },
  {
    label: "Sales Enablement & RevOps",
    description: "Revenue operations specialists who bridge marketing and sales, building the handoff processes, lead scoring models, pipeline reporting, and sales enablement content that turn marketing leads into closed revenue.",
  },
  {
    label: "AI & Digital Transformation",
    description: "Specialists in AI-powered marketing, search optimisation for AI platforms, marketing automation, and the digital transformation strategies that keep businesses ahead of the technology curve.",
  },
  {
    label: "Research & Insights",
    description: "Market researchers, customer insight specialists, and data analysts who ensure every strategy is built on evidence, not assumptions. Qualitative and quantitative research, customer segmentation, and competitive intelligence.",
  },
];

const AboutNetwork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-foreground text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">The Collective</h2>
          <p className="text-primary-foreground/60 font-light max-w-2xl mx-auto">
            GRPL is not one person. It is a curated network of senior specialists, each one a proven operator in their domain.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex justify-center mb-12"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          >
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-accent/15 border-2 border-accent flex items-center justify-center">
              <div className="text-center">
                <span className="block text-sm md:text-base font-black text-accent">GRPL</span>
                <span className="block text-[10px] md:text-xs font-light text-primary-foreground/60 mt-1">Strategic Leadership</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nodes.map((node, i) => (
              <motion.button
                key={node.label}
                className={`p-4 rounded-lg border text-left transition-all duration-300 min-h-[100px] ${
                  activeNode === i
                    ? "bg-accent/20 border-accent"
                    : "bg-primary-foreground/5 border-primary-foreground/10 hover:border-accent/50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                onClick={() => setActiveNode(activeNode === i ? null : i)}
                onMouseEnter={() => setActiveNode(i)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <span className="text-xs md:text-sm font-semibold leading-tight block">{node.label}</span>
                {activeNode !== i && (
                  <span className="text-[10px] text-primary-foreground/30 mt-2 block">Tap to explore</span>
                )}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeNode !== null && (
              <motion.div
                key={activeNode}
                className="mt-6 p-6 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h4 className="text-sm font-bold text-accent mb-2">{nodes[activeNode].label}</h4>
                <p className="text-sm text-primary-foreground/70 font-light leading-relaxed">{nodes[activeNode].description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.p
          className="text-center text-primary-foreground/60 font-light max-w-2xl mx-auto mt-16 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Every GRPL engagement is assembled from this network: the right combination of strategic leadership and specialist execution for your specific challenge. No generalists pretending to be experts. No junior staff learning on your budget. Senior operators who have done this before, brought together by GRPL to deliver results for your business.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutNetwork;
