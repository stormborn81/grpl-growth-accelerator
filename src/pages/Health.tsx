import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/utils/analytics";
import buttonOctagon from "@/assets/button-octagon.png";
import octagonOutline from "@/assets/octagon-outline.png";
import octagonRings from "@/assets/octagon-rings.png";
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
  { company: "Big Red Group", subtitle: "Enterprise Marketing", description: "Senior Marketing Leadership. Scaled Big Red Group brands through COVID. Built multi-brand architectures across consumer portfolios. Enterprise-scale marketing operations and go-to-market execution." },
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

      {/* SECTION 1 - HERO */}
      <section className="relative min-h-screen flex items-center bg-background pt-14 overflow-hidden">
        {/* Octagon background decoration */}
        <div className="absolute -top-10 -right-20 w-96 h-96 opacity-[0.03] pointer-events-none hidden lg:block">
          <img src={octagonOutline} alt="" className="w-full h-full" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-6xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-8 text-left"
            >
              {/* Breadcrumb */}
              <motion.nav variants={fadeUp} aria-label="Breadcrumb" className="text-xs text-muted-foreground">
                <ol className="flex items-center gap-1.5">
                  <li><Link to="/" className="hover:text-foreground transition-colors">GRPL</Link></li>
                  <li><ChevronRight className="h-3 w-3" /></li>
                  <li>Industries</li>
                  <li><ChevronRight className="h-3 w-3" /></li>
                  <li className="text-foreground">Health</li>
                </ol>
              </motion.nav>

              <motion.p
                variants={fadeUp}
                className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-medium"
              >
                Health Economy Practice
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight max-w-4xl"
              >
                Growth Strategy for the
                <span className="block mt-2">Health Economy</span>
              </motion.h1>

              <motion.div variants={fadeUp} className="w-16 h-0.5 bg-accent" />

              <motion.div variants={fadeUp} className="relative">
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                  Fractional CMO and growth leadership for health, wellness, fitness, and medical businesses navigating the most complex market in Australia.
                </p>
                <div className="absolute -bottom-2 left-0 w-32 h-0.5 bg-gradient-to-r from-accent via-accent to-transparent" />
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col items-start gap-2 pt-8">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={() => handleBookCall("health_hero")}
                  >
                    Book a Strategy Call
                    <img src={buttonOctagon} alt="" className="ml-2 h-3 w-3" />
                  </Button>
                  <Button
                    variant="heroSecondary"
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={() => {
                      trackEvent("cta_click", { cta_name: "see_how_we_work", source: "health_hero" });
                      document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    See how we work with health businesses
                    <img src={buttonOctagon} alt="" className="ml-2 h-3 w-3 opacity-50" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground font-light">
                  Formerly CMO at HealthEngine · Growth lead at Medx Finance · Co-founder, Made One
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE PROBLEM */}
      <section id="problem" className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4 max-w-4xl">
                The Health Economy Is Worth $6.8 Trillion Globally. Most Health Businesses Still Market Like It's 2015.
              </motion.h2>

              <motion.div variants={fadeUp} className="w-12 h-0.5 bg-accent mb-12" />

              <div className="max-w-3xl space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <motion.p variants={fadeUp}>
                  The health industry is undergoing the biggest structural shift in decades. AI is reshaping how consumers access care. GLP-1 drugs are rewriting the fitness and nutrition playbook. Telehealth has unbundled the GP model. Longevity clinics are moving mainstream. Boutique wellness concepts are replacing traditional gyms.
                </motion.p>

                <motion.div variants={fadeUp} className="py-8 border-y border-border">
                  <p className="text-3xl md:text-4xl font-black text-foreground leading-tight">
                    Australia's wellness economy alone has surged past US$126 billion, growing at nearly 11% year-on-year.
                  </p>
                </motion.div>

                <motion.p variants={fadeUp}>
                  But the businesses winning in this environment aren't the ones with the best clinical outcomes or the most innovative product. They're the ones with the clearest market positioning, the smartest go-to-market strategy, and senior marketing leadership that can adapt faster than the market is moving.
                </motion.p>

                <motion.p variants={fadeUp}>
                  Most health businesses don't have that. They have founders who understand health but not growth. Marketing teams executing tactics without a strategy. Brands that look like every other clinic, studio, or supplement company in their category.
                </motion.p>

                <motion.p variants={fadeUp} className="text-foreground font-medium text-xl">
                  That's the gap GRPL fills.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - WHAT WE DO */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
                  Enterprise-Grade Growth Leadership
                </h2>
                <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
                <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                  Deep health economy expertise. Fractional CMO and Chief Growth Officer services for health businesses across Australia.
                </p>
              </motion.div>

              {/* Health categories grid - octagon clip-path cards */}
              <motion.div variants={fadeUp} className="mb-20">
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8 font-medium text-center">We work across the health economy</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {healthCategories.map((cat) => (
                    <div
                      key={cat.title}
                      className="relative bg-secondary p-8 group hover:shadow-lg transition-all duration-500"
                      style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)" }}
                    >
                      <div
                        className="absolute inset-0 border border-transparent group-hover:border-accent/30 transition-colors duration-500"
                        style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)" }}
                      />
                      <cat.icon className="h-8 w-8 text-foreground mb-6 group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
                      <h4 className="text-xl font-bold mb-3 tracking-tight">{cat.title}</h4>
                      <p className="text-muted-foreground leading-relaxed font-light text-sm">{cat.examples}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Services table */}
              <motion.div variants={fadeUp}>
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8 font-medium">What we deliver</h3>
                <div className="divide-y divide-border">
                  {services.map((s) => (
                    <div key={s.service} className="py-6 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-2 md:gap-8">
                      <h4 className="font-bold text-base">{s.service}</h4>
                      <p className="text-muted-foreground font-light leading-relaxed">{s.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="text-center mt-12">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  View all services <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - WHY GRPL IN HEALTH */}
      <section className="py-24 md:py-32 bg-grpl-black text-grpl-white relative overflow-hidden">
        {/* Octagon background decoration */}
        <div className="absolute bottom-10 left-10 w-64 h-64 opacity-[0.08] pointer-events-none">
          <img src={octagonRings} alt="" className="w-full h-full brightness-0 invert" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-grpl-white">
                  We're Not a Marketing Agency
                </h2>
                <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
                <p className="text-xl text-grpl-white/70 font-light max-w-2xl mx-auto">
                  We're a growth partner who's built inside the health economy. GRPL's founder, Matt Gudge, has spent 15+ years in senior marketing and growth leadership across healthcare, healthtech, wellness, fitness, and consumer health.
                </p>
              </motion.div>

              {/* Credential cards */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-20">
                {credentials.map((cred) => (
                  <div key={cred.company} className="relative">
                    <p className="text-xs uppercase tracking-[0.15em] text-accent font-medium mb-2">{cred.subtitle}</p>
                    <h4 className="text-xl font-bold mb-3 tracking-tight text-grpl-white">{cred.company}</h4>
                    <p className="text-grpl-white/70 leading-relaxed font-light">{cred.description}</p>
                  </div>
                ))}
              </motion.div>

              {/* Differentiator blocks */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                <div>
                  <h4 className="text-xl font-bold mb-3 tracking-tight text-grpl-white">We embed, we don't just advise.</h4>
                  <p className="text-grpl-white/70 leading-relaxed font-light">
                    GRPL operates at the leadership level, inside your business, alongside your team, accountable for outcomes. This isn't a monthly strategy PDF. It's a fractional CMO who shows up, runs the work, and drives results.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 tracking-tight text-grpl-white">We understand health's unique constraints.</h4>
                  <p className="text-grpl-white/70 leading-relaxed font-light">
                    Regulatory complexity, clinical credibility requirements, consumer trust dynamics, fragmented audiences, practitioner referral networks, and the pace at which this market is shifting. We've operated inside these constraints, not just advised around them.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 tracking-tight text-grpl-white">This isn't theory. It's pattern recognition.</h4>
                  <p className="text-grpl-white/70 leading-relaxed font-light">
                    We've built the brands, scaled the businesses, run the teams, and operated in the exact roles we're advising on. Every recommendation comes from doing the work, across healthtech, medical finance, wellness, fitness, and consumer health.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="text-center mt-16">
                <Link
                  to="/growth-diagnostic"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  Take the Growth Diagnostic <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - MADE ONE ADVANTAGE */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
                  Backed by Made One Intelligence
                </h2>
                <div className="w-12 h-0.5 bg-accent mb-6" />
                <p className="text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
                  GRPL is the strategic consulting arm of the same team behind Made One, Australia's health economy media brand. That gives our health clients something no other marketing consultancy can offer: real-time industry intelligence wired directly into their growth strategy.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mb-12">
                <div>
                  <Globe className="h-8 w-8 text-foreground mb-6" strokeWidth={1.5} />
                  <h4 className="text-xl font-bold mb-3 tracking-tight">Real-Time Industry Intelligence</h4>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    We're tracking the business moves, capital flows, regulatory shifts, and consumer trends reshaping the health economy every day. Your strategy is informed by what's happening now, not last quarter's report.
                  </p>
                </div>
                <div>
                  <Users className="h-8 w-8 text-foreground mb-6" strokeWidth={1.5} />
                  <h4 className="text-xl font-bold mb-3 tracking-tight">Health Economy Network</h4>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    Access to founders, operators, investors, and executives across the Australian health industry through the Made One community. Strategic introductions, partnership opportunities, and market intelligence you can't get from a marketing agency.
                  </p>
                </div>
                <div>
                  <BarChart3 className="h-8 w-8 text-foreground mb-6" strokeWidth={1.5} />
                  <h4 className="text-xl font-bold mb-3 tracking-tight">Content Authority & Market Data</h4>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    Leverage Made One's original research and reports, including the Wellness 2.0 insight series, to ground your strategy in data, not assumptions. Understand where the market is going before your competitors do.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <a
                  href="https://madeone.world"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  onClick={() => trackEvent("cta_click", { cta_name: "made_one_link", source: "health_made_one" })}
                >
                  Read our latest: Wellness 2.0 — The Health Economy Is Being Rebuilt <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - SOCIAL PROOF */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
                  Trusted by Health Businesses Across Australia
                </h2>
                <div className="w-12 h-0.5 bg-accent mx-auto" />
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {proofPoints.map((point) => (
                  <div
                    key={point}
                    className="relative bg-secondary p-8 group"
                    style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)" }}
                  >
                    <p className="text-muted-foreground leading-relaxed font-light">{point}</p>
                  </div>
                ))}
              </motion.div>

              {/* Stat bar */}
              <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl md:text-4xl font-black tracking-tight">{stat.value}</p>
                    <p className="text-sm text-muted-foreground font-light mt-2">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - CTA */}
      <section className="py-24 md:py-32 bg-grpl-black text-grpl-white relative overflow-hidden">
        {/* Octagon background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
          <img src={octagonRings} alt="" className="w-full h-full" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 text-grpl-white">
                Let's Talk Growth
              </motion.h2>

              <motion.div variants={fadeUp} className="w-16 h-0.5 bg-accent mx-auto mb-8" />

              <motion.p variants={fadeUp} className="text-xl text-grpl-white/70 mb-4 font-light max-w-2xl mx-auto leading-relaxed">
                If you're a health business founder, CEO, or board looking for senior marketing leadership without the full-time cost, we should talk.
              </motion.p>

              <motion.p variants={fadeUp} className="text-sm text-grpl-white/60 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                GRPL works with a limited number of health clients at any one time to ensure depth, strategic focus, and real accountability. If that sounds like what your business needs, book a strategy call.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col items-center gap-2">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={() => handleBookCall("health_cta")}
                  >
                    Book a Strategy Call
                    <img src={buttonOctagon} alt="" className="ml-2 h-3 w-3" />
                  </Button>
                  <Button
                    variant="heroSecondary"
                    size="lg"
                    onClick={() => {
                      trackEvent("cta_click", { cta_name: "email_cta", source: "health_cta" });
                      window.location.href = "mailto:matt@grpl.com.au";
                    }}
                  >
                    Email matt@grpl.com.au
                    <img src={buttonOctagon} alt="" className="ml-2 h-3 w-3 opacity-50" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Health;
