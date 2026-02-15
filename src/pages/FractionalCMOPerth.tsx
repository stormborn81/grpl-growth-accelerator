import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GRPL - Fractional CMO Perth",
    description: "Fractional CMO services for Perth businesses. Senior marketing leadership for resources, technology, and professional services companies in Western Australia.",
    url: "https://www.grpl.com.au/fractional-cmo-perth",
    areaServed: {
      "@type": "City",
      name: "Perth",
      containedInPlace: { "@type": "State", name: "Western Australia" },
    },
    provider: { "@type": "Organization", name: "GRPL", url: "https://www.grpl.com.au" },
    serviceType: ["Fractional CMO", "Chief Growth Officer", "Marketing Leadership"],
    priceRange: "$$$$",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grpl.com.au/" },
      { "@type": "ListItem", position: 2, name: "Fractional CMO Perth", item: "https://www.grpl.com.au/fractional-cmo-perth" },
    ],
  },
];

const faqs = [
  { question: "What is a fractional CMO and how does it work for Perth businesses?", answer: "A fractional CMO is a senior marketing executive who provides strategic leadership on a part-time basis - typically 2-4 days per week. For Perth businesses, this means experienced marketing leadership that understands the unique dynamics of the Western Australian market - from resources sector cycles to the challenges of geographic isolation - without the $225,000+ annual cost of a full-time CMO. GRPL's fractional CMOs work as embedded members of your leadership team with flexible remote and on-site arrangements." },
  { question: "How much does a fractional CMO cost in Perth?", answer: "GRPL's fractional CMO engagements range from $8,000 to $18,000 per month depending on scope and time commitment. Compare this to a full-time CMO in Perth: $190,000-$270,000 base salary plus superannuation, bonuses, leave, and recruiter fees - totalling $270,000-$380,000+ per year. The fractional model delivers the same strategic leadership at 60-70% less cost, with immediate availability and zero recruitment risk." },
  { question: "Can a fractional CMO work remotely with a Perth business?", answer: "Yes - and this is one of the strengths of the model for Perth businesses. GRPL's fractional CMO service is designed around strategic impact, not physical proximity. Regular video calls, shared dashboards, and structured communication cadences ensure alignment. Many Perth clients combine periodic on-site strategy sessions with ongoing remote engagement. The geographic isolation that makes full-time CMO recruitment difficult actually makes the fractional model more attractive." },
  { question: "What industries do you work with in Perth?", answer: "GRPL works with Perth businesses across resources services and mining technology, professional services, technology and SaaS, construction, engineering, and high-growth B2B companies between $2M and $30M revenue. GRPL also works with businesses diversifying beyond traditional resources into critical minerals, clean energy, and technology sectors - where marketing sophistication needs to match the business ambition." },
  { question: "How does a fractional CMO help Perth businesses compete nationally?", answer: "Perth businesses often struggle to build national visibility because the market defaults to Sydney and Melbourne. A fractional CMO helps Perth businesses build digital-first marketing strategies that overcome geographic barriers: thought leadership that establishes national authority, content strategies that generate inbound enquiry regardless of location, and brand positioning that communicates credibility beyond the WA market. The goal is to make geography irrelevant to your buyer's perception of your capability." },
  { question: "What is the minimum engagement period?", answer: "GRPL recommends a 6-month minimum for fractional CMO engagements. The first month covers diagnostic and strategy, months 2-4 focus on implementation and optimisation, and months 5-6 allow measurement and refinement. After the initial period, engagements continue on a rolling monthly basis with no lock-in contracts." },
];

const FractionalCMOPerth = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Fractional CMO Perth | Marketing Leadership for WA Businesses"
      description="Fractional CMO services for Perth businesses. Senior marketing leadership for resources, technology, and professional services companies diversifying and growing in Western Australia."
      canonical="https://www.grpl.com.au/fractional-cmo-perth"
      jsonLd={jsonLd}
    />
    <Header />
    <main className="pt-14">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Fractional CMO Perth</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Fractional CMO Perth</h1>
          <h2 className="text-xl sm:text-2xl font-bold text-muted-foreground mb-8">Marketing Leadership for Western Australia's Evolving Business Landscape</h2>

          <div className="prose-section mb-16 space-y-6">
            <p className="text-muted-foreground font-light leading-relaxed">Perth sits at the centre of an economy in transformation. Western Australia's mining and resources sector remains one of the most productive in the world - contributing over 12% to national GDP and 70% of export earnings - but the story is changing. Critical minerals including lithium, cobalt, and rare earth elements are driving new investment. Clean energy and decarbonisation technologies are creating entirely new markets. Technology, professional services, and advanced manufacturing are diversifying what was once a mining-dependent economy.</p>
            <p className="text-muted-foreground font-light leading-relaxed">For Perth businesses, this means opportunity - and a marketing challenge. Companies that grew on the back of resources industry relationships and procurement networks now need to communicate with broader audiences, build brands that work beyond the mining cycle, and generate demand in markets where they are not yet known. Businesses outside resources need to compete for attention in a city where the mining sector has historically dominated the conversation.</p>
            <p className="text-muted-foreground font-light leading-relaxed">A <Link to="/services/fractional-cmo" className="text-accent underline underline-offset-4 hover:text-accent/80">fractional CMO</Link> gives Perth businesses the strategic marketing leadership to navigate this transition - building marketing functions that drive growth across both traditional and emerging sectors without the $225,000+ annual cost of a full-time CMO hire.</p>
          </div>
        </div>
      </div>

      <CTABanner
        headline="Perth business ready for strategic marketing leadership?"
        subtext="Book a free strategy call to discuss how a fractional CMO can drive your next phase of growth."
        buttonText="Book Your Free Strategy Call"
        buttonLink="/contact"
      />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Why Perth */}
          <section className="py-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Why Perth's Business Landscape Demands Fractional CMO Leadership</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-3">The Diversification Imperative</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">Perth's economy is actively diversifying. The WA Government has invested $6.5 billion to drive a decarbonised, diversified economy. Critical minerals are opening new supply chains, clean energy is creating new categories, and technology adoption across mining is spawning a services ecosystem that needs marketing far more sophisticated than the traditional resources sector playbook.</p>
              </div>
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-3">Geographic Challenge, Digital Opportunity</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">Perth is the most geographically isolated capital city in the world. This creates unique marketing challenges - particularly for businesses looking to win clients on the east coast or internationally. A fractional CMO helps Perth businesses build digital marketing strategies that overcome geographic barriers: thought leadership that builds authority nationally and content strategies that attract inbound enquiry regardless of location.</p>
              </div>
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-3">Talent Scarcity</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">Perth's talent shortages extend beyond mining and construction into marketing leadership. An ageing workforce and competition from the resources sector for top talent make recruiting a senior marketing leader exceptionally difficult. A fractional CMO sidesteps this challenge entirely - you get immediate access to experienced strategic marketing leadership without entering the competitive Perth talent market.</p>
              </div>
            </div>
          </section>

          {/* Who This Is For */}
          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Who This Is For - Perth Market Focus</h2>
            <div className="space-y-10">
              <div>
                <h3 className="font-bold text-lg mb-2">Resources Services & Mining Technology</h3>
                <p className="text-muted-foreground font-light leading-relaxed">Perth's mining services and mining technology (METS) sector is worth over $100 billion and serves global mining operations. But many METS companies have grown through procurement relationships and industry networks rather than strategic marketing. As the sector evolves - with autonomous operations, AI-driven analytics, and sustainability requirements creating new buying criteria - these businesses need marketing that positions them for the future, not the past. A fractional CMO brings the strategic framework to market technical products and services to increasingly sophisticated buyers.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Critical Minerals & Clean Energy</h3>
                <p className="text-muted-foreground font-light leading-relaxed">Western Australia is positioning itself as a global leader in critical minerals processing and clean energy. Companies in lithium, rare earths, hydrogen, and renewable energy need to build brands and market presence from scratch - often to audiences that have never heard of them. A fractional CMO provides the strategic capability to build awareness, establish credibility, and generate demand in emerging markets where the rules are still being written.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Professional Services</h3>
                <p className="text-muted-foreground font-light leading-relaxed">Perth's professional services sector - engineering, consulting, legal, accounting - has historically served the resources sector. As the economy diversifies, these firms need to build visibility in new sectors and geographies. A fractional CMO introduces the marketing discipline to move beyond sector-specific referral networks and build a broader, more resilient client pipeline.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Technology & SaaS</h3>
                <p className="text-muted-foreground font-light leading-relaxed">Perth's tech sector is growing, driven partly by the resources sector's embrace of automation, data analytics, and digital operations. SaaS companies and tech startups building solutions for both resources and broader markets need experienced marketing leadership to scale beyond the WA market and compete nationally and internationally. A fractional CMO provides the go-to-market expertise to build demand generation engines that work beyond the Perth network.</p>
              </div>
            </div>
          </section>

          {/* What GRPL Delivers */}
          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">What GRPL's Fractional CMO Delivers in Perth</h2>
            <div className="space-y-8">
              {[
                { phase: "Month 1", title: "Market & Business Diagnostic", text: "GRPL's six-dimension marketing audit tailored for Perth's unique market dynamics. This includes an assessment of competitive positioning within both the WA market and national landscape, readiness to capitalise on diversification trends, and identification of the highest-impact marketing opportunities.", link: "/services/marketing-audit", linkText: "Explore the marketing audit" },
                { phase: "Months 2-3", title: "Strategy & Positioning", text: "A marketing strategy built for Perth's specific challenges - geographic isolation, sector concentration, talent constraints - and opportunities - diversification, critical minerals growth, national expansion. The strategy covers brand positioning, ICP definition, digital-first channel strategy, budget allocation, and a 12-month execution roadmap." },
                { phase: "Months 4-6", title: "Execution & National Reach", text: "GRPL leads execution with a particular focus on building national and international visibility for Perth businesses. This includes thought leadership programs, content strategies that establish authority beyond WA, digital demand generation, and measurement frameworks that connect marketing activity to pipeline and revenue." },
                { phase: "Ongoing", title: "Scale & Independence", text: "Building the marketing function so the business is not dependent on any individual. GRPL develops systems, processes, and team capability - whether that means hiring the right people in Perth, building a remote marketing capability, or both." },
              ].map((t) => (
                <div key={t.phase} className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-sm font-bold text-accent">{t.phase}</span>
                  </div>
                  <div className="border-l-2 border-accent/20 pl-6 pb-2">
                    <h3 className="font-bold mb-1">{t.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{t.text}</p>
                    {t.link && <Link to={t.link} className="text-sm text-accent inline-flex items-center gap-1 mt-2 hover:underline">{t.linkText} <ArrowRight className="h-3 w-3" /></Link>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <CTABanner
        headline="Ready to build marketing that matches Perth's ambitions?"
        subtext="GRPL's fractional CMO service helps WA businesses build marketing functions that drive growth beyond resources."
        buttonText="Book a Strategy Call"
        buttonLink="/contact"
      />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Perth Business Landscape */}
          <section className="py-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">Perth's Economic Transformation - Why Now</h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>Western Australia's economy in 2026 is at an inflection point. The resources sector remains strong, but the conversation has shifted from extraction to processing, sustainability, and technology enablement. The WA Government's $6.5 billion investment in economic diversification is creating new sectors and new business opportunities.</p>
              <p>For Perth businesses, this means the market is expanding but so is competition. Companies that invest in strategic marketing leadership now - building brands, establishing digital presence, and creating demand generation systems - will be positioned to capture the opportunities that diversification creates. Those that continue to rely solely on industry relationships and procurement networks will find themselves competing with national and international entrants who bring sophisticated marketing capabilities.</p>
              <p>A fractional CMO provides the strategic leadership to navigate this transition: building marketing functions that work for both traditional and emerging sectors, establishing national visibility, and creating sustainable demand generation that reduces dependence on any single sector or relationship.</p>
              <p><Link to="/blog/fractional-cmo-cost-australia" className="text-accent underline underline-offset-4 hover:text-accent/80">Full cost analysis: Fractional CMO in Australia</Link></p>
            </div>
          </section>

          {/* Other Services */}
          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Other GRPL Services for Perth Businesses</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link to="/services/chief-growth-officer" className="group p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">Chief Growth Officer</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">When growth requires alignment across marketing, sales, product, and customer success - particularly relevant for Perth businesses diversifying into new markets.</p>
                <span className="text-sm text-accent inline-flex items-center gap-1 mt-3">Learn more <ArrowRight className="h-3 w-3" /></span>
              </Link>
              <Link to="/services/brand-foundation" className="group p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">Brand Foundation</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">Building a new brand for an emerging sector? GRPL's Brand Foundation sprint delivers a complete brand in weeks.</p>
                <span className="text-sm text-accent inline-flex items-center gap-1 mt-3">Learn more <ArrowRight className="h-3 w-3" /></span>
              </Link>
              <Link to="/services/marketing-audit" className="group p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">Marketing Audit</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">Start with a diagnostic to understand where your marketing stands before committing to a broader engagement.</p>
                <span className="text-sm text-accent inline-flex items-center gap-1 mt-3">Learn more <ArrowRight className="h-3 w-3" /></span>
              </Link>
            </div>
          </section>

          {/* Cross-city links */}
          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">Also Serving Businesses Across Australia</h2>
            <p className="text-muted-foreground font-light leading-relaxed">GRPL provides fractional CMO and marketing leadership services across Australia, including <Link to="/fractional-cmo-sydney" className="text-accent underline underline-offset-4 hover:text-accent/80">Sydney</Link>, <Link to="/fractional-cmo-melbourne" className="text-accent underline underline-offset-4 hover:text-accent/80">Melbourne</Link>, and <Link to="/fractional-cmo-brisbane" className="text-accent underline underline-offset-4 hover:text-accent/80">Brisbane</Link>. Perth businesses get the same engagement quality regardless of geography - GRPL's model is built for strategic impact, not physical proximity.</p>
          </section>

          <FAQSection faqs={faqs} heading="Frequently Asked Questions - Fractional CMO Perth" />

          <div className="pb-16">
            <LeadForm heading="Start the Conversation" subtext="Tell us about your Perth business and we'll schedule a free strategy call to discuss whether a fractional CMO is the right fit." />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default FractionalCMOPerth;
