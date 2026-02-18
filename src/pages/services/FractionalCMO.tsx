import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GRPL - Fractional CMO Services",
    description: "Enterprise-grade fractional CMO services for Australian businesses. Senior marketing leadership at a fraction of the full-time cost.",
    url: "https://www.grpl.com.au/services/fractional-cmo",
    provider: { "@type": "Organization", name: "GRPL", url: "https://www.grpl.com.au" },
    areaServed: { "@type": "Country", name: "Australia" },
    serviceType: "Fractional CMO",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grpl.com.au/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.grpl.com.au/services" },
      { "@type": "ListItem", position: 3, name: "Fractional CMO", item: "https://www.grpl.com.au/services/fractional-cmo" },
    ],
  },
];

const faqs = [
  { question: "What is a fractional CMO?", answer: "A fractional CMO is a senior marketing executive who provides strategic leadership on a part-time or contract basis. They bring the same expertise, authority, and accountability as a full-time Chief Marketing Officer but work a fraction of the hours - typically 1 to 3 days per week. This makes enterprise-grade marketing leadership accessible to businesses that cannot justify the $300,000 to $450,000 fully loaded cost of a full-time CMO." },
  { question: "How is a fractional CMO different from a marketing consultant?", answer: "A marketing consultant typically delivers a strategy document or provides advisory input on a project basis. A fractional CMO is an embedded leadership role - they sit within your executive team, attend leadership meetings, coach your staff, manage agency relationships, and own accountability for marketing outcomes over an extended engagement. The difference is ownership and accountability versus advice." },
  { question: "How many days per week does a fractional CMO work?", answer: "Typically between 1 and 3 days per week, depending on the business's needs and growth stage. The engagement intensity often starts higher during the diagnostic and strategy phases, then adjusts as the team builds capability and execution systems are established." },
  { question: "How quickly will we see results?", answer: "Leading indicators - strategic clarity, team alignment, measurement frameworks, campaign quality - typically improve within 90 days. Revenue and pipeline impact usually lags by 6 to 9 months because marketing strategy shifts require time to compound. GRPL establishes clear measurement milestones at the outset so progress is visible and accountable throughout the engagement." },
  { question: "Can a fractional CMO work alongside our existing agency?", answer: "Yes, this is one of the most common and effective configurations. The fractional CMO provides the strategic direction and oversight that ensures agency execution is aligned with business goals. Many GRPL clients report that their agency performance improves significantly once a fractional CMO is managing the relationship strategically." },
  { question: "What industries does GRPL work with?", answer: "GRPL works across B2B SaaS, professional services, technology, financial services, construction, and high-growth consumer businesses in Australia and New Zealand. The common thread is businesses between $2M and $30M revenue that need strategic marketing leadership to reach their next growth stage." },
  { question: "What happens at the end of the engagement?", answer: "GRPL's goal is to build lasting marketing capability within your organisation. At the end of an engagement, you should have a clear strategy, an empowered team, established measurement frameworks, and the organisational capability to execute independently. Some clients transition to a lighter ongoing advisory arrangement; others are fully self-sufficient." },
  { question: "How do we measure if the fractional CMO is working?", answer: "GRPL establishes a measurement framework at the outset covering three categories: strategic metrics (is there a documented and aligned strategy?), operational metrics (are campaigns executing on time and to standard?), and revenue metrics (is pipeline growing, is cost per acquisition declining, is customer lifetime value increasing?). These metrics are reviewed monthly with full transparency." },
];

const deliverables = [
  { title: "Strategic Direction", text: "Market positioning, target customer definition, value proposition development, competitive differentiation, and go-to-market strategy. Every decision grounded in data and market reality, not assumptions." },
  { title: "Channel Strategy & Budget Allocation", text: "Determining which marketing channels will drive the highest-quality pipeline for your specific business, then allocating budget proportionally to performance. Cutting waste from underperforming channels." },
  { title: "Team Leadership & Coaching", text: "Building the capability of your internal marketing team. Setting clear expectations, establishing performance frameworks, and coaching team members to think strategically." },
  { title: "Agency Oversight", text: "If you work with agencies, the fractional CMO becomes the strategic layer ensuring agencies execute against a coherent plan rather than pursuing their own priorities." },
  { title: "Measurement & Accountability", text: "Establishing measurement frameworks that connect marketing activity to pipeline and revenue. Weekly and monthly reporting cadence. Honest assessment of what is working and what is not." },
  { title: "Executive Engagement", text: "Presenting marketing strategy and performance to the board, investors, and executive team. Providing the credibility and authority that a marketing manager simply cannot deliver." },
];

const timeline = [
  { phase: "Month 1", title: "Diagnostic & Foundation", text: "GRPL conducts a comprehensive marketing audit across six dimensions. Simultaneously, the fractional CMO integrates with the leadership team, building relationships and understanding the business context." },
  { phase: "Months 2-3", title: "Strategy & Alignment", text: "Development of the marketing strategy and 12-month roadmap. Positioning finalised, channel mix determined, budget allocated, measurement frameworks established. Stakeholder alignment sessions ensure the entire leadership team is working from the same plan." },
  { phase: "Months 4-12", title: "Execution & Optimisation", text: "Ongoing embedded leadership driving execution against the strategy. Quarterly strategy reviews. Team capability building. Agency management. Board and investor reporting. Continuous optimisation based on market feedback." },
];

const tiers = [
  { name: "Growth Foundation", price: "$7,000–$9,000/mo", days: "1-2 days/week", text: "Best for businesses with basic strategy in place that need senior oversight, coaching, and strategic direction. Includes monthly strategy sessions, quarterly planning, team coaching, and measurement framework establishment." },
  { name: "Growth Acceleration", price: "$10,000–$14,000/mo", days: "2-3 days/week", text: "The most common engagement. Full strategic leadership including marketing audit, roadmap development, team leadership, agency oversight, executive reporting, and accountability for outcomes.", popular: true },
  { name: "Growth Transformation", price: "$15,000–$17,000+/mo", days: "2-3 days/week", text: "For complex businesses requiring deep vertical expertise, product go-to-market strategy, board presentations, M&A marketing due diligence, or international market entry." },
];

const FractionalCMO = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Fractional CMO Services Australia"
      description="Enterprise-grade fractional CMO services for Australian businesses. Senior marketing leadership at a fraction of the full-time cost."
      canonical="https://www.grpl.com.au/services/fractional-cmo"
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
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/services">Services</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Fractional CMO</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Fractional CMO Services</h1>
          <h2 className="text-xl sm:text-2xl font-bold text-muted-foreground mb-8">Enterprise-Grade Marketing Leadership Without the Full-Time Cost</h2>

          <div className="prose-section mb-16 space-y-6">
            <p className="text-muted-foreground font-light leading-relaxed">Australian businesses between $2 million and $30 million in revenue face a common challenge: founder-led marketing no longer scales, agencies are executing without strategic direction, and a full-time CMO costs $300,000 to $450,000 per year once fully loaded. GRPL's fractional CMO service closes this gap - providing the strategic authority, market expertise, and executive accountability of a full-time Chief Marketing Officer on a flexible, part-time basis.</p>
            <p className="text-muted-foreground font-light leading-relaxed">A fractional CMO is not a consultant who delivers a strategy document and leaves. It is an embedded leadership role. GRPL's fractional CMOs sit within your leadership team, attend executive meetings, coach your marketing staff, manage <Link to="/blog/fractional-cmo-vs-marketing-agency" className="text-accent underline underline-offset-4 hover:text-accent/80">agency relationships</Link>, and own accountability for whether marketing is generating revenue. The engagement is structured around outcomes, not hours.</p>
          </div>

          {/* Deliverables */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">What a GRPL Fractional CMO Delivers</h2>
          <div className="grid gap-6 sm:grid-cols-2 mb-16">
            {deliverables.map((d) => (
              <div key={d.title} className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">How the Engagement Works</h2>
          <div className="space-y-8 mb-16">
            {timeline.map((t) => (
              <div key={t.phase} className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-sm font-bold text-accent">{t.phase}</span>
                </div>
                <div className="border-l-2 border-accent/20 pl-6 pb-2">
                  <h3 className="font-bold mb-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Engagement Models & Investment</h2>
          <div className="grid gap-6 md:grid-cols-3 mb-4">
            {tiers.map((t) => (
              <div key={t.name} className={`p-6 rounded-lg border ${t.popular ? "border-accent bg-accent/5" : "border-border"}`}>
                {t.popular && <span className="text-xs font-bold text-accent uppercase tracking-wider">Most Popular</span>}
                <h3 className="font-black text-lg mt-1 mb-1">{t.name}</h3>
                <p className="text-2xl font-black text-accent mb-1">{t.price}</p>
                <p className="text-xs text-muted-foreground mb-3">{t.days}</p>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-light mb-16">All engagements have a minimum 3-month term. 6-month and 12-month commitments receive preferential rates.</p>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Not sure if a Fractional CMO is right for you?</h2>
          <p className="text-background/70 font-light mb-8 max-w-xl mx-auto">
            Take GRPL's free Marketing Health Check. 5 minutes to understand where your marketing stands and what to prioritise next.
          </p>
          <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85" asChild>
            <Link to="/marketing-health-check">Take the Health Check</Link>
          </Button>
        </div>
      </section>

      <CTABanner
        headline="See how a fractional CMO could transform your marketing"
        subtext="Book a free 30-minute strategy call - no obligation, no pitch."
        buttonText="Book Your Strategy Call"
        buttonLink="/contact"
      />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Who This Is For */}
          <section className="py-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">Who This Is For</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">GRPL's fractional CMO service is designed for businesses that meet these criteria:</p>
            <ul className="space-y-2 text-muted-foreground font-light list-disc pl-6 mb-6">
              <li>Annual revenue between $2 million and $30 million</li>
              <li>Spending more than $10,000 per month on marketing without clear ROI</li>
              <li>The CEO is still the de facto marketing decision-maker</li>
              <li>Agency relationships are underperforming or lack strategic direction</li>
              <li>The business is entering a new market, launching a product, or scaling significantly</li>
              <li>The board or investors are asking for a credible marketing plan tied to revenue</li>
              <li>A marketing manager is in place but lacks the seniority to drive strategic change</li>
            </ul>
            <p className="text-muted-foreground font-light leading-relaxed">If this sounds like your business, a conversation with GRPL will quickly confirm whether the fractional CMO model is the right fit. Read more in our <Link to="/blog/when-ready-for-fractional-cmo" className="text-accent underline underline-offset-4 hover:text-accent/80">readiness guide</Link>.</p>
          </section>

          <FAQSection faqs={faqs} />

          <div className="pb-8">
            <LeadForm heading="Start the Conversation" subtext="Tell us about your business and we'll schedule a free strategy call to discuss whether a fractional CMO is the right fit." />
          </div>

          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">We Work With Businesses Across Australia</h2>
            <p className="text-muted-foreground font-light leading-relaxed">GRPL provides fractional CMO services in <Link to="/fractional-cmo-sydney" className="text-accent underline underline-offset-4 hover:text-accent/80">Sydney</Link>, <Link to="/fractional-cmo-melbourne" className="text-accent underline underline-offset-4 hover:text-accent/80">Melbourne</Link>, <Link to="/fractional-cmo-brisbane" className="text-accent underline underline-offset-4 hover:text-accent/80">Brisbane</Link>, and <Link to="/fractional-cmo-perth" className="text-accent underline underline-offset-4 hover:text-accent/80">Perth</Link> - with flexible engagement models that work regardless of geography.</p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default FractionalCMO;