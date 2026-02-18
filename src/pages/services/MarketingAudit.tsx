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
    name: "GRPL - Marketing Audit",
    description: "GRPL's six-dimension marketing audit diagnoses what is actually broken in your strategy. Not a checklist - a diagnostic.",
    url: "https://www.grpl.com.au/services/marketing-audit",
    provider: { "@type": "Organization", name: "GRPL", url: "https://www.grpl.com.au" },
    areaServed: { "@type": "Country", name: "Australia" },
    serviceType: "Marketing Audit",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grpl.com.au/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.grpl.com.au/services" },
      { "@type": "ListItem", position: 3, name: "Marketing Audit", item: "https://www.grpl.com.au/services/marketing-audit" },
    ],
  },
];

const faqs = [
  { question: "How long does the marketing audit take?", answer: "The diagnostic process takes 3-4 weeks from kickoff to final presentation. This includes stakeholder interviews, data analysis, competitive research, and report development. The 90-day roadmap is delivered alongside the audit findings." },
  { question: "What do you need from us to conduct the audit?", answer: "Access to marketing performance data (Google Analytics, CRM data, advertising platform data), 60-90 minutes with 3-5 key stakeholders (CEO, head of sales, head of marketing, and any other relevant leaders), and access to current marketing materials, campaign results, and customer research if available." },
  { question: "Is this just a checklist of what we are doing wrong?", answer: "No. Most marketing audits are activity inventories - they list what you are doing and compare it to best practices. GRPL's audit is a strategic diagnostic. It examines why your marketing is or is not generating results and identifies the root causes of underperformance. The output is actionable, prioritised, and tied to a 90-day execution roadmap." },
  { question: "What if we already know our marketing needs work - do we still need an audit?", answer: "Knowing marketing needs improvement and knowing specifically what to fix are very different things. Most businesses have theories about what is wrong, but those theories are often incomplete or incorrect. The audit replaces assumptions with evidence and ensures you invest in solving the actual problems rather than the perceived ones." },
  { question: "Can the audit lead into an ongoing engagement?", answer: "Yes, and this is the most common path. The audit reveals the strategic priorities, and a fractional CMO or CGO engagement provides the leadership to execute against them. If you engage GRPL for ongoing services following the audit, the audit fee is credited against your first month's retainer." },
  { question: "How much does the marketing audit cost?", answer: "The fixed project fee ranges from $8,000 to $15,000 depending on business complexity, number of stakeholders, and scope of data analysis required. GRPL provides a specific quote after an initial conversation about your situation." },
];

const dimensions = [
  { num: "1", title: "Strategic Alignment", text: "Does your marketing strategy actually align with your business strategy? Can your marketing team articulate the target customer, the value proposition, and why the business is different? GRPL tests whether strategy exists on paper or in reality." },
  { num: "2", title: "Channel Effectiveness", text: "Which channels are genuinely generating qualified pipeline - and which are consuming budget without generating returns? GRPL maps channel investment to revenue outcomes and identifies where reallocation will generate immediate improvement." },
  { num: "3", title: "Team Capability", text: "Does your marketing team have the skills, structure, and seniority to execute the strategy? GRPL assesses whether the team is structured for the strategy or organised around legacy functions." },
  { num: "4", title: "Technology Stack", text: "Are your marketing tools serving the strategy - or has the technology tail started wagging the strategic dog? GRPL evaluates whether the tech stack enables measurement, automation, and execution." },
  { num: "5", title: "Customer Intelligence", text: "Does the business truly understand its customers - how they buy, what messaging resonates, what objections they raise? GRPL evaluates the depth and recency of customer insight." },
  { num: "6", title: "Competitive Positioning", text: "How is the business positioned relative to competitors? Is the positioning defensible and differentiated? GRPL conducts competitive analysis to assess whether the market sees you the way you see yourself." },
];

const stats = [
  { pct: "80%", text: "of businesses have a channel mix problem - investing based on best practices rather than where their customers make decisions." },
  { pct: "60%", text: "of businesses have a measurement gap - tracking activity instead of what matters: pipeline, acquisition cost, revenue influenced." },
  { pct: "40%", text: "of businesses have a positioning problem - claiming something the market has already claimed, or positioning too broadly." },
];

const MarketingAudit = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Marketing Audit Australia | GRPL Diagnostic Framework"
      description="GRPL's six-dimension marketing audit diagnoses what is actually broken in your strategy. Not a checklist - a diagnostic."
      canonical="https://www.grpl.com.au/services/marketing-audit"
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
              <BreadcrumbItem><BreadcrumbPage>Marketing Audit</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Marketing Audit</h1>
          <h2 className="text-xl sm:text-2xl font-bold text-muted-foreground mb-8">A Diagnostic Framework That Reveals What Is Actually Broken</h2>

          <div className="space-y-6 mb-16">
            <p className="text-muted-foreground font-light leading-relaxed">Most marketing audits tell you what you are doing. GRPL's marketing audit tells you what is wrong and what to fix. The difference matters. An activity inventory - listing your channels, campaigns, tools, and team - produces a checklist that confirms what you already know. GRPL's diagnostic framework examines six critical dimensions of your marketing function to surface the root causes of underperformance and identify the 2-3 levers that will actually move the needle.</p>
            <p className="text-muted-foreground font-light leading-relaxed">The audit is not an end in itself. Every GRPL audit concludes with a 90-day roadmap that translates findings into specific, actionable initiatives - each with an owner, a deadline, and a success metric. Read more about our <Link to="/blog/marketing-audit-framework" className="text-accent underline underline-offset-4 hover:text-accent/80">audit framework methodology</Link>.</p>
          </div>

          {/* Six Dimensions */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">The Six-Dimension Diagnostic Framework</h2>
          <div className="grid gap-6 sm:grid-cols-2 mb-16">
            {dimensions.map((d) => (
              <div key={d.num} className="p-6 rounded-lg border border-border">
                <span className="text-3xl font-black text-accent/20">{d.num}</span>
                <h3 className="font-bold mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">What We Typically Find</h2>
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {stats.map((s) => (
              <div key={s.pct} className="text-center p-6">
                <div className="text-4xl font-black text-accent mb-2">{s.pct}</div>
                <p className="text-sm text-muted-foreground font-light">{s.text}</p>
              </div>
            ))}
          </div>

          {/* Deliverables */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">What You Get</h2>
          <ul className="space-y-3 text-muted-foreground font-light mb-16 list-disc pl-6">
            <li><strong className="text-foreground">Diagnostic Report</strong> - Detailed findings across all six dimensions with specific evidence</li>
            <li><strong className="text-foreground">Opportunity Matrix</strong> - Prioritised list of improvement opportunities ranked by impact and effort</li>
            <li><strong className="text-foreground">90-Day Roadmap</strong> - Specific actions with an owner, deadline, and success metric</li>
            <li><strong className="text-foreground">Measurement Framework</strong> - Clear KPIs connecting marketing activity to pipeline and revenue</li>
            <li><strong className="text-foreground">Executive Presentation</strong> - Board-ready summary of findings and recommendations</li>
          </ul>

          {/* Investment */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">Investment</h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">The GRPL Marketing Audit is delivered over 3-4 weeks at a fixed project fee of $8,000 to $15,000 depending on business complexity. For businesses that engage GRPL for ongoing <Link to="/services/fractional-cmo" className="text-accent underline underline-offset-4 hover:text-accent/80">fractional CMO</Link> or <Link to="/services/chief-growth-officer" className="text-accent underline underline-offset-4 hover:text-accent/80">CGO services</Link> following the audit, the audit fee is credited against the first month's retainer.</p>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Want a quick snapshot first?</h2>
          <p className="text-background/70 font-light mb-8 max-w-xl mx-auto">
            Take GRPL's free Marketing Health Check. 5 minutes to understand where your marketing stands before committing to a full audit.
          </p>
          <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85" asChild>
            <Link to="/marketing-health-check">Take the Health Check</Link>
          </Button>
        </div>
      </section>

      <CTABanner headline="Find out what is actually holding your marketing back" subtext="GRPL's marketing audit gives you the clarity to invest with confidence." buttonText="Request a Marketing Audit" buttonLink="/contact" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FAQSection faqs={faqs} />
          <div className="pb-8">
            <LeadForm heading="Request a Marketing Audit" subtext="Tell us about your business and we'll confirm scope, timing, and investment for your diagnostic." />
          </div>

          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">We Work With Businesses Across Australia</h2>
            <p className="text-muted-foreground font-light leading-relaxed">GRPL provides marketing audit and fractional CMO services in <Link to="/fractional-cmo-sydney" className="text-accent underline underline-offset-4 hover:text-accent/80">Sydney</Link>, <Link to="/fractional-cmo-melbourne" className="text-accent underline underline-offset-4 hover:text-accent/80">Melbourne</Link>, <Link to="/fractional-cmo-brisbane" className="text-accent underline underline-offset-4 hover:text-accent/80">Brisbane</Link>, and <Link to="/fractional-cmo-perth" className="text-accent underline underline-offset-4 hover:text-accent/80">Perth</Link> - with flexible engagement models that work regardless of geography.</p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default MarketingAudit;