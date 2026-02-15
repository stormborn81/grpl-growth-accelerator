import { useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories, getAllFaqs } from "@/data/faqData";

const FAQ = () => {
  const allFaqs = getAllFaqs();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.grpl.com.au/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://www.grpl.com.au/faq",
      },
    ],
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions | Fractional CMO & Growth Services | GRPL"
        description="Answers to the most common questions about fractional CMO services, Chief Growth Officers, marketing audits, pricing, and how GRPL works with Australian businesses."
        canonical="https://www.grpl.com.au/faq"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground font-light mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">FAQ</span>
          </nav>

          {/* Hero */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground font-light mb-10 max-w-xl">
            Answers to the most common questions about GRPL's fractional CMO, growth leadership, and marketing services.
          </p>

          {/* Jump Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-12 scrollbar-hide">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className="shrink-0 px-4 py-2 text-xs font-medium rounded-full border border-border bg-secondary hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Sections */}
          {faqCategories.map((category) => (
            <FAQCategorySection key={category.id} category={category} />
          ))}

          {/* Bottom CTA */}
          <div className="mt-16 pt-12 border-t border-border text-center">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
              Still have questions?
            </h2>
            <p className="text-muted-foreground font-light mb-8 max-w-md mx-auto">
              We would rather talk than type. Book a free strategy call and get direct answers about your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book a Free Strategy Call</Link>
              </Button>
              <Link
                to="/growth-diagnostic"
                className="text-sm text-accent hover:text-accent/80 transition-colors font-medium"
              >
                Or take the Growth Diagnostic →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const FAQCategorySection = ({ category }: { category: typeof faqCategories[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      id={category.id}
      ref={ref}
      className="mb-12 scroll-mt-28"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-6">{category.heading}</h2>
      <Accordion type="single" collapsible className="w-full">
        {category.faqs.map((faq, i) => (
          <AccordionItem key={i} value={`${category.id}-${i}`}>
            <AccordionTrigger className="text-left font-semibold text-sm md:text-base">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-light leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
};

export default FAQ;
