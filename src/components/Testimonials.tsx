import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "GRPL brought clarity and direction to our marketing strategy. Within three months, we saw measurable improvements in lead quality and conversion rates. Their ability to translate strategy into actionable plans was transformative.",
    author: "Jennifer Walsh",
    title: "Chief Revenue Officer",
    company: "HealthTech Innovators",
  },
  {
    quote: "As a founder wearing too many hats, having GRPL step in as our fractional CMO was game-changing. They gave us the strategic oversight we needed while building our internal team's capabilities. Best investment we made.",
    author: "David Kim",
    title: "Founder & CEO",
    company: "FinServe Solutions",
  },
  {
    quote: "The combination of strategic thinking and hands-on execution sets GRPL apart. They don't just tell you what to do—they roll up their sleeves and make it happen. Our marketing is now a true growth driver.",
    author: "Rachel Patel",
    title: "COO",
    company: "Digital Commerce Group",
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
