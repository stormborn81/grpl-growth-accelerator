import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const lines = [
  { text: "Most businesses do not have a marketing problem.", bold: false, accent: false, size: "normal" },
  { text: "They have a marketing leadership problem.", bold: true, accent: false, size: "normal" },
  { text: "They have agencies running campaigns with no strategic direction.", bold: false, accent: false, size: "normal" },
  { text: "They have marketing managers executing tactics nobody validated.", bold: false, accent: false, size: "normal" },
  { text: "They have dashboards full of metrics that do not connect to revenue.", bold: false, accent: false, size: "normal" },
  { text: "They have strategies beautifully presented in slide decks that nobody executes.", bold: false, accent: false, size: "normal" },
  { text: "PAUSE", bold: false, accent: false, size: "normal" },
  { text: "We built GRPL to fix this.", bold: true, accent: true, size: "large" },
  { text: "Not with more presentations.", bold: false, accent: false, size: "normal" },
  { text: "Not with another agency retainer.", bold: false, accent: false, size: "normal" },
  { text: "Not with a junior hire and a prayer.", bold: false, accent: false, size: "normal" },
  { text: "PAUSE", bold: false, accent: false, size: "normal" },
  { text: "With senior marketing leaders who plan, prioritise, and deliver.", bold: true, accent: false, size: "xlarge" },
];

const ManifestoLine = ({ line, index }: { line: typeof lines[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  if (line.text === "PAUSE") {
    return <div ref={ref} className="h-16 md:h-24" />;
  }

  const sizeClass = line.size === "xlarge"
    ? "text-2xl sm:text-3xl md:text-4xl"
    : line.size === "large"
      ? "text-xl sm:text-2xl md:text-3xl"
      : "text-lg sm:text-xl md:text-2xl";

  return (
    <motion.div
      ref={ref}
      className={`${sizeClass} ${line.bold ? "font-bold" : "font-light"} ${line.accent ? "text-accent" : "text-primary-foreground/90"} text-center max-w-3xl mx-auto`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {line.text}
    </motion.div>
  );
};

const AboutManifesto = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground">
      <div className="container mx-auto px-6 lg:px-8 space-y-8 md:space-y-12">
        {lines.map((line, i) => (
          <ManifestoLine key={i} line={line} index={i} />
        ))}
      </div>
    </section>
  );
};

export default AboutManifesto;
