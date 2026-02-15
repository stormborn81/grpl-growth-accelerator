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
    name: "GRPL - Growth Projects",
    description: "Strategic marketing projects with senior leadership. Product launches, rebrands, market validation, and growth sprints without an ongoing retainer.",
    url: "https://www.grpl.com.au/services/growth-projects",
    provider: { "@type": "Organization", name: "GRPL", url: "https://www.grpl.com.au" },
    areaServed: { "@type": "Country", name: "Australia" },
    serviceType: "Growth Projects",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grpl.com.au/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.grpl.com.au/services" },
      { "@type": "ListItem", position: 3, name: "Growth Projects", item: "https://www.grpl.com.au/services/growth-projects" },
    ],
  },
];

const faqs = [
  { question: "How is a Growth Project different from hiring an agency for a project?", answer: "An agency project is execution-focused - they build the website, create the campaign, design the collateral. A GRPL Growth Project is strategy-focused - we define what should be built, why, and for whom. We provide the strategic architecture that ensures the execution (whether done internally or by an agency) is pointed in the right direction. Think of it as hiring the brain before hiring the hands." },
  { question: "Can a Growth Project lead into a fractional CMO engagement?", answer: "Yes, and this is a common path. Many clients engage GRPL for a specific project - a go-to-market strategy, a brand repositioning - and then realise they need ongoing strategic leadership to execute against it. If this happens, the project work carries directly into the fractional CMO engagement with full context preserved. But there is no obligation or pressure to continue." },
  { question: "How do you prevent scope creep?", answer: "Every project starts with a written proposal that defines the exact scope, deliverables, timeline, and investment. If additional needs emerge during the project, GRPL discusses them transparently and provides a separate proposal for the additional work. The original scope and fee do not change without mutual agreement." },
  { question: "What is the typical timeline?", answer: "Most Growth Projects run 4-12 weeks depending on the type and complexity. Market Validation projects typically take 4-8 weeks. Product Launch strategies take 6-12 weeks. Brand Strategy projects take 8-12 weeks. Growth Sprints are 4-6 weeks. Workshops are 1-2 days. GRPL provides a specific timeline in the proposal." },
  { question: "Do you handle the execution or just the strategy?", answer: "It depends on the project type. For strategy projects (go-to-market, brand strategy, market validation), GRPL delivers the strategic framework and supports implementation. For growth sprints, GRPL works alongside the team through both strategy and execution. For mentoring, GRPL coaches the team through execution. The balance is defined in the proposal." },
  { question: "What is the minimum investment?", answer: "Growth Projects start at $5,000 for facilitated workshops and range to $35,000+ for comprehensive product launch or brand strategy projects. Most projects fall in the $10,000-$25,000 range. GRPL provides a specific quote after the scoping call." },
];

const projectTypes = [
  { title: "Product & Market Launch", text: "Bringing a new product to market or entering a new geography requires integrated go-to-market strategy - not just a campaign plan. GRPL designs the complete launch architecture: target customer definition, positioning, channel strategy, messaging framework, launch timeline, sales enablement, and measurement framework.", meta: "Typical duration: 6-12 weeks. Investment: $15,000-$35,000." },
  { title: "Brand Strategy & Rebrand", text: "When the business has outgrown its brand, changed direction, or needs to reposition in the market. GRPL leads the strategic process: competitive analysis, customer research, positioning development, messaging architecture, and creative direction for the visual identity refresh.", meta: "Typical duration: 8-12 weeks. Investment: $15,000-$30,000." },
  { title: "Market Validation & Business Identification", text: "For founders and businesses exploring new opportunities. GRPL provides structured market analysis, competitive landscape mapping, customer research, and opportunity sizing to validate whether a market is worth entering and how to approach it.", meta: "Typical duration: 4-8 weeks. Investment: $10,000-$20,000." },
  { title: "Growth Sprint", text: "An intensive, time-boxed engagement to solve a specific growth challenge. Pipeline is underperforming. A channel is not converting. Customer acquisition cost is too high. GRPL diagnoses the problem, designs the solution, and works with the team to implement it.", meta: "Typical duration: 4-6 weeks. Investment: $8,000-$18,000." },
  { title: "Marketing Leadership & Mentoring", text: "For businesses with emerging marketing leaders who need senior guidance. GRPL provides structured mentoring and coaching - weekly sessions, strategic frameworks, campaign reviews, and career development guidance. Ideal for businesses that have a capable marketing manager who needs the senior perspective to step up.", meta: "Typical duration: 3-6 months (half-day per week). Investment: $4,000-$7,000/month." },
  { title: "Ideation & Strategy Workshop", text: "A facilitated strategic workshop for leadership teams facing a specific decision or challenge. GRPL designs and facilitates a half-day or full-day session that produces actionable outcomes - not post-it notes. Topics range from go-to-market strategy to annual marketing planning.", meta: "Typical duration: 1-2 days including preparation and follow-up. Investment: $5,000-$10,000." },
];

const processSteps = [
  { step: "Step 1", title: "Scoping Call (Free)", text: "A 30-minute conversation to understand the project, the challenge, the desired outcome, and the timeline. GRPL assesses whether the project is a good fit and whether a Growth Projects engagement is the right model." },
  { step: "Step 2", title: "Proposal & Agreement", text: "GRPL delivers a written proposal within 5 business days. The proposal includes: project scope, specific deliverables, timeline with milestones, investment (fixed fee), and success criteria. No hidden costs." },
  { step: "Step 3", title: "Execution", text: "GRPL's senior leaders personally execute the project. You receive regular progress updates and have access to the project lead throughout." },
  { step: "Step 4", title: "Delivery & Handoff", text: "Final deliverables presented in a review session with the leadership team. All materials, frameworks, and documentation handed over. A 30-day follow-up check-in to ensure implementation is on track." },
];

const advantages = [
  { title: "Senior-Led, Not Delegated", text: "The person who scopes the project is the person who does the work. No account manager handoff. No junior staff doing the thinking." },
  { title: "Strategy First, Always", text: "Agency projects often start with execution. GRPL projects start with strategy: why do we need this and what should it achieve? This ensures the project solves the right problem." },
  { title: "Fixed Fee, Defined Scope", text: "Every Growth Project has a written scope and fixed investment. No hourly billing. No scope creep. If the scope needs to change, GRPL discusses it transparently before proceeding." },
  { title: "No Retainer Required", text: "Growth Projects are standalone engagements. If the project reveals a need for ongoing strategic leadership, GRPL can discuss a fractional CMO or CGO engagement - but there is no pressure or expectation." },
];

const GrowthProjects = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Marketing & Growth Projects Australia"
      description="Strategic marketing projects with senior leadership. Product launches, rebrands, market validation, and growth sprints - without an ongoing retainer."
      canonical="https://www.grpl.com.au/services/growth-projects"
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
              <BreadcrumbItem><BreadcrumbPage>Growth Projects</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Growth Projects</h1>
          <h2 className="text-xl sm:text-2xl font-bold text-muted-foreground mb-8">Senior Strategic Leadership for Defined Marketing Initiatives</h2>

          <div className="prose-section mb-16 space-y-6">
            <p className="text-muted-foreground font-light leading-relaxed">Not every business needs an ongoing <Link to="/services/fractional-cmo" className="text-accent underline underline-offset-4 hover:text-accent/80">fractional CMO</Link>. Sometimes the need is specific: a product launch that requires experienced go-to-market strategy. A rebrand that needs senior creative direction. A new market that needs validation before committing resources. A growth initiative that needs an executive hand to shape and execute.</p>
            <p className="text-muted-foreground font-light leading-relaxed">GRPL's Growth Projects service provides senior strategic leadership for defined marketing initiatives with a clear scope, timeline, and set of deliverables. It brings the same calibre of expertise as a fractional CMO engagement but applied to a specific project - with a fixed fee, defined outcomes, and no ongoing retainer commitment.</p>
            <p className="text-muted-foreground font-light leading-relaxed">This is not agency project work. There is no junior account manager running your project. GRPL's senior leaders personally lead every engagement, bringing the strategic depth and cross-functional perspective that separates a project that moves the needle from one that produces a nice report.</p>
          </div>

          {/* Project Types */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Project Types</h2>
          <div className="grid gap-6 sm:grid-cols-2 mb-16">
            {projectTypes.map((p) => (
              <div key={p.title} className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">{p.text}</p>
                <p className="text-xs text-accent font-medium">{p.meta}</p>
              </div>
            ))}
          </div>

          {/* Process */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">How Growth Projects Work</h2>
          <div className="space-y-8 mb-16">
            {processSteps.map((s) => (
              <div key={s.step} className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-sm font-bold text-accent">{s.step}</span>
                </div>
                <div className="border-l-2 border-accent/20 pl-6 pb-2">
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Why Growth Projects */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Why Growth Projects Instead of an Agency</h2>
          <div className="grid gap-6 sm:grid-cols-2 mb-16">
            {advantages.map((a) => (
              <div key={a.title} className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>

          {/* Who This Is For */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">Who This Is For</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">Growth Projects are ideal for businesses that:</p>
            <ul className="space-y-2 text-muted-foreground font-light list-disc pl-6 mb-6">
              <li>Have a specific, defined marketing challenge or initiative that needs senior strategic leadership</li>
              <li>Are not ready for (or do not need) an ongoing fractional CMO engagement</li>
              <li>Want to "test-drive" working with GRPL before committing to an ongoing relationship</li>
              <li>Need experienced guidance for a high-stakes decision: product launch, rebrand, market entry, or growth pivot</li>
              <li>Have an internal marketing team that needs senior strategic direction for a specific initiative</li>
              <li>Want fixed-fee predictability rather than open-ended retainer commitments</li>
            </ul>
            <p className="text-muted-foreground font-light leading-relaxed">For businesses needing a complete brand build, explore our <Link to="/services/brand-foundation" className="text-accent underline underline-offset-4 hover:text-accent/80">Brand Foundation</Link> sprint. For a diagnostic of your current marketing, consider a <Link to="/services/marketing-audit" className="text-accent underline underline-offset-4 hover:text-accent/80">Marketing Audit</Link>. Read our <Link to="/blog/fractional-cmo-vs-marketing-agency" className="text-accent underline underline-offset-4 hover:text-accent/80">comparison of fractional CMOs and agencies</Link> for more context.</p>
          </section>
        </div>
      </div>

      <CTABanner
        headline="Have a specific growth challenge or initiative?"
        subtext="Let's scope a project that solves it. Book a free 30-minute scoping call."
        buttonText="Book a Scoping Call"
        buttonLink="/contact"
      />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FAQSection faqs={faqs} />
          <div className="pb-8">
            <LeadForm heading="Scope Your Project" subtext="Tell us about your initiative and we'll schedule a free scoping call to discuss approach, timeline, and investment." />
          </div>

          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">We Work With Businesses Across Australia</h2>
            <p className="text-muted-foreground font-light leading-relaxed">GRPL provides growth projects and fractional CMO services in <Link to="/fractional-cmo-sydney" className="text-accent underline underline-offset-4 hover:text-accent/80">Sydney</Link>, <Link to="/fractional-cmo-melbourne" className="text-accent underline underline-offset-4 hover:text-accent/80">Melbourne</Link>, <Link to="/fractional-cmo-brisbane" className="text-accent underline underline-offset-4 hover:text-accent/80">Brisbane</Link>, and <Link to="/fractional-cmo-perth" className="text-accent underline underline-offset-4 hover:text-accent/80">Perth</Link> - with flexible engagement models that work regardless of geography.</p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default GrowthProjects;
