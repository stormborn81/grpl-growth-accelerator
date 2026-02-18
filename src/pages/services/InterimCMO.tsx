import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import CopperFormEmbed from "@/components/CopperFormEmbed";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GRPL - Interim CMO",
    description: "Immediate interim CMO services while you hire a permanent marketing leader. Keep strategy on track and teams productive during the transition.",
    url: "https://www.grpl.com.au/services/interim-cmo",
    provider: { "@type": "Organization", name: "GRPL", url: "https://www.grpl.com.au" },
    areaServed: { "@type": "Country", name: "Australia" },
    serviceType: "Interim CMO",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grpl.com.au/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.grpl.com.au/services" },
      { "@type": "ListItem", position: 3, name: "Interim CMO", item: "https://www.grpl.com.au/services/interim-cmo" },
    ],
  },
];

const faqs = [
  { question: "How quickly can an interim CMO start?", answer: "GRPL can typically have an interim CMO operational within 1-2 weeks of agreement. The rapid assessment phase begins immediately, and team leadership is established in the first week. This is one of the key advantages of the interim model over recruitment - a permanent CMO hire takes 3-6 months; an interim CMO starts in days." },
  { question: "How long does a typical interim CMO engagement last?", answer: "Most engagements run 3-6 months, aligned with the typical timeframe to recruit a permanent CMO. Some engagements extend to 9-12 months if the recruitment process takes longer or if the business decides to transition to an ongoing fractional CMO model. GRPL is flexible and works to the timeline the business needs." },
  { question: "Will the interim CMO make major changes to our marketing strategy?", answer: "The primary mandate is continuity - ensuring the existing strategy continues to execute and the marketing function remains productive. However, if the assessment reveals that the existing strategy is fundamentally flawed or that urgent changes are needed, the interim CMO will recommend and implement changes with CEO approval. The goal is to leave the function stronger than they found it." },
  { question: "What happens when we hire our permanent CMO?", answer: "GRPL conducts a structured handoff including a comprehensive briefing document, a face-to-face transition session with the incoming CMO, and a 2-week availability window for questions and support. The incoming CMO inherits a clear understanding of strategy, team, agencies, technology, and outstanding initiatives - not a blank slate." },
  { question: "Can the interim CMO help with the permanent CMO recruitment?", answer: "Yes. GRPL can advise on the role specification, participate in candidate evaluation, and help assess whether candidates have the strategic capability the business needs. This is a natural extension of the interim role - the interim CMO understands the business deeply and can provide informed perspective on what the permanent hire needs to deliver." },
  { question: "What if we decide we do not need a full-time CMO after all?", answer: "This happens more often than you might expect. Sometimes the interim engagement demonstrates that a fractional CMO model is actually the better long-term solution. If this is the case, GRPL can transition the engagement from interim to ongoing fractional CMO seamlessly - the same leader, the same strategic context, just a different engagement model." },
  { question: "Is this more expensive than a fractional CMO?", answer: "Yes - interim CMO engagements are typically $15,000-$22,000 per month compared to $7,000-$17,000 for fractional CMO. The premium reflects the higher intensity (3-4 days per week vs 1-3 days), the urgency of the engagement, and the near-full-time executive presence required. However, it is substantially less expensive than the fully loaded cost of a full-time CMO ($300,000-$450,000 per year)." },
  { question: "What industries does GRPL's interim CMO service cover?", answer: "GRPL provides interim CMO services across B2B SaaS, professional services, technology, financial services, construction, and high-growth consumer businesses in Australia and New Zealand. The key requirement is a business with meaningful marketing activity that needs senior leadership to continue functioning during the transition." },
];

const deliverables = [
  { title: "Maintains Strategic Continuity", text: "Reviews the existing marketing strategy and ensures execution continues against plan. If the departing CMO left a solid strategy, the interim CMO sustains it. If the strategy was weak or unclear, the interim CMO strengthens it." },
  { title: "Leads the Marketing Team", text: "Steps into the team leadership role immediately. Runs weekly team meetings, provides campaign direction, resolves blockers, and maintains team morale and productivity." },
  { title: "Manages Agency & Vendor Relationships", text: "Agencies need a strategic counterpart on the client side. The interim CMO manages all agency and vendor relationships, ensuring work continues to plan and spend is managed responsibly." },
  { title: "Reports to the CEO & Board", text: "Takes over marketing reporting to the CEO, board, and investors. Presents performance data, strategic updates, and recommendations with the credibility and authority expected at the executive level." },
  { title: "Protects Pipeline & Revenue", text: "Ensures the marketing engine continues to generate leads, nurture prospects, and support sales during the transition. Revenue impact from a leadership vacuum typically appears 3-6 months later - the interim CMO prevents this." },
  { title: "Prepares the Ground for the Permanent Hire", text: "Actively improves the marketing function so the incoming permanent CMO inherits a strong foundation. This includes documenting strategy, strengthening measurement, upskilling the team, and resolving outstanding issues." },
];

const scenarios = [
  { title: "Sudden Departure", text: "Your CMO has resigned, been made redundant, or is on extended leave. The business needs immediate marketing leadership." },
  { title: "First CMO Hire", text: "The business is hiring its first senior marketing leader but the recruitment process will take months." },
  { title: "Performance Exit", text: "You have removed an underperforming CMO and need someone to stabilise the marketing function and prepare the ground for a stronger permanent hire." },
  { title: "M&A or Restructure", text: "The business is going through a merger, acquisition, or restructure that requires experienced marketing leadership to manage the transition." },
  { title: "Parental Leave or Extended Absence", text: "Your marketing leader is on parental leave or an extended absence and the business cannot afford to operate without senior marketing leadership." },
];

const timeline = [
  { phase: "Week 1", title: "Rapid Assessment", text: "GRPL's interim CMO conducts a rapid assessment of the marketing function: current strategy, team capability, agency relationships, campaign status, pipeline health, and technology stack. By the end of week 1, they have a clear understanding and a 30-day stabilisation plan." },
  { phase: "Weeks 2-4", title: "Stabilisation", text: "Execute the stabilisation plan. Ensure campaigns continue running, agencies have direction, the team has leadership, and the CEO has reporting. Address urgent issues. Establish the operating rhythm." },
  { phase: "Month 2+", title: "Leadership & Improvement", text: "With stability established, the interim CMO shifts focus to strengthening the marketing function: improving measurement, reallocating budget, upskilling team members, and addressing strategic gaps." },
  { phase: "Handoff", title: "Transition to Permanent CMO", text: "Structured handoff including a comprehensive briefing document, a face-to-face transition session, and a 2-week availability window for questions and support." },
];

const InterimCMO = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Interim CMO Australia | Bridge the Leadership Gap"
      description="Immediate interim CMO services while you hire a permanent marketing leader. Keep strategy on track and teams productive during the transition."
      canonical="https://www.grpl.com.au/services/interim-cmo"
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
              <BreadcrumbItem><BreadcrumbPage>Interim CMO</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Interim CMO</h1>
          <h2 className="text-xl sm:text-2xl font-bold text-muted-foreground mb-8">Keep Strategy Moving While You Hire the Right Leader</h2>

          <div className="prose-section mb-16 space-y-6">
            <p className="text-muted-foreground font-light leading-relaxed">Your CMO has resigned. Or been made redundant. Or the business has reached the point where you need a senior marketing leader for the first time and the recruitment process is going to take 3-6 months. In the meantime, campaigns stall, agencies drift without direction, the marketing team loses confidence, and the CEO gets dragged back into making marketing decisions they had finally stopped making.</p>
            <p className="text-muted-foreground font-light leading-relaxed">The cost of a marketing leadership vacuum is not just lost productivity - it is lost momentum. Competitors do not pause while you recruit. Customers do not wait. Pipeline does not build itself. The average time to hire a permanent CMO in Australia is 90-120 days. In a competitive market, it can stretch to 6 months or longer. GRPL's Interim CMO service fills this gap immediately - keeping strategy on track, teams productive, and growth moving forward while you find the right permanent leader.</p>
          </div>

          {/* What an Interim CMO Does */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">What an Interim CMO Does</h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-6">This is not a caretaker role. GRPL's interim CMOs operate with full executive authority from day one:</p>
          <div className="grid gap-6 sm:grid-cols-2 mb-16">
            {deliverables.map((d) => (
              <div key={d.title} className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>

          {/* When You Need One */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">When You Need an Interim CMO</h2>
          <div className="grid gap-6 sm:grid-cols-2 mb-16">
            {scenarios.map((s) => (
              <div key={s.title} className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">How the Interim CMO Engagement Works</h2>
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

          {/* Comparison */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">How This Differs From a Fractional CMO</h2>
          <div className="grid gap-6 md:grid-cols-2 mb-16">
            <div className="p-6 rounded-lg border border-accent bg-accent/5">
              <h3 className="font-black text-lg mb-3">Interim CMO</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-light list-disc pl-4">
                <li>Temporary, higher-intensity engagement</li>
                <li>Typically 3-4 days per week for 3-6 months</li>
                <li>Near-full-time executive presence</li>
                <li>Defined end point: arrival of permanent hire</li>
                <li>Bridges a specific leadership gap</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border border-border">
              <h3 className="font-black text-lg mb-3"><Link to="/services/fractional-cmo" className="hover:text-accent transition-colors">Fractional CMO</Link></h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-light list-disc pl-4">
                <li>Ongoing, part-time strategic leadership</li>
                <li>Typically 1-3 days per week for 6-12+ months</li>
                <li>Permanent solution without full-time cost</li>
                <li>Open-ended engagement</li>
                <li>Ongoing strategic leadership</li>
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground font-light leading-relaxed mb-16">Both are served by the same calibre of GRPL senior leader. If you are unsure which model you need, GRPL will help you determine the best approach. For more on readiness signals, read our guide on <Link to="/blog/when-ready-for-fractional-cmo" className="text-accent underline underline-offset-4 hover:text-accent/80">when your business is ready for a fractional CMO</Link>. You may also want to explore the <Link to="/services/chief-growth-officer" className="text-accent underline underline-offset-4 hover:text-accent/80">Chief Growth Officer</Link> service for broader growth integration.</p>

          {/* Investment */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">Investment</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">Interim CMO engagements are priced at <strong className="text-foreground">$15,000 to $22,000 per month</strong> for 3-4 days per week. This reflects the higher intensity and urgency of the interim model compared to a standard fractional CMO engagement. Minimum engagement term is 3 months with monthly extensions available.</p>
            <p className="text-muted-foreground font-light leading-relaxed">For businesses that transition from interim CMO to an ongoing fractional CMO engagement, GRPL provides continuity pricing to reflect the ongoing relationship.</p>
          </section>
        </div>
      </div>

      <CTABanner
        headline="Cannot afford to lose marketing momentum?"
        subtext="GRPL's Interim CMO can be operational within a week. Let's talk."
        buttonText="Book an Urgent Strategy Call"
        buttonLink="/contact"
      />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FAQSection faqs={faqs} />
          <div className="pb-8">
            <CopperFormEmbed />
          </div>

          <section className="pb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">We Work With Businesses Across Australia</h2>
            <p className="text-muted-foreground font-light leading-relaxed">GRPL provides interim CMO and fractional CMO services in <Link to="/fractional-cmo-sydney" className="text-accent underline underline-offset-4 hover:text-accent/80">Sydney</Link>, <Link to="/fractional-cmo-melbourne" className="text-accent underline underline-offset-4 hover:text-accent/80">Melbourne</Link>, <Link to="/fractional-cmo-brisbane" className="text-accent underline underline-offset-4 hover:text-accent/80">Brisbane</Link>, and <Link to="/fractional-cmo-perth" className="text-accent underline underline-offset-4 hover:text-accent/80">Perth</Link> - with flexible engagement models that work regardless of geography.</p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default InterimCMO;
