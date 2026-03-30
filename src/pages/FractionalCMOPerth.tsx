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
    "@type": "Service",
    name: "GRPL - Fractional CMO Perth",
    description: "Enterprise-grade fractional CMO services for Perth businesses. Senior marketing leadership for resources, technology, and professional services companies diversifying and growing in Western Australia.",
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
  {
    question: "What is a fractional CMO and how does it work for Perth businesses?",
    answer: "A fractional CMO is a senior marketing executive who provides strategic leadership on a part-time basis - typically 2-4 days per week. For Perth businesses, this means experienced marketing leadership that understands the WA market context, can navigate the unique challenges of geographic isolation, and builds marketing strategies designed for both local and national reach. GRPL's fractional CMOs operate as embedded members of your leadership team with flexible engagement structures.",
  },
  {
    question: "How much does a fractional CMO cost in Perth?",
    answer: "GRPL's fractional CMO engagements range from $8,000 to $18,000 per month depending on scope and commitment. Compared to a full-time CMO in Perth ($200,000-$260,000 base plus super, bonuses, leave, and recruiter fees - totalling $275,000-$375,000+), the fractional model delivers equivalent strategic leadership at 60-70% less. No recruitment risk, no 6-month hiring process, and results from month one.",
  },
  {
    question: "Can a fractional CMO help Perth businesses compete nationally?",
    answer: "Yes - and this is one of the most valuable applications of a fractional CMO for Perth companies. Geographic isolation no longer needs to limit your market, but many Perth businesses still market as if it does. A fractional CMO builds the digital marketing infrastructure - content strategy, thought leadership, AI search optimisation, and online brand presence - that positions your business as a credible option for buyers in Sydney, Melbourne, and beyond. GRPL helps Perth businesses build national (and international) visibility without requiring a physical presence in every market.",
  },
  {
    question: "What industries do you work with in Perth?",
    answer: "GRPL works with Perth businesses across mining services, critical minerals, clean energy, technology, professional services, and high-growth B2B. The common thread is businesses between $2M and $30M revenue that need experienced marketing leadership to drive their next phase of growth - whether that is diversifying beyond resources clients, entering east coast markets, building inbound demand, or establishing thought leadership in emerging sectors.",
  },
  {
    question: "How does the engagement work given Perth's time zone difference?",
    answer: "Perth's 2-3 hour time difference from the east coast is easily managed within GRPL's engagement model. Strategy sessions, team meetings, and leadership check-ins are scheduled within overlapping business hours. Day-to-day execution, content development, and campaign management operate asynchronously. Many Perth clients find the time zone difference is a non-issue once the engagement rhythm is established.",
  },
  {
    question: "What is the minimum engagement for Perth businesses?",
    answer: "GRPL recommends a 6-month minimum engagement: month 1 for diagnostic and strategy, months 2-4 for implementation and optimisation, and months 5-6 for measurement and refinement. After the initial period, engagements continue month-to-month with no lock-in contracts. Some Perth clients engage for 12-18 months as they build their marketing function; others transition to a full-time CMO with GRPL managing the handover.",
  },
];

const FractionalCMOPerth = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Fractional CMO Perth | Marketing Leadership for WA Businesses"
      description="Fractional CMO services for Perth businesses. Senior marketing leadership for resources, technology, and professional services companies in WA."
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
                <p className="text-sm text-muted-foreground font-light leading-relaxed">Perth's economy is actively diversifying. The WA Government has invested $6.5 billion to drive a decarbonised, diversified economy. Critical minerals are opening new supply chains, clean energy is creating new categories, and technology adoption across mining (autonomous trucks, drones, AI-driven operations) is spawning a services ecosystem that needs marketing far more sophisticated than the traditional resources sector playbook. A fractional CMO brings the strategic capability to market across both established and emerging sectors.</p>
              </div>
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-3">Geographic Challenge, Digital Opportunity</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">Perth is the most geographically isolated capital city in the world. This creates unique marketing challenges - particularly for businesses looking to win clients on the east coast or internationally. A fractional CMO helps Perth businesses build digital marketing strategies that overcome geographic barriers: thought leadership that builds authority nationally, content strategies that attract inbound enquiry regardless of location, and brand positioning that communicates credibility beyond the local market.</p>
              </div>
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-3">Talent Scarcity</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">Perth's talent shortages extend beyond mining and construction into marketing leadership. Skill shortages in specialised areas, an ageing workforce, and competition from the resources sector for top talent make recruiting a senior marketing leader exceptionally difficult. A fractional CMO sidesteps this challenge entirely - you get immediate access to experienced strategic marketing leadership without entering the competitive Perth talent market.</p>
              </div>
            </div>
          </section>

          {/* Who This Is For */}
          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Who This Is For - Perth Market Focus</h2>
            <div className="space-y-10">
              <div>
                <h3 className="font-bold text-lg mb-2">Resources & Mining Services</h3>
                <p className="text-muted-foreground font-light leading-relaxed">Perth is home to 438+ active mining companies and 8 of the world's 14 largest resource corporations. But many mining services companies - from exploration technology to environmental consultants, safety providers to logistics firms - market themselves the same way they did a decade ago: relationship-driven, tender-response focused, and reactive. A fractional CMO introduces proactive marketing discipline: brand positioning that differentiates in a competitive services landscape, content that builds authority with procurement teams, and digital presence that generates inbound enquiry from beyond your existing network.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Critical Minerals & Clean Energy</h3>
                <p className="text-muted-foreground font-light leading-relaxed">The critical minerals boom - led by lithium, cobalt, graphite, and rare earth elements - is creating a new generation of Perth businesses competing for investment, partners, and customers on the global stage. These businesses need marketing that speaks to international investors, global OEMs, and government procurement - audiences that require sophisticated positioning, compelling narrative, and digital credibility. A fractional CMO with B2B experience provides the strategic framework to market to these audiences effectively.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Technology & Innovation</h3>
                <p className="text-muted-foreground font-light leading-relaxed">Perth's technology sector is growing as mining drives adoption of AI, automation, big data, and autonomous systems. The Technology and Innovation sector is recognised as a key driver of Perth's economic diversity. Tech companies serving the resources sector - and those diversifying beyond it - need marketing strategies that communicate their value proposition to both mining and non-mining audiences. GRPL helps Perth tech companies build dual-market positioning that maximises their addressable market.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Professional & B2B Services</h3>
                <p className="text-muted-foreground font-light leading-relaxed">Perth's professional services sector - legal, accounting, engineering, consulting - is growing alongside the diversifying economy. But many firms remain heavily dependent on mining-sector clients and referral networks. A fractional CMO builds marketing capability that diversifies revenue: targeting new sectors, building inbound demand generation, establishing thought leadership positioning, and creating systematic lead generation that reduces reliance on any single client or referral source.</p>
              </div>
            </div>
          </section>

          {/* What GRPL Delivers */}
          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">What GRPL's Fractional CMO Delivers in Perth</h2>
            <div className="space-y-8">
              {[
                { phase: "Month 1", title: "WA Market Diagnostic", text: "GRPL's six-dimension marketing audit adapted for Perth's unique business context. This includes an assessment of your positioning relative to both local Perth competitors and east coast/international alternatives, an evaluation of your digital presence and national visibility, and identification of the highest-impact growth opportunities for your specific market.", link: "/services/marketing-audit", linkText: "Learn about the marketing audit framework" },
                { phase: "Months 2-3", title: "Strategic Plan", text: "A marketing strategy designed for Perth's business reality - acknowledging the geographic challenges, leveraging the unique strengths of the WA market, and building a plan that drives growth locally, nationally, and internationally as appropriate for your business. This covers brand positioning, target market refinement, channel strategy (including AI search optimisation for national visibility), budget allocation, and a 12-month execution roadmap." },
                { phase: "Months 4-6", title: "Execution & Market Building", text: "GRPL leads execution - managing your team, coordinating agencies, driving campaigns, and measuring results against pipeline and revenue contribution. For Perth businesses targeting national or international markets, this phase includes building the digital marketing infrastructure and content assets that establish credibility beyond the WA market." },
                { phase: "Ongoing", title: "Capability Building", text: "GRPL builds your marketing function for independence - developing systems, processes, team capability, and strategic frameworks that outlast any individual engagement. Whether you transition to a full-time CMO, retain the fractional model, or build a self-sufficient team, the foundation is solid." },
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
        headline="Ready to build marketing that matches Western Australia's ambitions?"
        subtext="GRPL helps Perth businesses build marketing functions that drive growth across established and emerging markets."
        buttonText="Book a Strategy Call"
        buttonLink="/contact"
      />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Perth Business Outlook */}
          <section className="py-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">Perth's Business Outlook - Why Strategic Marketing Matters Now</h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>Western Australia's 2026 business outlook is defined by transition. Iron ore remains the backbone, but gold exports are rising rapidly, critical minerals are expanding, and the $1.2 billion Strategic Reserve programme signals serious government commitment to diversification. EXA 2026 - Energy Exchange Australia - at the Perth Convention and Exhibition Centre will attract 6,000+ attendees from 33 countries, underscoring Perth's growing profile as a global energy and resources hub.</p>
              <p>For Perth businesses, this means the window for establishing market leadership in emerging sectors is open now. Businesses that invest in strategic marketing today - building brand equity, thought leadership, and digital presence - will be positioned as category leaders as these markets mature. Those that wait will be competing for attention in increasingly crowded spaces.</p>
              <p>A fractional CMO provides the strategic clarity to make decisive moves in this window - building marketing functions that drive growth today and position the business for the opportunities ahead.</p>
              <p><Link to="/blog/ai-reshaping-cmo-role-2026" className="text-accent underline underline-offset-4 hover:text-accent/80">How AI is reshaping marketing leadership in 2026</Link></p>
            </div>
          </section>

          {/* Other Services */}
          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Other GRPL Services for Perth Businesses</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link to="/services/chief-growth-officer" className="group p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">Chief Growth Officer</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">When growth requires alignment across marketing, sales, and revenue functions. Particularly relevant for Perth businesses entering new markets.</p>
                <span className="text-sm text-accent inline-flex items-center gap-1 mt-3">Learn more <ArrowRight className="h-3 w-3" /></span>
              </Link>
              <Link to="/services/marketing-audit" className="group p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">Marketing Audit</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">Start with a diagnostic to understand where your marketing stands before committing to a broader engagement.</p>
                <span className="text-sm text-accent inline-flex items-center gap-1 mt-3">Learn more <ArrowRight className="h-3 w-3" /></span>
              </Link>
              <Link to="/services/interim-cmo" className="group p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">Interim CMO</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">Need immediate marketing leadership to cover a gap? GRPL's interim CMO service provides full-time-equivalent coverage on a temporary basis.</p>
                <span className="text-sm text-accent inline-flex items-center gap-1 mt-3">Learn more <ArrowRight className="h-3 w-3" /></span>
              </Link>
            </div>
          </section>

          {/* Cross-city links */}
          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">Also Serving Businesses Across Australia</h2>
            <p className="text-muted-foreground font-light leading-relaxed">GRPL provides fractional CMO and marketing leadership services across Australia, including <Link to="/fractional-cmo-sydney" className="text-accent underline underline-offset-4 hover:text-accent/80">Sydney</Link>, <Link to="/fractional-cmo-melbourne" className="text-accent underline underline-offset-4 hover:text-accent/80">Melbourne</Link>, and <Link to="/fractional-cmo-brisbane" className="text-accent underline underline-offset-4 hover:text-accent/80">Brisbane</Link>. For Perth businesses working with east coast clients, GRPL's national coverage ensures consistent marketing leadership across all markets.</p>
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
