import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "GRPL didn't just give us a logo and a tagline, they built our entire market presence from scratch. They developed our positioning, crafted a distinctive voice and visual system, and put together the tools and playbooks we needed to launch. The result was a confident entry into the market: Clients understood our story, early partners knew what we stood for, and our team had a clear roadmap for growth.",
    author: "Mark Grace",
    title: "Founder",
    company: "Mangrove Digital",
  },
  {
    quote: "Matt's strategic thinking is one of his greatest assets. He designed a holistic marketing strategy that aligned with Healthengine's growth goals, bringing coherence to disparate channels, setting clear performance metrics, and ensuring every campaign delivered measurable return.",
    author: "Dan Stinton",
    title: "CEO",
    company: "Healthengine",
  },
  {
    quote: "GRPL built our brand from the ground up and embedded the systems, processes and creative thinking that allowed us to lend over a billion dollars in our first two years. Their fractional CMO service isn't just consultancy; they operate as part of the leadership team. Together we built a sustainable lead engine, integrated our technology stack, led a martech transformation and scaled our audience and pipeline. GRPL drives real, measurable impact.",
    author: "Todd O'Reilly",
    title: "Founder & CEO",
    company: "MedX Finance",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-secondary p-8 rounded-2xl">
                <p className="text-foreground/80 mb-8 leading-relaxed font-light text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border/50 pt-6">
                  <p className="font-bold text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground mt-1 font-light">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
