import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50, prefix: "", suffix: "+", label: "Businesses transformed", sublabel: "Across ANZ" },
  { value: 2, prefix: "$", suffix: "B+", label: "Client revenue influenced", sublabel: "Combined portfolio" },
  { value: 25, prefix: "", suffix: "+", label: "Years leadership experience", sublabel: "At the executive table" },
  { value: 6, prefix: "", suffix: "", label: "Diagnostic dimensions", sublabel: "The GRPL framework" },
];

const AnimatedNumber = ({ value, prefix, suffix, isInView }: { value: number; prefix: string; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span>{prefix}{count}{suffix}</span>;
};

const AboutStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span className="text-4xl md:text-5xl font-black text-accent block">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} isInView={isInView} />
              </span>
              <span className="text-sm font-semibold mt-2 block">{stat.label}</span>
              <span className="text-xs text-muted-foreground font-light block">{stat.sublabel}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
