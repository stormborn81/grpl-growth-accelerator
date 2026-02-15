import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTABannerProps {
  headline: string;
  subtext: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTABanner = ({
  headline,
  subtext,
  buttonText = "Book a Strategy Call",
  buttonLink = "/contact",
}: CTABannerProps) => (
  <section className="py-16 md:py-20 bg-foreground text-background">
    <div className="container mx-auto px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">{headline}</h2>
      <p className="text-background/70 font-light mb-8 max-w-xl mx-auto">{subtext}</p>
      <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85" asChild>
        <Link to={buttonLink}>{buttonText}</Link>
      </Button>
    </div>
  </section>
);

export default CTABanner;
