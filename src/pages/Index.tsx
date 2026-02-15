import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

// Critical SEO sections - NOT lazy loaded
import TrustedBy from "@/components/TrustedBy";
import ProblemStatement from "@/components/ProblemStatement";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";

// Lazy load below-the-fold components
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Outcomes = lazy(() => import("@/components/Outcomes"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const About = lazy(() => import("@/components/About"));
const Team = lazy(() => import("@/components/Team"));
const Insights = lazy(() => import("@/components/Insights"));
const Locations = lazy(() => import("@/components/Locations"));
const CTA = lazy(() => import("@/components/CTA"));

const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <span className="animate-pulse text-muted-foreground">Loading...</span>
  </div>
);

const ErrorFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <p className="text-muted-foreground mb-4">Please refresh the page.</p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
      >
        Refresh Page
      </button>
    </div>
  </div>
);

const homepageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GRPL",
    "url": "https://www.grpl.com.au",
    "logo": "https://www.grpl.com.au/favicon.png",
    "description": "Enterprise-grade fractional CMO and Chief Growth Officer services for Australian businesses. A collective of senior marketing and growth leaders providing strategic leadership and execution.",
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "serviceType": ["Fractional CMO", "Chief Growth Officer", "Marketing Audit", "Brand Foundation", "Growth Projects", "Interim CMO"],
    "knowsAbout": ["Marketing Strategy", "Growth Leadership", "B2B Marketing", "Brand Strategy", "AI Search Optimisation", "Demand Generation"],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61-414-838-210",
      "contactType": "sales",
      "email": "LetsGo@GRPL.com.au"
    },
    "sameAs": [
      "https://www.linkedin.com/company/grplstrategy"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "GRPL - Fractional CMO & Growth Leadership",
    "description": "Enterprise-grade fractional CMO and Chief Growth Officer services for scaling ANZ businesses.",
    "url": "https://www.grpl.com.au",
    "provider": {
      "@type": "Organization",
      "name": "GRPL",
      "url": "https://www.grpl.com.au"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "serviceType": ["Fractional CMO", "Chief Growth Officer", "Marketing Strategy", "Marketing Audit", "Growth Leadership"]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a fractional CMO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A fractional CMO is a senior marketing executive who provides strategic leadership on a part-time or contract basis, giving businesses enterprise-grade marketing capability without the full-time salary."
        }
      },
      {
        "@type": "Question",
        "name": "How does GRPL's fractional CMO service work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GRPL embeds senior growth leadership into your business on a flexible basis. We define strategy, align teams, optimise channels, and drive measurable growth outcomes - all without the cost and commitment of a full-time executive hire."
        }
      },
      {
        "@type": "Question",
        "name": "Who is GRPL's service designed for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GRPL works with founders, CEOs, and leadership teams at scaling ANZ businesses who need senior marketing expertise but aren't ready for or don't need a full-time CMO."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between a fractional CMO and a marketing consultant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A marketing consultant typically advises from the outside. A fractional CMO from GRPL embeds into your leadership team, owns strategy and execution, leads your marketing function, and is accountable for growth outcomes."
        }
      }
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Fractional CMO & Chief Growth Officer Australia | GRPL"
        description="Enterprise-grade fractional CMO and Chief Growth Officer services for ANZ businesses $2M-$30M. Senior marketing leadership, strategy, and execution — without the full-time cost."
        canonical="https://www.grpl.com.au/"
        jsonLd={homepageJsonLd}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <main id="main-content">
          <Hero />
          <TrustedBy />
          <ProblemStatement />
          {/* Growth Diagnostic CTA */}
          <section className="py-16 md:py-20 bg-foreground text-background">
            <div className="container mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Not sure what you need? Start here.</h2>
              <p className="text-background/70 font-light mb-8 max-w-xl mx-auto">
                Take GRPL's free Growth Diagnostic. 3 minutes to discover your growth stage, map your marketing gaps, and get a personalised action plan. No login. No sales pitch. Just clarity.
              </p>
              <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85" asChild>
                <a href="/growth-diagnostic">Take the Diagnostic</a>
              </Button>
            </div>
          </section>
          <WhyChoose />
          <Services />
          <Suspense fallback={<SectionLoader />}>
            <HowItWorks />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Outcomes />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Team />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Insights />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Locations />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <CTA />
          </Suspense>
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default Index;
