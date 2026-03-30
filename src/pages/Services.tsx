import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CTABanner from "@/components/CTABanner";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ArrowRight, Target, TrendingUp, ClipboardCheck, Users, Palette, Rocket, UserCheck } from "lucide-react";

const services = [
  {
    title: "Fractional CMO",
    description: "Enterprise-grade marketing leadership on a part-time basis. GRPL's fractional CMO service provides the strategic direction, team leadership, and executive accountability of a full-time Chief Marketing Officer - at a fraction of the cost. Ideal for businesses between $2M and $30M in revenue.",
    link: "/services/fractional-cmo",
    icon: Target,
  },
  {
    title: "Chief Growth Officer",
    description: "Integrated growth leadership spanning marketing, sales, product, and customer success. The CGO role goes beyond marketing to own the entire revenue-generating system - aligning every growth function under one strategic mandate.",
    link: "/services/chief-growth-officer",
    icon: TrendingUp,
  },
  {
    title: "Marketing Audit",
    description: "A diagnostic framework that reveals what is actually broken in your marketing. GRPL's six-dimension audit goes beyond activity checklists to diagnose strategy, channel effectiveness, team capability, technology, customer intelligence, and competitive positioning.",
    link: "/services/marketing-audit",
    icon: ClipboardCheck,
  },
  {
    title: "Outsourced Marketing Department",
    description: "A complete marketing function without the overhead of building one in-house. GRPL provides strategic leadership combined with execution capability - the full stack of marketing competence, scaled to your business needs.",
    link: "/services/outsourced-marketing-department",
    icon: Users,
  },
  {
    title: "Brand Foundation",
    description: "Build your brand from the ground up - from vision and values to visual identity and market presence. GRPL's Brand Foundation sprint gives founders a complete, investor-ready brand in weeks, not months.",
    link: "/services/brand-foundation",
    icon: Palette,
  },
  {
    title: "Growth Projects",
    description: "Strategic marketing projects with clear scope, timeline, and deliverables. From product launches and rebrand initiatives to market validation and growth sprints - senior-led project work without an ongoing retainer.",
    link: "/services/growth-projects",
    icon: Rocket,
  },
  {
    title: "Interim CMO",
    description: "Immediate marketing leadership to bridge the gap while you recruit a permanent CMO. GRPL's interim CMO service ensures strategy stays on track, teams stay productive, and momentum is not lost during the transition.",
    link: "/services/interim-cmo",
    icon: UserCheck,
  },
];

const steps = [
  { title: "Diagnostic", text: "Every engagement begins with GRPL's proprietary marketing audit. We assess strategic alignment, channel effectiveness, team capability, technology, customer intelligence, and competitive positioning to understand where the real opportunities and problems are." },
  { title: "Strategy", text: "Based on the diagnostic, GRPL develops a strategic roadmap tied to your revenue targets. This includes positioning, channel mix, budget allocation, measurement frameworks, and a 12-month execution plan. The strategy is designed for your specific market, team, and growth stage." },
  { title: "Execution & Accountability", text: "GRPL embeds within your leadership team to drive execution against the strategy. This is not a document handoff - it is ongoing leadership, coaching, and accountability for results. We measure success on pipeline, revenue, and customer acquisition - not impressions or activity." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GRPL - Marketing Leadership Services",
    description: "Enterprise-grade fractional CMO, Chief Growth Officer, marketing audit and outsourced marketing services for Australian businesses.",
    url: "https://www.grpl.com.au/services",
    provider: { "@type": "Organization", name: "GRPL", url: "https://www.grpl.com.au" },
    areaServed: [{ "@type": "Country", name: "Australia" }, { "@type": "Country", name: "New Zealand" }],
    serviceType: ["Fractional CMO", "Chief Growth Officer", "Marketing Audit", "Outsourced Marketing Department", "Brand Foundation", "Growth Projects", "Interim CMO"],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grpl.com.au/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.grpl.com.au/services" },
    ],
  },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Marketing Leadership Services Australia"
      description="Enterprise-grade fractional CMO, Chief Growth Officer, marketing audit and outsourced marketing services for Australian businesses."
      canonical="https://www.grpl.com.au/services"
      jsonLd={jsonLd}
    />
    <Header />
    <main className="pt-14">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Services</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">Enterprise-Grade Marketing Leadership for Australian Businesses</h1>
          <p className="text-lg text-muted-foreground font-light mb-16 max-w-3xl leading-relaxed">
            GRPL provides senior marketing and growth leadership to ANZ businesses that have outgrown founder-led marketing but are not yet ready for a full-time C-suite hire. Every engagement is built around accountability for outcomes - not activity, not deliverables, but measurable business impact.
          </p>

          {/* Service Cards */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Our Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 mb-20">
            {services.map((s) => (
              <Link key={s.link} to={s.link} className="group block p-8 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <s.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-black tracking-tight mb-3 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{s.description}</p>
                <span className="text-sm font-medium text-accent inline-flex items-center gap-1">Learn More <ArrowRight className="h-3 w-3" /></span>
              </Link>
            ))}
          </div>

          {/* How GRPL Works */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">How GRPL Works</h2>
          <div className="grid gap-8 md:grid-cols-3 mb-20">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-black text-accent/10 mb-2">{i + 1}</div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          {/* Who We Work With */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">Who We Work With</h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-8 max-w-3xl">
            GRPL works with Australian and New Zealand businesses that share specific characteristics: annual revenue between $2 million and $30 million, a genuine commitment to marketing-led growth, a willingness to invest in strategic leadership, and a recognition that the CEO can no longer be the de facto marketing leader. Our clients span B2B SaaS, professional services, technology, financial services, and high-growth consumer businesses.
          </p>
        </div>
      </div>

      {/* Location Cards */}
      <div className="container mx-auto px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Local Marketing Leadership Across Australia</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { city: "Sydney", desc: "Fractional CMO and growth leadership for Sydney's tech, SaaS, and financial services businesses.", link: "/fractional-cmo-sydney" },
              { city: "Melbourne", desc: "Fractional CMO services for Melbourne's thriving scale-up ecosystem and professional services sector.", link: "/fractional-cmo-melbourne" },
              { city: "Brisbane", desc: "Fractional CMO for Brisbane businesses capitalising on Southeast Queensland's unprecedented growth.", link: "/fractional-cmo-brisbane" },
              { city: "Perth", desc: "Fractional CMO for Perth companies diversifying beyond resources into technology and professional services.", link: "/fractional-cmo-perth" },
            ].map((loc) => (
              <Link key={loc.city} to={loc.link} className="group p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <h3 className="text-lg font-black tracking-tight mb-2 group-hover:text-accent transition-colors">{loc.city}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">{loc.desc}</p>
                <span className="text-sm font-medium text-accent inline-flex items-center gap-1">Learn More <ArrowRight className="h-3 w-3" /></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CTABanner
        headline="Ready to discuss your growth challenges?"
        subtext="Book a free 30-minute strategy call with GRPL."
        buttonText="Book Your Strategy Call"
        buttonLink="/contact"
      />
    </main>
    <Footer />
  </div>
);

export default Services;