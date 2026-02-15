import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const checkItems = [
  "You are between $2M and $30M in revenue and growth has stalled or become chaotic.",
  "You have outgrown founder-led marketing but a full-time CMO is not yet the right move.",
  "You are spending on marketing but cannot connect it to revenue with confidence.",
  "Your marketing feels tactical — lots of activity, no strategic coherence.",
  "You have hired marketing people but nobody is leading the function.",
  "You know you need to invest in brand and positioning but do not know where to start.",
  "Your board or investors are asking about marketing strategy and you do not have a clear answer.",
];

const AboutInflectionPoint = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Built for Businesses at the Inflection Point</h2>
          <p className="text-muted-foreground font-light">GRPL works with a specific type of business. If this sounds like you, we should talk.</p>
        </motion.div>

        <div className="space-y-5">
          {checkItems.map((item, i) => {
            const itemRef = useRef<HTMLDivElement>(null);
            const itemInView = useInView(itemRef, { once: true, margin: "-20px" });

            return (
              <motion.div
                key={i}
                ref={itemRef}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={itemInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <motion.div
                  className="shrink-0 w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center mt-0.5"
                  initial={{ scale: 0 }}
                  animate={itemInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2, type: "spring" }}
                >
                  <Check className="h-3.5 w-3.5 text-accent" />
                </motion.div>
                <p className="text-sm md:text-base text-foreground/80 font-light leading-relaxed">{item}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center space-y-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-muted-foreground font-light text-sm">
            If three or more of these resonate, the next step is a conversation — no pitch, no commitment. Just a candid discussion about where you are and whether GRPL is the right fit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book a Free Strategy Call</Link>
            </Button>
            <Link
              to="/growth-diagnostic"
              className="text-sm text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Or take the Growth Diagnostic to find out where your gaps are →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutInflectionPoint;
