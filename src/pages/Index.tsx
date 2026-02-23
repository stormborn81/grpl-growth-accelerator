import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

// Critical SEO sections - NOT lazy loaded
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import About from "@/components/About";
import CopperFormWidget from "@/components/CopperFormWidget";

// Lazy load below-the-fold components
const Outcomes = lazy(() => import("@/components/Outcomes"));
const TrustedBy = lazy(() => import("@/components/TrustedBy"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const UseCases = lazy(() => import("@/components/UseCases"));
const Team = lazy(() => import("@/components/Team"));
const CTA = lazy(() => import("@/components/CTA"));
const Insights = lazy(() => import("@/components/Insights"));

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

// All structured data (Organization, ProfessionalService, WebSite, Person)
// lives in the static index.html. FAQPage rich results are handled by /faq.
// No additional JSON-LD is injected here to avoid duplicate schema errors.

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Enterprise-Grade Fractional CMO & Growth Leadership | GRPL"
        description="GRPL delivers enterprise-grade fractional CMO and Chief Growth Officer services for ANZ businesses. Senior marketing leadership without the full-time cost."
        canonical="https://www.grpl.com.au/"
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
          {/* Diagnostic CTA */}
          <section className="py-16 md:py-20 bg-foreground text-background">
            <div className="container mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Not sure what you need? Start here.</h2>
              <p className="text-background/70 font-light mb-8 max-w-xl mx-auto">
                Take GRPL's free Growth Diagnostic. 3 minutes to understand where your marketing is stuck and what to do about it.
              </p>
              <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85" asChild>
                <a href="/growth-diagnostic">Take the Diagnostic</a>
              </Button>
            </div>
          </section>
          <WhyChoose />
          <Services />
          <About />
          <CopperFormWidget />
          <Suspense fallback={<SectionLoader />}>
            <Outcomes />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <TrustedBy />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <UseCases />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Team />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Insights />
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
