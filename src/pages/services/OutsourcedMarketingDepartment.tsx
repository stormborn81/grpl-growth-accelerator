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
    name: "GRPL - Outsourced Marketing Department",
    description: "A complete outsourced marketing department for Australian businesses. Strategy, leadership, and execution without the overhead.",
    url: "https://www.grpl.com.au/services/outsourced-marketing-department",
    provider: { "@type": "Organization", name: "GRPL", url: "https://www.grpl.com.au" },
    areaServed: { "@type": "Country", name: "Australia" },
    serviceType: "Outsourced Marketing Department",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grpl.com.au/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.grpl.com.au/services" },
      { "@type": "ListItem", position: 3, name: "Outsourced Marketing Department", item: "https://www.grpl.com.au/services/outsourced-marketing-department" },
    ],
  },
];

const faqs = [
  { question: "How is this different from hiring a marketing agency?", answer: "An agency delivers marketing deliverables - content, ads, campaigns. GRPL's outsourced marketing department provides the strategic leadership layer that agencies lack, combined with execution capability. You get an embedded CMO who owns strategy and accountability, plus the execution team to deliver against it. An agency gives you hands; GRPL gives you a brain and hands." },
  { question: "What if we already have some marketing capability in-house?", answer: "GRPL's outsourced marketing department is flexible. If you have a marketing coordinator or junior marketer, the fractional CMO provides the strategic direction and coaching they need while supplementing execution capacity in areas they cannot cover. The model scales to complement what you already have." },
  { question: "Can we transition to an in-house team later?", answer: "Yes, and this is often the long-term goal. As the business grows, GRPL helps you define the roles needed, recruit the right people, and transition the marketing function in-house. Many clients start with the full outsourced model and gradually bring capabilities in-house as revenue justifies the investment." },
  { question: "What channels do you cover?", answer: "GRPL's outsourced marketing department covers whatever channels the strategy requires. This typically includes content marketing, SEO, email marketing, LinkedIn, paid search, and paid social. For some businesses it extends to event marketing, account-based marketing, or partner marketing. The channel mix is determined by where your customers are." },
  { question: "How do we stay in control of our own marketing?", answer: "GRPL operates as an extension of your leadership team, not as a black box. You have full visibility into strategy, campaigns, performance data, and spending. The fractional CMO reports to your CEO and presents to your leadership team monthly. All assets, data, and accounts remain yours." },
  { question: "What is the minimum commitment?", answer: "6 months. Marketing requires time to build strategic foundations, launch campaigns, accumulate data, and optimise. A shorter engagement does not provide enough time to generate meaningful results or demonstrate ROI." },
];

const includes = [
  { title: "Strategic Leadership", text: "A senior fractional CMO who owns the marketing strategy, positioning, channel mix, budget allocation, and measurement framework. An executive leader embedded in your business who is accountable for outcomes." },
  { title: "Campaign Execution", text: "End-to-end campaign management across the channels that matter for your business - content marketing, email, LinkedIn, paid search and social, SEO, events, or account-based marketing." },
  { title: "Content Production", text: "Blog articles, case studies, white papers, social media content, email sequences, landing pages, and sales enablement materials. Every piece tied to the strategic narrative." },
  { title: "Technology & Operations", text: "CRM configuration, marketing automation setup, analytics implementation, and reporting dashboard creation. Tool selection, setup, and ongoing management." },
  { title: "Measurement & Reporting", text: "Monthly reporting connecting marketing activity to pipeline and revenue. Board-ready quarterly reviews. Clear dashboards showing what is working and where to reallocate." },
];

const timeline = [
  { phase: "Month 1", title: "Foundation", text: "Marketing audit, strategy development, technology assessment, and channel planning. By the end of month 1, you have a clear marketing strategy, a 12-month roadmap, and campaigns ready to launch." },
  { phase: "Months 2-3", title: "Launch", text: "Campaigns go live across priority channels. Content production begins. Measurement frameworks are established. The fractional CMO integrates with your leadership team." },
  { phase: "Months 4-12", title: "Scale & Optimise", text: "Continuous campaign execution, performance optimisation, content production, and strategic adjustment based on market feedback. Quarterly strategic reviews." },
];

const OutsourcedMarketingDepartment = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Outsourced Marketing Department Australia"
      description="A complete outsourced marketing department for Australian businesses. Strategy, leadership, and execution without the overhead."
      canonical="https://www.grpl.com.au/services/outsourced-marketing-department"
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
              <BreadcrumbItem><BreadcrumbPage>Outsourced Marketing Department</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Outsourced Marketing Department</h1>
          <h2 className="text-xl sm:text-2xl font-bold text-muted-foreground mb-8">A Complete Marketing Function Without the Overhead of Building One</h2>

          <div className="space-y-6 mb-16">
            <p className="text-muted-foreground font-light leading-relaxed">Some businesses do not need a <Link to="/services/fractional-cmo" className="text-accent underline underline-offset-4 hover:text-accent/80">fractional CMO</Link> to sit above an existing team - they need the entire marketing function. The CEO has been handling marketing alongside everything else. There is no marketing team, no agency relationship, and no strategic direction. Revenue has grown through referrals, founder hustle, and product quality. But the business has reached a stage where organic growth is slowing, competition is intensifying, and the market will not wait.</p>
            <p className="text-muted-foreground font-light leading-relaxed">GRPL's outsourced marketing department provides the complete stack: strategic leadership, campaign execution, content production, channel management, measurement, and reporting. It is a fully functional marketing department - delivered as a service.</p>
          </div>

          {/* What's Included */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">What the Outsourced Marketing Department Includes</h2>
          <div className="grid gap-6 sm:grid-cols-2 mb-16">
            {includes.map((item) => (
              <div key={item.title} className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">How It Works</h2>
          <div className="space-y-8 mb-16">
            {timeline.map((t) => (
              <div key={t.phase} className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right"><span className="text-sm font-bold text-accent">{t.phase}</span></div>
                <div className="border-l-2 border-accent/20 pl-6 pb-2">
                  <h3 className="font-bold mb-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Agency vs GRPL */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Why This Is Different From an Agency</h2>
          <div className="grid gap-6 sm:grid-cols-2 mb-16">
            <div className="p-6 rounded-lg border border-border">
              <h3 className="font-bold mb-2">Agency Model</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">A team of specialists who execute deliverables. Strategy is secondary to production. The account manager serves 5-10 other clients. Incentives align to billing more hours. If the relationship ends, you have no internal capability.</p>
            </div>
            <div className="p-6 rounded-lg border border-accent/30 bg-accent/5">
              <h3 className="font-bold mb-2">GRPL Outsourced Marketing</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">An embedded marketing leader who owns strategy and is accountable for outcomes. Execution driven by strategy. The goal is to build capability - either developing internal team members or providing the function until you are ready to hire.</p>
            </div>
          </div>

          {/* Investment */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">Investment</h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">Outsourced marketing department engagements start at $12,000 per month for strategy and core execution, scaling to $25,000+ per month for comprehensive services including content production, paid media management, and technology operations. Minimum engagement term is 6 months.</p>
        </div>
      </div>

      <CTABanner headline="Need a marketing department - without building one?" subtext="GRPL delivers the complete marketing function as a service." buttonText="Book a Strategy Call" buttonLink="/contact" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FAQSection faqs={faqs} />
          <div className="pb-16">
            <LeadForm heading="Build Your Marketing Function" subtext="Tell us about your business and we'll design an outsourced marketing department tailored to your needs and growth targets." />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default OutsourcedMarketingDepartment;