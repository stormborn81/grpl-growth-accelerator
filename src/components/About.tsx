import { Button } from "@/components/ui/button";
import { LinkedinIcon } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              About GRPL
            </h2>
            <p className="text-lg text-muted-foreground">
              Executive marketing leadership for ambitious ANZ businesses
            </p>
          </div>

          <div className="bg-background p-8 lg:p-12 border-l-4 border-accent">
            <p className="text-lg leading-relaxed mb-6">
              GRPL partners with scale-ups and mid-market companies across Australia and New Zealand to accelerate growth through strategic marketing leadership. We bring enterprise-grade expertise without the enterprise-grade cost.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Our team consists of senior marketing executives who've built and scaled marketing functions at leading companies across healthcare, technology, financial services, and retail. We understand the challenges of rapid growth, limited resources, and the pressure to deliver measurable results.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Whether you're a founder looking to transition from founder-led marketing, a CEO needing strategic marketing oversight, or a growing company requiring additional capacity and capability—we provide the leadership and execution to drive sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg" className="group">
                <LinkedinIcon className="mr-2 w-5 h-5" />
                Connect on LinkedIn
              </Button>
              <Button variant="ghost" size="lg">
                Read Our Story
              </Button>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-black text-accent mb-2">15+</div>
              <div className="text-sm font-bold">Years Average Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-accent mb-2">$500M+</div>
              <div className="text-sm font-bold">Marketing Budgets Managed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-accent mb-2">50+</div>
              <div className="text-sm font-bold">Companies Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
