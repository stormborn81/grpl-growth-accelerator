import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import AboutHero from "@/components/about/AboutHero";
import AboutManifesto from "@/components/about/AboutManifesto";
import AboutValues from "@/components/about/AboutValues";
import AboutOperatingSystem from "@/components/about/AboutOperatingSystem";
import AboutNetwork from "@/components/about/AboutNetwork";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";

import AboutInflectionPoint from "@/components/about/AboutInflectionPoint";

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GRPL",
  "url": "https://www.grpl.com.au",
  "description": "Enterprise-grade fractional CMO and Chief Growth Officer services for Australian businesses. A collective of senior marketing and growth leaders.",
  "areaServed": {
    "@type": "Country",
    "name": "Australia"
  },
  "knowsAbout": ["Fractional CMO", "Chief Growth Officer", "Marketing Audit", "Brand Foundation", "Growth Projects", "Interim CMO", "Marketing Strategy", "Growth Leadership", "B2B Marketing", "Brand Strategy", "AI Search Optimisation", "Demand Generation"]
};

const aboutFaqs = [
  {
    question: "Is GRPL just one person?",
    answer: "No. GRPL is a collective of senior marketing and growth leaders, each one a proven operator in their domain. Every engagement is led by a senior strategic leader and supported by the right combination of specialist capability from the GRPL network. You get the strategic depth of a senior executive with the execution breadth of an entire team. The model is designed so your business has access to exactly the capability it needs, scaled to your growth stage and budget."
  },
  {
    question: "What does \"enterprise-grade\" mean?",
    answer: "Enterprise-grade means applying the strategic frameworks, measurement discipline, and leadership rigour used by large corporations, but adapted for the speed, pragmatism, and resource constraints of growing businesses. It means your marketing strategy is built on evidence and tied to revenue, not based on guesswork and measured in vanity metrics. It means having a marketing leader at the table who has operated at scale and brings that capability to your business."
  },
  {
    question: "How does GRPL work differently from a marketing agency?",
    answer: "An agency executes campaigns across many clients simultaneously. GRPL embeds inside your business as a strategic leader, setting direction, building teams, choosing agencies, and being accountable for commercial outcomes. We do not compete with agencies. We make them significantly more effective by providing the strategic layer that ensures agency work is aligned to business objectives and measured against revenue contribution."
  },
  {
    question: "What industries does GRPL work with?",
    answer: "GRPL works with B2B and B2C businesses across technology, SaaS, fintech, professional services, health and biotech, and high-growth companies between $2M and $30M revenue. The common thread is businesses at a growth inflection point that need experienced marketing leadership, not more marketing tactics. We operate across Australia with a particular focus on Sydney, Melbourne, Brisbane, and Perth."
  },
  {
    question: "What does a typical engagement look like?",
    answer: "Every engagement begins with GRPL's six-dimension marketing diagnostic (4 weeks). This is followed by strategic planning and execution, typically structured as a fractional CMO (2-4 days per week) or Chief Growth Officer engagement. Most clients engage for 6-12 months, though some retain the fractional model as their permanent structure. There are no lock-in contracts after the initial diagnostic period. Engagements start at $8,000 per month."
  },
  {
    question: "How do I know if GRPL is right for my business?",
    answer: "The quickest way to find out is to take the free Growth Diagnostic, a 3-minute interactive assessment that identifies where your marketing gaps are and which GRPL service is most likely to have the highest impact. Alternatively, book a free strategy call and we will have a direct conversation about your situation."
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="About GRPL | Marketing & Growth Leadership"
        description="GRPL is a collective of senior marketing leaders providing fractional CMO and Chief Growth Officer services to ANZ businesses."
        canonical="https://www.grpl.com.au/about"
        jsonLd={aboutJsonLd}
      />
      <Header />
      <main>
        <AboutHero />
        <AboutManifesto />
        <AboutValues />
        <AboutOperatingSystem />
        <AboutNetwork />
        <AboutPhilosophy />
        <AboutInflectionPoint />

        <CTABanner
          headline="Ready to stop guessing and start building?"
          subtext="Every GRPL engagement starts with a conversation. Let's talk about where your business is, where it needs to be, and what is actually standing in the way."
          buttonText="Book a Strategy Call"
          buttonLink="/contact"
        />

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <FAQSection faqs={aboutFaqs} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
