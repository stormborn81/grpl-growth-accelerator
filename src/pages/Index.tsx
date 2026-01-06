import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Critical SEO sections - NOT lazy loaded
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import About from "@/components/About";

// Lazy load below-the-fold components
const Outcomes = lazy(() => import("@/components/Outcomes"));
const TrustedBy = lazy(() => import("@/components/TrustedBy"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const UseCases = lazy(() => import("@/components/UseCases"));
const Team = lazy(() => import("@/components/Team"));
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO />
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
          <WhyChoose />
          <Services />
          <About />
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
            <CTA />
          </Suspense>
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default Index;
