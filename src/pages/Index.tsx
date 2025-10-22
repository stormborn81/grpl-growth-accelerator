import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load below-the-fold components
const WhyChoose = lazy(() => import("@/components/WhyChoose"));
const Outcomes = lazy(() => import("@/components/Outcomes"));
const TrustedBy = lazy(() => import("@/components/TrustedBy"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const UseCases = lazy(() => import("@/components/UseCases"));
const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Team = lazy(() => import("@/components/Team"));
const CTA = lazy(() => import("@/components/CTA"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <WhyChoose />
          <Outcomes />
          <TrustedBy />
          <Testimonials />
          <UseCases />
          <Services />
          <About />
          <Team />
          <CTA />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
