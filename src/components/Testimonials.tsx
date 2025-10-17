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
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from executives who've partnered with GRPL
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all border-t-4 border-accent"
            >
              <Quote className="w-10 h-10 text-accent mb-4" />
              <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-4">
                <div className="font-black text-lg">{testimonial.author}</div>
                <div className="text-sm font-medium text-muted-foreground">{testimonial.title}</div>
                <div className="text-sm text-accent font-bold">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
