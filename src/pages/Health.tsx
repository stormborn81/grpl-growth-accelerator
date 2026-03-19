import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/utils/analytics";
import {
  Stethoscope,
  Dumbbell,
  Sparkles,
  Apple,
  Scale,
  Brain,
  HeartPulse,
  Building2,
  ArrowRight,
  ChevronRight,
  Globe,
  Users,
  BarChart3,
} from "lucide-react";

const SITE_URL = "https://www.grpl.com.au";

const healthCategories = [
  { icon: Stethoscope, title: "Medical & Diagnostics", examples: "Clinics, pathology, specialist practices, digital health platforms, healthtech SaaS" },
  { icon: Dumbbell, title: "Fitness & Movement", examples: "Gyms, boutique studios, fitness technology, events, recovery" },
  { icon: Sparkles, title: "Wellness & Recovery", examples: "Recovery centres, wellness spaces, sauna/ice bath concepts, float therapy, retreats" },
  { icon: Apple, title: "Nutrition & Supplements", examples: "DTC brands, functional food, clinical nutrition, meal delivery" },
  { icon: Scale, title: "Weight Management", examples: "GLP-1 clinics, weight management programs, body composition services, compounding" },
  { icon: Brain, title: "Mental Health", examples: "Digital therapy platforms, employer wellness programs, practitioner networks" },
  { icon: HeartPulse, title: "Longevity & Optimisation", examples: "Longevity clinics, preventive health, biohacking, consumer health testing" },
  { icon: Building2, title: "Health Infrastructure", examples: "Health tech, insurance, health data platforms, policy, workforce solutions" },
];

const services = [
  { service: "Fractional CMO", description: "Senior marketing leadership 2-3 days per week. Strategy, team management, execution oversight, board-level reporting." },
  { service: "Go-to-Market Strategy", description: "Market entry, positioning, channel strategy, launch planning. For new concepts, new markets, and new verticals." },
  { service: "Brand Architecture", description: "Positioning, visual identity systems, tone of voice, brand hierarchy for multi-location or multi-brand health businesses." },
  { service: "Growth Frameworks", description: "Funnel design, conversion optimisation, unit economics, metrics architecture, and measurement systems that actually work." },
  { service: "Healthcare Marketing Strategy", description: "Regulatory-aware marketing planning, clinical credibility positioning, patient/consumer acquisition, referral network development." },
  { service: "Marketing Restructure", description: "Team structure, capability assessment, process design, tech stack audit, and agency/vendor management." },
  { service: "Exit & Investment Preparation", description: "Growth narrative development, marketing due diligence support, brand valuation positioning for PE, VC, or acquisition." },
];

const credentials = [
  { company: "HealthEngine", subtitle: "Healthtech / SaaS", description: "CMO. Built the marketing function from the ground up. Redefined B2B and B2C go-to-market strategy. Established the go-to-market for their AI product launch. Led brand, demand generation, and growth across Australia's largest healthtech platform." },
  { company: "Medx Finance", subtitle: "Medical Finance", description: "Growth Lead. Specialist medical lending. Scaled to top 25 broker in Australia in under 3 years. Built acquisition funnels, referral partnerships, and brand positioning in a regulated financial services environment serving health professionals." },
  { company: "Amazon Australia / Big Red Group", subtitle: "Enterprise Marketing", description: "Senior Marketing Leadership. Launched Amazon Australia. Scaled Big Red Group brands through COVID. Built multi-brand architectures across consumer portfolios. Enterprise-scale marketing operations and go-to-market execution." },
  { company: "Made One", subtitle: "Health Economy Media", description: "Co-founder. Australia's health economy media brand. Covering the people, companies, and capital shaping the health industry. Publisher of the Wellness 2.0 insight series." },
];

const stats = [
  { value: "15+", label: "Years in Health Marketing" },
  { value: "$126B+", label: "Australian Wellness Economy" },
  { value: "CMO-Level", label: "Strategy, Fractional Cost" },
  { value: "Made One", label: "Intelligence Network" },
];

const proofPoints = [
  "Helped a telehealth startup define positioning and launch to market in 90 days",
  "Restructured marketing for a 12-location allied health group",
  "Built go-to-market strategy for a GLP-1 clinic entering the Australian market",
];

const jsonLdSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GRPL - Health Economy Growth Strategy",
    description: "Fractional CMO and growth leadership for health, wellness, fitness, and medical businesses in Australia.",
    url: `${SITE_URL}/health`,
    areaServed: { "@type": "Country", name: "Australia" },
    serviceType: "Fractional CMO",
    provider: {
      "@type": "Organization",
      name: "GRPL",
      url: SITE_URL,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ConsultingService",
    name: "Health Economy Marketing Consulting",
    description: "Enterprise-grade fractional CMO services for health, wellness, fitness, medical, and longevity businesses across Australia and New Zealand.",
    url: `${SITE_URL}/health`,
    areaServed: { "@type": "Country", name: "Australia" },
    provider: {
      "@type": "Organization",
      name: "GRPL",
      url: SITE_URL,
    },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const Health = () => {
  useEffect(() => {
    trackEvent("health_page_view");
    window.scrollTo(0, 0);
  }, []);

  const handleBookCall = (source: string) => {
    trackEvent("book_call_click", { source });
    window.open("https://calendar.app.google/uQKcAZf3Z9cbxe9o8", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Growth Strategy for the Health Economy | Fractional CMO | GRPL"
        description="Fractional CMO and growth leadership for health, wellness, fitness, and medical businesses in Australia. Enterprise-grade strategy from operators who've built in the health economy."
        canonical={`${SITE_URL}/health`}
        ogType="website"
        jsonLd={jsonLdSchema}
      />
      <Header />

      {/* Breadcrumb */}
      <div className="pt-20 pb-0">
        <div className="container mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <ol className="flex items-center gap-1.5">
              <li><Link to="/" className="hover:text-foreground transition-colors">GRPL</Link></li>
              <li><ChevronRight className="h-3 w-3" /></li>
              <li>Industries</li>
              <li><ChevronRight className="h-3 w-3" /></li>
              <li className="text-foreground">Health</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Subtle animated mesh background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,hsl(var(--health-accent)),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,hsl(var(--health-accent)),transparent_60%)]" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 font-medium"
            >
              Health Economy Practice
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
            >
              Growth Strategy for the Health Economy
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Fractional CMO and growth leadership for health, wellness, fitness, and medical businesses navigating the most complex market in Australia.
            </motion.h2>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button
                variant="hero"
                size="lg"
                className="bg-health-accent hover:bg-health-accent/85 text-white"
                onClick={() => handleBookCall("health_hero")}
              >
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="heroSecondary"
                size="lg"
                onClick={() => {
                  trackEvent("cta_click", { cta_name: "see_how_we_work", source: "health_hero" });
                  document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See how we work with health businesses
              </Button>
            </motion.div>

            <motion.p variants={fadeUp} className="text-xs text-muted-foreground font-light">
              Formerly CMO at HealthEngine · Growth lead at Medx Finance · Co-founder, Made One
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - THE PROBLEM */}
      <section id="problem" className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-10">
              The Health Economy Is Worth $6.8 Trillion Globally. Most Health Businesses Still Market Like It's 2015.
            </motion.h2>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
              <motion.p variants={fadeUp}>
                The health industry is undergoing the biggest structural shift in decades. AI is reshaping how consumers access care. GLP-1 drugs are rewriting the fitness and nutrition playbook. Telehealth has unbundled the GP model. Longevity clinics are moving mainstream. Boutique wellness concepts are replacing traditional gyms.
              </motion.p>

              <motion.div variants={fadeUp} className="py-6 border-y border-border">
                <p className="text-2xl md:text-3xl font-black text-foreground leading-tight">
                  Australia's wellness economy alone has surged past US$126 billion, growing at nearly 11% year-on-year.
                </p>
              </motion.div>

              <motion.p variants={fadeUp}>
                But the businesses winning in this environment aren't the ones with the best clinical outcomes or the most innovative product. They're the ones with the clearest market positioning, the smartest go-to-market strategy, and senior marketing leadership that can adapt faster than the market is moving.
              </motion.p>

              <motion.p variants={fadeUp}>
                Most health businesses don't have that. They have founders who understand health but not growth. Marketing teams executing tactics without a strategy. Brands that look like every other clinic, studio, or supplement company in their category.
              </motion.p>

              <motion.p variants={fadeUp} className="text-foreground font-medium">
                That's the gap GRPL fills.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - WHAT WE DO */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6 max-w-3xl">
              Enterprise-Grade Growth Leadership. Deep Health Economy Expertise.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-16 max-w-3xl">
              GRPL provides fractional CMO and Chief Growth Officer services for health businesses across Australia. We embed at the leadership level, inside your business, alongside your team, bringing the strategic thinking, growth frameworks, and execution capability that most health companies can't access without a full-time C-suite hire.
            </motion.p>

            {/* Health categories grid */}
            <motion.div variants={fadeUp}>
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8 font-medium">We work across the health economy</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {healthCategories.map((cat) => (
                  <div key={cat.title} className="border border-border rounded-lg p-5 hover:border-health-accent/30 transition-colors group">
                    <cat.icon className="h-5 w-5 text-muted-foreground group-hover:text-health-accent transition-colors mb-3" />
                    <h4 className="font-bold text-sm mb-1.5">{cat.title}</h4>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">{cat.examples}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Services table */}
            <motion.div variants={fadeUp} className="mt-20">
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8 font-medium">What we deliver</h3>
              <div className="divide-y divide-border">
                {services.map((s) => (
                  <div key={s.service} className="py-5 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-8">
                    <h4 className="font-bold text-sm">{s.service}</h4>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - WHY GRPL IN HEALTH */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6 max-w-3xl">
              We're Not a Marketing Agency. We're a Growth Partner Who's Built Inside the Health Economy.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-3xl">
              GRPL's founder, Matt Gudge, has spent 15+ years in senior marketing and growth leadership across healthcare, healthtech, wellness, fitness, and consumer health.
            </motion.p>

            {/* Credential cards */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {credentials.map((cred) => (
                <div key={cred.company} className="border border-border rounded-lg p-6 bg-background">
                  <p className="text-xs uppercase tracking-[0.15em] text-health-accent font-medium mb-1">{cred.subtitle}</p>
                  <h4 className="font-black text-lg mb-3">{cred.company}</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{cred.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Differentiator blocks */}
            <motion.div variants={fadeUp} className="space-y-8 max-w-3xl">
              <div>
                <h4 className="font-black text-base mb-2">We embed, we don't just advise.</h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  GRPL operates at the leadership level, inside your business, alongside your team, accountable for outcomes. This isn't a monthly strategy PDF. It's a fractional CMO who shows up, runs the work, and drives results.
                </p>
              </div>
              <div>
                <h4 className="font-black text-base mb-2">We understand health's unique constraints.</h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Regulatory complexity, clinical credibility requirements, consumer trust dynamics, fragmented audiences, practitioner referral networks, and the pace at which this market is shifting. We've operated inside these constraints, not just advised around them.
                </p>
              </div>
              <div>
                <h4 className="font-black text-base mb-2">This isn't theory. It's pattern recognition.</h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  We've built the brands, scaled the businesses, run the teams, and operated in the exact roles we're advising on. Every recommendation comes from doing the work, across healthtech, medical finance, wellness, fitness, and consumer health.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - MADE ONE ADVANTAGE */}
      <section className="py-20 md:py-28 bg-health-dark text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
              Backed by Made One Intelligence
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-14 max-w-3xl">
              GRPL is the strategic consulting arm of the same team behind Made One, Australia's health economy media brand. That gives our health clients something no other marketing consultancy can offer: real-time industry intelligence wired directly into their growth strategy.
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <Globe className="h-6 w-6 text-white/50 mb-4" />
                <h4 className="font-black text-base mb-2">Real-Time Industry Intelligence</h4>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  We're tracking the business moves, capital flows, regulatory shifts, and consumer trends reshaping the health economy every day. Your strategy is informed by what's happening now, not last quarter's report.
                </p>
              </div>
              <div>
                <Users className="h-6 w-6 text-white/50 mb-4" />
                <h4 className="font-black text-base mb-2">Health Economy Network</h4>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Access to founders, operators, investors, and executives across the Australian health industry through the Made One community. Strategic introductions, partnership opportunities, and market intelligence you can't get from a marketing agency.
                </p>
              </div>
              <div>
                <BarChart3 className="h-6 w-6 text-white/50 mb-4" />
                <h4 className="font-black text-base mb-2">Content Authority & Market Data</h4>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Leverage Made One's original research and reports, including the Wellness 2.0 insight series, to ground your strategy in data, not assumptions. Understand where the market is going before your competitors do.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href="https://madeone.world"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white border border-white/20 rounded-lg px-5 py-3 transition-colors hover:border-white/40"
                onClick={() => trackEvent("cta_click", { cta_name: "made_one_link", source: "health_made_one" })}
              >
                Read our latest: Wellness 2.0 — The Health Economy Is Being Rebuilt <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - SOCIAL PROOF */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-10">
              Trusted by Health Businesses Across Australia
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-4 mb-14">
              {proofPoints.map((point) => (
                <div key={point} className="border border-border rounded-lg p-5">
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{point}</p>
                </div>
              ))}
            </motion.div>

            {/* Stat bar */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-black tracking-tight">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-light mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 - CTA */}
      <section className="py-20 md:py-28 bg-health-accent-light">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
              Let's Talk Growth
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-4">
              If you're a health business founder, CEO, or board looking for senior marketing leadership without the full-time cost, we should talk.
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm text-muted-foreground font-light leading-relaxed mb-10">
              GRPL works with a limited number of health clients at any one time to ensure depth, strategic focus, and real accountability. If that sounds like what your business needs, book a strategy call.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="hero"
                size="lg"
                className="bg-health-accent hover:bg-health-accent/85 text-white"
                onClick={() => handleBookCall("health_cta")}
              >
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Button>
              <a
                href="mailto:matt@grpl.com.au"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Or email matt@grpl.com.au
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Health;
