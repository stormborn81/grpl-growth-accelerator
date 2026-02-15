import { Link } from "react-router-dom";
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
    name: "GRPL - Chief Growth Officer Services",
    description: "Fractional CGO services unifying marketing, sales, and product growth. Integrated revenue leadership for Australian businesses.",
    url: "https://www.grpl.com.au/services/chief-growth-officer",
    provider: { "@type": "Organization", name: "GRPL", url: "https://www.grpl.com.au" },
    areaServed: { "@type": "Country", name: "Australia" },
    serviceType: "Chief Growth Officer",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grpl.com.au/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.grpl.com.au/services" },
      { "@type": "ListItem", position: 3, name: "Chief Growth Officer", item: "https://www.grpl.com.au/services/chief-growth-officer" },
    ],
  },
];

const faqs = [
  { question: "How is a CGO different from a CMO?", answer: "A CMO owns marketing - positioning, demand generation, brand, and marketing operations. A CGO owns the entire revenue-generating system, including marketing, sales alignment, product go-to-market, customer success, and unit economics. The CGO role is broader, more cross-functional, and directly accountable for revenue rather than just pipeline." },
  { question: "Does my business need a CGO or a CMO?", answer: "If your primary challenge is marketing strategy - you need better positioning, stronger demand generation, clearer channel strategy - a fractional CMO is likely the right fit. If your challenge is growth integration - marketing generates leads but sales cannot convert them, customers churn before generating lifetime value, or your acquisition cost is unsustainable - you likely need a fractional CGO to align the entire growth system." },
  { question: "What size business benefits most from a fractional CGO?", answer: "Businesses between $2 million and $30 million in revenue that have achieved product-market fit but need to scale growth systematically. At this stage, a full-time CGO commanding $300,000 to $400,000+ per year is often unaffordable, but the integration problem is real and needs senior leadership to solve." },
  { question: "How does a fractional CGO work with our existing team?", answer: "The fractional CGO works as a peer to your existing functional leaders - head of sales, head of product, head of marketing. They do not replace these roles; they integrate them. The CGO runs the cross-functional operating rhythm, facilitates alignment, resolves conflicts between functions, and ensures everyone is working toward the same revenue target." },
  { question: "What metrics does a CGO focus on?", answer: "Customer acquisition cost (CAC), customer lifetime value (LTV), CAC payback period, net revenue retention, annual contract value, pipeline conversion rates, and total revenue growth. These metrics span all growth functions and require integrated decision-making." },
  { question: "Can we start with a fractional CMO and move to a CGO later?", answer: "Yes, this is a common progression. Many GRPL clients begin with a fractional CMO engagement to establish marketing strategy, then expand to a CGO engagement when they recognise the growth bottleneck extends beyond marketing into sales, product, and customer success alignment." },
];

const deliverables = [
  { title: "Growth Architecture", text: "Designing the system by which your business acquires, converts, retains, and expands customers. Every element connected into a coherent growth system." },
  { title: "Revenue Accountability", text: "Unlike a CMO who is evaluated on pipeline, a CGO is evaluated on revenue. GRPL's CGO takes ownership of the revenue target and works backwards to determine what each function needs to deliver." },
  { title: "Cross-Functional Alignment", text: "Running the operating rhythm that keeps marketing, sales, product, and customer success aligned. Weekly growth meetings, shared dashboards, and rapid issue resolution." },
  { title: "Unit Economics Mastery", text: "Deep analysis and optimisation of CAC, ACV, LTV, payback period, and net revenue retention. Making explicit tradeoff decisions between acquisition and expansion." },
  { title: "Go-To-Market Strategy", text: "For businesses entering new markets, launching products, or pivoting their model. The CGO designs the integrated go-to-market approach across all functions." },
  { title: "Board & Investor Communication", text: "Presenting the growth roadmap, unit economics, and progress against targets to the board and investors with data-driven credibility." },
];

const phases = [
  { phase: "Weeks 1-4", title: "Growth Diagnostic", text: "Comprehensive assessment of every growth function: marketing effectiveness, sales productivity, product-market fit, customer success metrics, and unit economics." },
  { phase: "Weeks 5-8", title: "Growth Architecture", text: "Design of the integrated growth system. Target segments defined, acquisition strategy established, conversion process mapped, onboarding and retention programs designed." },
  { phase: "Months 3-12", title: "Execution & Optimisation", text: "Embedded leadership driving cross-functional execution. Weekly growth meetings. Monthly performance reviews. Quarterly strategy adjustments. Continuous optimisation of unit economics." },
];

const ChiefGrowthOfficer = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Fractional Chief Growth Officer Australia"
      description="Fractional CGO services unifying marketing, sales, and product growth. Integrated revenue leadership for Australian businesses."
      canonical="https://www.grpl.com.au/services/chief-growth-officer"
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
              <BreadcrumbItem><BreadcrumbPage>Chief Growth Officer</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Chief Growth Officer Services</h1>
          <h2 className="text-xl sm:text-2xl font-bold text-muted-foreground mb-8">Integrated Growth Leadership Across Marketing, Sales, Product, and Customer Success</h2>

          <div className="space-y-6 mb-16">
            <p className="text-muted-foreground font-light leading-relaxed">Growth is no longer a marketing problem. It is an integration problem. When marketing optimises for leads, sales optimises for deals, product optimises for features, and customer success optimises for retention - each function pulls in a different direction. The result is wasted spend, misaligned effort, and growth that stalls despite everyone working hard.</p>
            <p className="text-muted-foreground font-light leading-relaxed">A <Link to="/blog/what-does-chief-growth-officer-do" className="text-accent underline underline-offset-4 hover:text-accent/80">Chief Growth Officer</Link> solves this by owning the entire revenue-generating system. GRPL's fractional CGO service provides the integrating leadership that aligns every growth function under one strategic mandate - accountable not just for demand generation, but for revenue closed and customer lifetime value achieved.</p>
          </div>

          {/* CMO vs CGO */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">The CGO Difference: Beyond Marketing</h2>
          <div className="grid gap-6 sm:grid-cols-2 mb-16">
            <div className="p-6 rounded-lg border border-border">
              <h3 className="font-bold mb-2">A CMO owns marketing.</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">Responsible for positioning, demand generation, brand, and marketing operations. Metrics: pipeline generated, MQLs, marketing-sourced revenue.</p>
            </div>
            <div className="p-6 rounded-lg border border-accent/30 bg-accent/5">
              <h3 className="font-bold mb-2">A CGO owns growth.</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">Responsible for the entire revenue system - acquisition, conversion, onboarding, retention, expansion. Metrics: total revenue, CAC, LTV, net revenue retention.</p>
            </div>
          </div>

          {/* Deliverables */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">What a GRPL Chief Growth Officer Delivers</h2>
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
            {phases.map((t) => (
              <div key={t.phase} className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right"><span className="text-sm font-bold text-accent">{t.phase}</span></div>
                <div className="border-l-2 border-accent/20 pl-6 pb-2">
                  <h3 className="font-bold mb-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Investment */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">Investment</h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">Fractional CGO engagements are typically 2-3 days per week at <Link to="/blog/fractional-cmo-cost-australia" className="text-accent underline underline-offset-4 hover:text-accent/80">$12,000 to $17,000 per month</Link>, depending on business complexity and growth stage. Minimum engagement term is 6 months - growth system design requires time to implement and optimise.</p>
        </div>
      </div>

      <CTABanner headline="Is integration your growth bottleneck?" subtext="Book a free strategy call to discuss whether a fractional CGO is what your business needs." buttonText="Book Your Strategy Call" buttonLink="/contact" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <section className="py-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">Who This Is For</h2>
            <ul className="space-y-2 text-muted-foreground font-light list-disc pl-6">
              <li>Revenue between $2 million and $30 million with product-market fit achieved</li>
              <li>Growth stalls despite strong marketing or sales activity</li>
              <li>Marketing, sales, and product teams operating in silos</li>
              <li>Need to improve unit economics (CAC, LTV, payback period)</li>
              <li>Preparing for a new market entry, product launch, or business pivot</li>
              <li>Want one senior leader accountable for the entire growth system</li>
            </ul>
          </section>

          <FAQSection faqs={faqs} />

          <div className="pb-8">
            <LeadForm heading="Explore CGO Services" subtext="Tell us about your growth challenges and we'll discuss whether integrated growth leadership is the right approach." />
          </div>

          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">We Work With Businesses Across Australia</h2>
            <p className="text-muted-foreground font-light leading-relaxed">GRPL provides fractional CMO and Chief Growth Officer services in <Link to="/fractional-cmo-sydney" className="text-accent underline underline-offset-4 hover:text-accent/80">Sydney</Link>, <Link to="/fractional-cmo-melbourne" className="text-accent underline underline-offset-4 hover:text-accent/80">Melbourne</Link>, <Link to="/fractional-cmo-brisbane" className="text-accent underline underline-offset-4 hover:text-accent/80">Brisbane</Link>, and <Link to="/fractional-cmo-perth" className="text-accent underline underline-offset-4 hover:text-accent/80">Perth</Link> - with flexible engagement models that work regardless of geography.</p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ChiefGrowthOfficer;