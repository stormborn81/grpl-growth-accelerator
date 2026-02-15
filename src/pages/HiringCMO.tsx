import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const hiringJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.grpl.com.au/" },
      { "@type": "ListItem", "position": 2, "name": "Hiring a CMO", "item": "https://www.grpl.com.au/hiring-cmo" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "GRPL - CMO Hiring Advisory",
    "description": "Expert guidance defining the right CMO role, skillset, and hiring brief so you hire the marketing leader your business actually needs.",
    "url": "https://www.grpl.com.au/hiring-cmo",
    "provider": { "@type": "Organization", "name": "GRPL", "url": "https://www.grpl.com.au" },
    "areaServed": { "@type": "Country", "name": "Australia" },
    "serviceType": "CMO Hiring Advisory"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do most senior marketing hires fail?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most senior marketing hires fail because the role is defined around a résumé rather than business reality, founders hire for experience instead of alignment, and success metrics aren't defined upfront."
        }
      },
      {
        "@type": "Question",
        "name": "How does GRPL help with hiring a CMO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GRPL audits your current marketing capability, defines your growth priorities, translates that into the exact profile and skillset you need, and crafts a job description designed to attract the right leader."
        }
      },
      {
        "@type": "Question",
        "name": "What do I get at the end of a GRPL hiring engagement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every engagement ends with a crystal-clear hiring brief you can take straight to market or use to evaluate existing candidates, including role definition, success measures, and an onboarding plan."
        }
      },
      {
        "@type": "Question",
        "name": "Should I hire a fractional CMO or a full-time CMO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your stage and budget. A fractional CMO gives you senior leadership at a fraction of the cost while you scale. GRPL can help you determine which option is right for your business before you commit."
        }
      }
    ]
  }
];

const HiringCMO = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Hiring a CMO? Get It Right First Time | GRPL"
        description="Don't miss on your most important growth hire. GRPL helps define the right CMO role, skillset, and hiring brief for scaling ANZ businesses."
        canonical="https://www.grpl.com.au/hiring-cmo"
        jsonLd={hiringJsonLd}
      />
      <Header />
      <main className="pt-14">
        <nav aria-label="Breadcrumb" className="container mx-auto px-6 lg:px-8 pt-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground max-w-4xl mx-auto">
            <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
            <li>/</li>
            <li className="text-foreground">Hiring a CMO</li>
          </ol>
        </nav>
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Hiring a CMO?
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
                Don't miss on the most important growth hire you'll ever make.
              </p>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Most founders don't miss because they pick the wrong marketer.<br />
                They miss because they didn't know what they needed before they hired.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                The market for marketing is complex, brand, performance, growth, product, data, martech and more. It's changing faster than ever. The right CMO can accelerate your business; the wrong one can stall it for years.
              </p>
              <p className="text-lg font-medium text-foreground">
                Before you hire, get clear on what success really looks like and hire the marketer ready to take on your growth challenge.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-border/50"></div>
          </div>
        </div>

        {/* Value Proposition */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Hire Once. Hire Right. Build Momentum.
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                GRPL works with founders, boards and leadership teams before they make a senior marketing hire - defining the role, the skillset, and the expectations that will drive growth.
              </p>
              <div className="space-y-4">
                <p className="text-lg text-foreground/80">
                  We'll work directly with you and your existing marketing team to:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="text-lg text-foreground/80 leading-relaxed flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Audit your current marketing capability and identify the true gaps.</span>
                  </li>
                  <li className="text-lg text-foreground/80 leading-relaxed flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Define your top growth priorities and what the next stage demands.</span>
                  </li>
                  <li className="text-lg text-foreground/80 leading-relaxed flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Translate that into the exact profile, behaviours, skills, and mindset you need.</span>
                  </li>
                  <li className="text-lg text-foreground/80 leading-relaxed flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Craft the perfect job description designed to attract and retain the right leader.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <p className="text-lg font-medium text-foreground">
                  The result?
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Absolute clarity on who you're hiring, why, and how they'll create value from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-border/50"></div>
          </div>
        </div>

        {/* Why Hires Miss */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Why Most Senior Marketing Hires Miss
              </h2>
              <ul className="space-y-3 pl-6">
                <li className="text-lg text-foreground/80 leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>The role is defined around a résumé, not a reality.</span>
                </li>
                <li className="text-lg text-foreground/80 leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Founders hire for experience instead of alignment.</span>
                </li>
                <li className="text-lg text-foreground/80 leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Teams confuse brand, growth, and product leadership.</span>
                </li>
                <li className="text-lg text-foreground/80 leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Success isn't defined, so no one knows what good looks like.</span>
                </li>
              </ul>
              <div className="pt-4 space-y-2">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Hiring the wrong CMO is expensive, in money, time, and momentum.
                </p>
                <p className="text-lg font-medium text-foreground">
                  Hiring right is transformative.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-border/50"></div>
          </div>
        </div>

        {/* The GRPL Approach */}
        <section className="py-24 md:py-32 bg-grpl-black text-grpl-white relative overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 opacity-[0.04] pointer-events-none hidden lg:block">
            <img src="/src/assets/octagon-outline.png" alt="" className="w-full h-full" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-grpl-white">
                  The GRPL Approach
                </h2>
                <div className="w-12 h-0.5 bg-accent mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                <div className="text-center relative group">
                  <div className="absolute inset-0 -m-8" 
                       style={{clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"}}>
                    <div className="w-full h-full border border-accent/20 group-hover:border-accent/40 transition-colors duration-500"></div>
                  </div>
                  <div className="relative mb-6">
                    <div className="text-5xl md:text-6xl font-black tracking-tight text-grpl-white">1</div>
                  </div>
                  <div className="relative space-y-3">
                    <h3 className="text-xl font-bold text-grpl-white">Define the Gap</h3>
                    <p className="text-base text-grpl-white/70 font-light leading-relaxed">
                      We assess your existing marketing capability, structure and strategy to understand what's really missing, not just who's missing.
                    </p>
                  </div>
                </div>

                <div className="text-center relative group">
                  <div className="absolute inset-0 -m-8" 
                       style={{clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"}}>
                    <div className="w-full h-full border border-accent/20 group-hover:border-accent/40 transition-colors duration-500"></div>
                  </div>
                  <div className="relative mb-6">
                    <div className="text-5xl md:text-6xl font-black tracking-tight text-grpl-white">2</div>
                  </div>
                  <div className="relative space-y-3">
                    <h3 className="text-xl font-bold text-grpl-white">Clarify the Role</h3>
                    <p className="text-base text-grpl-white/70 font-light leading-relaxed">
                      We translate your commercial goals into a clear growth mandate and leadership scope, ensuring the role reflects where you're going, not just where you are.
                    </p>
                  </div>
                </div>

                <div className="text-center relative group">
                  <div className="absolute inset-0 -m-8" 
                       style={{clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"}}>
                    <div className="w-full h-full border border-accent/20 group-hover:border-accent/40 transition-colors duration-500"></div>
                  </div>
                  <div className="relative mb-6">
                    <div className="text-5xl md:text-6xl font-black tracking-tight text-grpl-white">3</div>
                  </div>
                  <div className="relative space-y-3">
                    <h3 className="text-xl font-bold text-grpl-white">Craft the Hire</h3>
                    <p className="text-base text-grpl-white/70 font-light leading-relaxed">
                      We co-design the job description, success measures, and onboarding plan that sets your new leader (and your business) up to win.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-16">
                <p className="text-lg text-grpl-white/70 leading-relaxed max-w-3xl mx-auto">
                  Every engagement ends with a crystal-clear hiring brief you can take straight to market or use to evaluate existing candidates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-border/50"></div>
          </div>
        </div>

        {/* Why GRPL */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Why GRPL
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We've led marketing across some of Australia's most ambitious brands, from start-up to scale-up, across B2B, B2C and Marketplaces and managed $ millions in media, technology and teams.<br />
                We've seen, worked for, worked as and stepped into support marketers across every discipline and know what it takes to win. Hire the role, not the person!<br />
                We know what good looks like because we've been in the seat.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our work blends strategic insight with practical execution, no theory, just clarity that drives commercial outcomes.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-border/50"></div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Make Your Next Marketing Hire Your Best One
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Before you post that job ad, have the conversation that could save you months of wasted time and the wrong hire.
              </p>
              <p className="text-lg font-medium text-foreground">
                Book a 30-minute strategy call to align your business, your team, and your next marketing leader.
              </p>
              <div className="pt-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open('https://calendar.app.google/uQKcAZf3Z9cbxe9o8', '_blank')}
                >
                  Book a Discovery Call →
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HiringCMO;
