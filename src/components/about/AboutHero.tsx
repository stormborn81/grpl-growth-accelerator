import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-foreground text-primary-foreground px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Enterprise-Grade
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Marketing Leadership.
          </motion.span>
          <motion.span
            className="block text-accent mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Without the Enterprise Price Tag.
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-8 text-lg md:text-xl text-primary-foreground/70 font-light max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          GRPL is a collective of senior marketing and growth leaders who embed inside ANZ businesses to build marketing functions that actually drive revenue. Not agencies. Not consultants with slide decks. Operators.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-primary-foreground/40"
        >
          <span className="text-xs font-light tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
