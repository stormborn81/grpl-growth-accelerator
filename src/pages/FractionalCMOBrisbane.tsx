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
    name: "GRPL - Fractional CMO Brisbane",
    description: "Fractional CMO services for Brisbane businesses. Senior marketing leadership for SEQ's fastest-growing companies.",
    url: "https://www.grpl.com.au/fractional-cmo-brisbane",
    areaServed: {
      "@type": "City",
      name: "Brisbane",
      containedInPlace: { "@type": "State", name: "Queensland" },
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
      { "@type": "ListItem", position: 2, name: "Fractional CMO Brisbane", item: "https://www.grpl.com.au/fractional-cmo-brisbane" },
    ],
  },
];

const faqs = [
  { question: "What is a fractional CMO and how does it work for Brisbane businesses?", answer: "A fractional CMO is a senior marketing executive who provides strategic leadership to your business on a part-time basis - typically 2-4 days per week. For Brisbane businesses, this means an experienced marketing leader who provides the same strategic direction, team leadership, and accountability as a full-time CMO at 60-70% less cost. GRPL's fractional CMOs work as embedded members of your leadership team, with flexible on-site and remote arrangements." },
  { question: "How much does a fractional CMO cost in Brisbane?", answer: "GRPL's fractional CMO engagements range from $8,000 to $18,000 per month depending on scope and time commitment. Compare this to a full-time CMO in Brisbane: $180,000-$250,000 base salary plus superannuation, bonuses, leave, and recruiter fees - totalling $250,000-$350,000+ per year. The fractional model delivers senior strategic leadership at a fraction of the total cost, with immediate start and zero recruitment risk." },
  { question: "How does the Olympic investment affect marketing strategy for Brisbane businesses?", answer: "The 2032 Olympics is already reshaping Brisbane's business landscape - not just through direct infrastructure spending, but through increased national and international attention, population growth, and business investment. Businesses that invest in strategic marketing now will be established market leaders when the global spotlight arrives. A fractional CMO helps you build the positioning, brand equity, and marketing infrastructure to capitalise on this generational opportunity, rather than scrambling to compete when the market is crowded." },
  { question: "What industries do you work with in Brisbane?", answer: "GRPL works with Brisbane businesses across technology, professional services, construction and infrastructure-adjacent companies, B2B services, and high-growth businesses between $2M and $30M revenue. The common factor is businesses that need experienced marketing leadership to match their growth trajectory - not just more marketing tactics." },
  { question: "Can a fractional CMO work on-site in Brisbane?", answer: "Yes. GRPL's model is flexible - engagements can include regular on-site days at your Brisbane office, fully remote, or hybrid. Many Brisbane clients find a combination of on-site strategy sessions and remote execution works best. The model is designed around accountability and outcomes, not desk time." },
  { question: "How long does a typical engagement last?", answer: "GRPL recommends a 6-month minimum to complete a full strategic cycle: diagnostic (month 1), strategy and implementation (months 2-4), and measurement and optimisation (months 5-6). Many Brisbane clients continue beyond 6 months as their business grows. After the initial period, engagements continue month-to-month with no lock-in." },
];

const FractionalCMOBrisbane = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Fractional CMO Brisbane | Marketing Leadership for Growth"
      description="Fractional CMO services for Brisbane businesses. Senior marketing leadership for SEQ's fastest-growing companies - from pre-Olympics infrastructure boom to tech scale-ups."
      canonical="https://www.grpl.com.au/fractional-cmo-brisbane"
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
              <BreadcrumbItem><BreadcrumbPage>Fractional CMO Brisbane</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Fractional CMO Brisbane</h1>
          <h2 className="text-xl sm:text-2xl font-bold text-muted-foreground mb-8">Senior Marketing Leadership for Australia's Fastest-Growing Region</h2>

          <div className="prose-section mb-16 space-y-6">
            <p className="text-muted-foreground font-light leading-relaxed">Southeast Queensland is in the middle of the most significant transformation in its history. A $7.1 billion Olympic and Paralympic Games investment, Cross River Rail, Brisbane Metro, Queen's Wharf, the Western Sydney-to-Brisbane corridor - the infrastructure alone is reshaping how the region lives, works, and does business. Queensland's population is growing at 2.3% annually (well above the national average), international investment is accelerating, and the business community is expanding beyond its traditional base into technology, professional services, and advanced manufacturing.</p>
            <p className="text-muted-foreground font-light leading-relaxed">This growth creates enormous opportunity - and intense competition for attention, talent, and market share. The businesses that will capitalise on Brisbane's transformation are those investing in strategic marketing leadership now, not scrambling to build it when the market is already crowded.</p>
            <p className="text-muted-foreground font-light leading-relaxed">A <Link to="/services/fractional-cmo" className="text-accent underline underline-offset-4 hover:text-accent/80">fractional CMO</Link> gives Brisbane businesses access to executive-level marketing leadership without the $225,000+ cost of a full-time hire. GRPL provides fractional CMO services designed for the Southeast Queensland market - helping businesses build marketing functions that match their growth ambitions.</p>
          </div>
        </div>
      </div>

      <CTABanner
        headline="Brisbane business ready to capitalise on SEQ's growth?"
        subtext="Book a free strategy call to explore how a fractional CMO can accelerate your marketing."
        buttonText="Book Your Free Strategy Call"
        buttonLink="/contact"
      />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Why Brisbane */}
          <section className="py-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Why Brisbane Businesses Are Choosing Fractional CMOs</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-3">The Olympic Multiplier Effect</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">When Sydney hosted the Olympics, the occupier market grew by 34% from the announcement to the games - compared to just 13% for the rest of Australia. Brisbane is on a similar trajectory, with an additional 4.3 million international arrivals projected between 2026 and 2032. A fractional CMO helps Brisbane businesses build the brand, positioning, and marketing infrastructure to capitalise on this wave - before competitors do.</p>
              </div>
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-3">Growth Without the Fixed Cost</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">Brisbane's business community has traditionally been cost-conscious - and rightly so. A fractional CMO delivers enterprise-grade marketing leadership at 60-70% less than a full-time hire. For Brisbane businesses between $2M and $30M revenue, this means accessing strategic expertise without committing $300,000+ per year and a 6-month recruitment process.</p>
              </div>
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-3">Filling the Experience Gap</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">Brisbane's marketing talent pool, while growing rapidly, is still developing compared to Sydney and Melbourne. Senior marketing leaders with genuine strategic experience - not just agency or execution backgrounds - are scarce and expensive. A fractional CMO brings that experience immediately, without competing in the local talent market.</p>
              </div>
            </div>
          </section>

          {/* Who This Is For */}
          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Who This Is For - Brisbane Market Focus</h2>
            <div className="space-y-10">
              <div>
                <h3 className="font-bold text-lg mb-2">Infrastructure & Construction-Adjacent Businesses</h3>
                <p className="text-muted-foreground font-light leading-relaxed">With $7.1 billion in Olympic venue investment, Cross River Rail, Brisbane Metro, and a pipeline of commercial developments - the infrastructure sector is booming. But the supply chain extends far beyond construction: engineering consultancies, project management firms, technology providers, safety and compliance businesses, and professional services firms supporting the boom all need to position themselves effectively. A fractional CMO helps these businesses build visibility, establish authority, and generate pipeline in a market where procurement prioritises Queensland and Australian suppliers.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Technology & Digital Businesses</h3>
                <p className="text-muted-foreground font-light leading-relaxed">Brisbane's tech ecosystem is accelerating, with a growing network of innovation hubs driving the city's digital economy. SaaS companies, digital platforms, and tech-enabled services businesses are scaling rapidly - but many are still marketing like startups when they need the strategic discipline of a mature growth company. GRPL works with Brisbane tech businesses on positioning, demand generation, product marketing, and building marketing teams that scale.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Professional Services</h3>
                <p className="text-muted-foreground font-light leading-relaxed">Brisbane's professional services sector - legal, accounting, consulting, engineering, architecture - is benefiting from the infrastructure boom and population growth. But increased demand means increased competition, and the firms winning market share are those investing in differentiated positioning, thought leadership, and systematic lead generation - not just relying on the referral networks that worked in a smaller market.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Tourism, Hospitality & Experience Businesses</h3>
                <p className="text-muted-foreground font-light leading-relaxed">With 4.3 million additional international arrivals projected in the lead-up to 2032, Brisbane's tourism and experience economy is entering a new era. Businesses in this sector need marketing strategies that build brand recognition well before the games - establishing Brisbane experiences as must-dos for both domestic and international visitors.</p>
              </div>
            </div>
          </section>

          {/* What GRPL Delivers */}
          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">What GRPL's Fractional CMO Delivers in Brisbane</h2>
            <div className="space-y-8">
              {[
                { phase: "Month 1", title: "Market & Business Diagnostic", text: "GRPL's six-dimension marketing audit tailored for the Brisbane market. This includes a specific assessment of your competitive positioning within the SEQ business landscape, an evaluation of your readiness to capitalise on the region's growth trajectory, and a clear identification of the highest-impact marketing opportunities.", link: "/services/marketing-audit", linkText: "Explore the marketing audit" },
                { phase: "Months 2-3", title: "Growth Strategy", text: "A marketing strategy built for Brisbane's market dynamics - acknowledging the opportunities (population growth, infrastructure investment, increasing national and international attention) and the challenges (talent shortages, increased competition, evolving buyer expectations). The strategy covers positioning, ICP definition, channel strategy, AI search readiness, budget allocation, and a 12-month execution roadmap." },
                { phase: "Months 4-6", title: "Execution & Momentum", text: "GRPL leads execution across your marketing function - managing internal teams, coordinating agencies, driving campaigns, and measuring everything against revenue contribution. The goal is to build marketing momentum that compounds over time, not create dependency on any single tactic or channel." },
                { phase: "Ongoing", title: "Building the Function", text: "Whether your endgame is a full-time CMO hire, a permanent fractional arrangement, or a self-sufficient marketing team - GRPL builds toward that goal from day one. Systems, processes, and team capability are developed so the marketing function can stand on its own when the time is right." },
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
        headline="Building for Brisbane's future? Start with marketing leadership."
        subtext="GRPL's fractional CMO service helps Brisbane businesses build marketing that matches their ambitions."
        buttonText="Book a Strategy Call"
        buttonLink="/contact"
      />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Brisbane Growth Timeline */}
          <section className="py-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">Brisbane's Growth Timeline - Position Your Business Now</h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>Brisbane's transformation is not a future event - it is happening now. Venue design and construction runs from 2025-2028. Temporary infrastructure procurement spans 2026-2031. International attention on Brisbane will intensify every year through 2032. Businesses that invest in strategic marketing leadership now will be positioned as market leaders when the global spotlight arrives. Those that wait will be competing for attention in an increasingly crowded market.</p>
              <p>The smartest Brisbane businesses are treating the next 6 years as a strategic window - and using fractional CMO leadership to build the marketing infrastructure, brand equity, and market positioning that will compound over time.</p>
              <p><Link to="/blog/fractional-cmo-australia-guide" className="text-accent underline underline-offset-4 hover:text-accent/80">The complete guide to fractional CMOs in Australia</Link></p>
            </div>
          </section>

          {/* Other Services */}
          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Other GRPL Services for Brisbane Businesses</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link to="/services/growth-projects" className="group p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">Growth Projects</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">Need strategic marketing leadership for a specific initiative? Product launches, market entry, rebrands - scoped projects with clear deliverables.</p>
                <span className="text-sm text-accent inline-flex items-center gap-1 mt-3">Learn more <ArrowRight className="h-3 w-3" /></span>
              </Link>
              <Link to="/services/marketing-audit" className="group p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">Marketing Audit</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">Not sure if you are ready for a fractional CMO? Start with a diagnostic to understand where your marketing stands.</p>
                <span className="text-sm text-accent inline-flex items-center gap-1 mt-3">Learn more <ArrowRight className="h-3 w-3" /></span>
              </Link>
              <Link to="/services/chief-growth-officer" className="group p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">Chief Growth Officer</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">When growth requires alignment across marketing, sales, product, and customer success.</p>
                <span className="text-sm text-accent inline-flex items-center gap-1 mt-3">Learn more <ArrowRight className="h-3 w-3" /></span>
              </Link>
            </div>
          </section>

          {/* Cross-city links */}
          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">Also Serving Businesses Across Australia</h2>
            <p className="text-muted-foreground font-light leading-relaxed">GRPL provides fractional CMO and marketing leadership services across Australia, including <Link to="/fractional-cmo-sydney" className="text-accent underline underline-offset-4 hover:text-accent/80">Sydney</Link>, <Link to="/fractional-cmo-melbourne" className="text-accent underline underline-offset-4 hover:text-accent/80">Melbourne</Link>, and <Link to="/fractional-cmo-perth" className="text-accent underline underline-offset-4 hover:text-accent/80">Perth</Link>. Southeast Queensland businesses get the same engagement quality whether your office is in the CBD, Fortitude Valley, South Bank, or the Gold Coast corridor.</p>
          </section>

          <FAQSection faqs={faqs} heading="Frequently Asked Questions - Fractional CMO Brisbane" />

          <div className="pb-16">
            <LeadForm heading="Start the Conversation" subtext="Tell us about your Brisbane business and we'll schedule a free strategy call to discuss whether a fractional CMO is the right fit." />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default FractionalCMOBrisbane;
