import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Outcomes from "@/components/Outcomes";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import UseCases from "@/components/UseCases";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <Outcomes />
        <TrustedBy />
        <Testimonials />
        <UseCases />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
