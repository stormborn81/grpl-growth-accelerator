import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
    "@type": "Service",
    name: "GRPL - Brand Foundation",
    description: "Build your brand from the ground up. GRPL's Brand Foundation sprint delivers vision, identity, and market positioning for founders in weeks.",
    url: "https://www.grpl.com.au/services/brand-foundation",
    provider: { "@type": "Organization", name: "GRPL", url: "https://www.grpl.com.au" },
    areaServed: { "@type": "Country", name: "Australia" },
    serviceType: "Brand Foundation",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grpl.com.au/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.grpl.com.au/services" },
      { "@type": "ListItem", position: 3, name: "Brand Foundation", item: "https://www.grpl.com.au/services/brand-foundation" },
    ],
  },
];

const faqs = [
  { question: "How long does the Brand Foundation sprint take?", answer: "Four weeks from kickoff to final delivery. Week 1 is the strategic foundation (vision, mission, values, positioning). Week 2 is visual identity development. Week 3 is brand voice, application, and playbook creation. Week 4 is final delivery and handoff. The compressed timeline works because the process is structured to produce decisions, not endless options." },
  { question: "Do I need to have a clear idea of my brand before starting?", answer: "No - that is what this process is for. GRPL's facilitated workshops are designed to extract what already exists in your head and shape it into a coherent strategic foundation. Most founders have strong instincts about what their brand should feel like; they need a structured process to turn those instincts into a defined identity." },
  { question: "Can this work for a business that already has some branding?", answer: "Yes. Many clients come to the Brand Foundation sprint with a basic logo and inconsistent messaging that served the early days but no longer reflects where the business is heading. The sprint can rebuild the entire brand from the strategic foundation while preserving elements that are working." },
  { question: "What if I need a website as well?", answer: "The Brand Foundation delivers a website messaging framework - the strategic narrative, headline structure, and key messaging for your core pages - but not the designed and built website itself. However, the Brand Playbook gives a web designer or developer everything they need to build a site that is brand-aligned. GRPL can recommend trusted web development partners if needed." },
  { question: "How much does it cost?", answer: "The fixed project fee ranges from $12,000 to $25,000 depending on complexity and scope. GRPL provides a specific quote after an initial conversation about your situation, stage, and needs. For founders who continue into ongoing fractional CMO services, the sprint fee is credited against the first two months' retainer." },
  { question: "Is this suitable for pre-revenue startups?", answer: "Yes - in fact, pre-revenue is one of the ideal stages. Investors evaluate founders partly on how professionally and clearly they present their business. A strong brand signals strategic clarity, operational competence, and market readiness. The Brand Foundation helps founders fundraise more effectively by demonstrating they have thought deeply about who they are and where they are going." },
  { question: "What do I receive at the end?", answer: "A complete Brand Playbook (designed PDF and editable formats), all logo files in every format needed (SVG, PNG, EPS, favicon, social media sizes), colour palette and typography specifications, brand voice guidelines with real-world examples, website messaging framework, pitch deck narrative, social media starter kit, and branded email templates. Everything you need to launch and maintain a professional brand presence." },
];

const strategicDeliverables = [
  { title: "Vision Statement", text: "Where is the business going? What future is it creating? GRPL works with founders to articulate a vision that is ambitious enough to inspire but specific enough to guide decisions. Not a generic platitude - a genuine north star." },
  { title: "Mission Statement", text: "What does the business do, for whom, and why does it matter? The mission bridges the gap between the vision and the day-to-day reality. GRPL ensures it is clear, differentiated, and something the team can actually rally behind." },
  { title: "Core Values", text: "The 3-5 non-negotiable principles that define how the business operates. GRPL's approach to values rejects the generic in favour of values that are genuinely distinctive and create real decision-making tension. If a value does not help you say no to something, it is not a value." },
  { title: "Market Positioning", text: "Where does the business sit in the competitive landscape? What space does it own? GRPL conducts competitive analysis and customer research to develop positioning that is defensible and differentiated - not just aspirational." },
  { title: "Brand Story", text: "The narrative that connects vision, mission, values, and positioning into a compelling story. This is the story told to investors, customers, partners, and future team members. GRPL crafts a founder story that is authentic, memorable, and strategically sharp." },
];

const identityDeliverables = [
  { title: "Visual Identity System", text: "Logo suite (primary, secondary, icon/favicon), colour palette (primary, secondary, accent with exact hex codes), typography system (heading and body fonts with usage guidelines), and a visual language framework defining how the brand looks across all touchpoints." },
  { title: "Brand Voice & Tone of Voice", text: "How does the brand sound? GRPL defines the brand voice with specific guidelines and real-world examples showing how the voice translates into website copy, social media posts, email communications, investor decks, and customer conversations. Not abstract principles - concrete, usable guidance." },
  { title: "Brand Playbook", text: "A comprehensive, designed document that packages everything into a single reference guide. This is the document your team, designers, copywriters, and agencies will use to maintain brand consistency as you grow." },
];

const applicationDeliverables = [
  { title: "Website Messaging Framework", text: "Headline, subheadline, and key messaging for the homepage and core pages - structured so a web designer or developer can build the site directly from the framework." },
  { title: "Pitch Deck Narrative", text: "The brand story structured into a pitch deck flow, ensuring investor presentations are aligned with the brand foundation." },
  { title: "Social Media Starter Kit", text: "Brand voice applied to 3-5 example social media posts across LinkedIn and one other relevant platform, plus a content direction guide." },
  { title: "Email Signature & Templates", text: "Branded email signature design and 2-3 email template structures that embody the brand voice and visual identity." },
];

const timeline = [
  { phase: "Week 1", title: "Discovery & Strategy Sprint", text: "An intensive workshop with the founder and core team. GRPL facilitates structured exercises covering vision, mission, values, competitive landscape, target customer, and positioning. By end of week 1, the strategic foundation is locked." },
  { phase: "Week 2", title: "Identity Development", text: "GRPL's design process translates the strategic foundation into visual identity. Logo concepts, colour exploration, typography selection, and visual language development. Founder reviews and provides feedback at the midpoint." },
  { phase: "Week 3", title: "Voice, Application & Playbook", text: "Brand voice and tone of voice defined with real-world examples. Website messaging framework written. Pitch deck narrative structured. Social media starter kit created. Everything compiled into the Brand Playbook." },
  { phase: "Week 4", title: "Delivery & Handoff", text: "Complete Brand Playbook delivered as a designed PDF and editable formats. All logo files delivered in every format needed. Handoff session with the founder and any team members, designers, or agencies who will use the brand." },
];

const whyPoints = [
  { title: "Speed Without Shortcuts", text: "4 weeks is fast, but it works because the process is structured. GRPL has refined this sprint over dozens of engagements, eliminating waste in traditional branding processes while preserving strategic rigour." },
  { title: "Investor-Ready From Day One", text: "Whether you are pre-funding or post-funding, the Brand Foundation delivers a brand that commands credibility. Investors back founders who look like they know what they are doing." },
  { title: "Built to Scale", text: "The brand playbook is an infrastructure for growth. As you hire team members, engage agencies, and build your website, the playbook ensures consistency while maintaining flexibility." },
  { title: "Strategic, Not Just Pretty", text: "GRPL's Brand Foundation starts with strategy - positioning, customer, competitive context - and builds the visual identity on top. The result is a brand that looks great and says the right things to the right people." },
];

const BrandFoundation = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Brand Foundation for Founders Australia"
      description="Build your brand from the ground up. GRPL's Brand Foundation sprint delivers vision, identity, and market positioning for founders in weeks."
      canonical="https://www.grpl.com.au/services/brand-foundation"
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
              <BreadcrumbItem><BreadcrumbPage>Brand Foundation</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Brand Foundation</h1>
          <h2 className="text-xl sm:text-2xl font-bold text-muted-foreground mb-8">Build Your Brand From the Ground Up - In Weeks, Not Months</h2>

          <div className="prose-section mb-16 space-y-6">
            <p className="text-muted-foreground font-light leading-relaxed">You have the idea. You may have the product. You might even have early customers or funding in place. What you do not have is a brand that matches the ambition - a coherent identity that communicates who you are, why you exist, what you stand for, and why anyone should care. Most founders either skip this entirely and cobble together a logo on Canva, or engage a branding agency that takes 4-6 months and charges $50,000-$100,000 for a process designed for established corporations, not fast-moving founders.</p>
            <p className="text-muted-foreground font-light leading-relaxed">GRPL's Brand Foundation service exists for the space between those two extremes. It is a structured, intensive sprint that builds a complete, investor-ready brand foundation in weeks - not months. Every element is designed for speed without sacrificing depth, because founders need to move fast but cannot afford to build on a weak identity.</p>
            <p className="text-muted-foreground font-light leading-relaxed">This is not just a logo. This is the strategic and visual architecture that everything else - your website, your pitch deck, your marketing, your culture - will be built on. For founders ready to take the next step, explore our <Link to="/services/fractional-cmo" className="text-accent underline underline-offset-4 hover:text-accent/80">Fractional CMO</Link> service to continue the growth journey.</p>
          </div>

          {/* Strategic Foundation */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">What Brand Foundation Delivers</h2>
          <h3 className="text-lg font-bold mb-6">Strategic Foundation</h3>
          <div className="grid gap-6 sm:grid-cols-2 mb-12">
            {strategicDeliverables.map((d) => (
              <div key={d.title} className="p-6 rounded-lg border border-border">
                <h4 className="font-bold mb-2">{d.title}</h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>

          {/* Brand Identity */}
          <h3 className="text-lg font-bold mb-6">Brand Identity</h3>
          <div className="grid gap-6 sm:grid-cols-2 mb-12">
            {identityDeliverables.map((d) => (
              <div key={d.title} className="p-6 rounded-lg border border-border">
                <h4 className="font-bold mb-2">{d.title}</h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>

          {/* Real-World Application */}
          <h3 className="text-lg font-bold mb-6">Real-World Application</h3>
          <div className="grid gap-6 sm:grid-cols-2 mb-16">
            {applicationDeliverables.map((d) => (
              <div key={d.title} className="p-6 rounded-lg border border-border">
                <h4 className="font-bold mb-2">{d.title}</h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">The GRPL Brand Sprint Process</h2>
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

          {/* Why This Works */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Why This Works for Founders</h2>
          <div className="grid gap-6 sm:grid-cols-2 mb-16">
            {whyPoints.map((p) => (
              <div key={p.title} className="p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          {/* Who This Is For */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">Who This Is For</h2>
            <ul className="space-y-2 text-muted-foreground font-light list-disc pl-6 mb-6">
              <li><strong>Pre-seed and seed-stage founders</strong> who need a credible, professional brand to support fundraising, customer acquisition, and team recruitment</li>
              <li><strong>Post-funding founders</strong> who have capital to deploy and need to move fast without building on a weak identity</li>
              <li><strong>Businesses pivoting or rebranding</strong> that need to rebuild their identity from the strategic foundation up</li>
              <li><strong>Founders who have outgrown their DIY brand</strong> - the Canva logo and inconsistent messaging served the early days, but the business has reached a stage where the brand needs to match the ambition</li>
            </ul>
            <p className="text-muted-foreground font-light leading-relaxed">This service is NOT for businesses that need a quick logo refresh or a single creative asset. It is a comprehensive strategic and creative process. For specific marketing initiatives, consider a <Link to="/services/growth-projects" className="text-accent underline underline-offset-4 hover:text-accent/80">Growth Project</Link> instead.</p>
          </section>

          {/* Investment */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">Investment</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">Brand Foundation sprint engagements are delivered at a fixed project fee of <strong className="text-foreground">$12,000 to $25,000</strong> depending on complexity, number of stakeholders, and scope of application deliverables. The fee covers the full 4-week sprint including all strategic workshops, visual identity development, brand voice and tone of voice, application examples, and the complete Brand Playbook.</p>
            <p className="text-muted-foreground font-light leading-relaxed">For founders who engage GRPL for ongoing <Link to="/services/fractional-cmo" className="text-accent underline underline-offset-4 hover:text-accent/80">fractional CMO services</Link> following the Brand Foundation, the sprint fee is credited against the first two months' retainer. Read our <Link to="/blog/fractional-cmo-australia-guide" className="text-accent underline underline-offset-4 hover:text-accent/80">guide to fractional CMOs in Australia</Link> to learn more.</p>
          </section>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Not sure where to start?</h2>
          <p className="text-background/70 font-light mb-8 max-w-xl mx-auto">
            Take GRPL's free Marketing Health Check. 5 minutes to understand where your brand and marketing stand today.
          </p>
          <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85" asChild>
            <Link to="/marketing-health-check">Take the Health Check</Link>
          </Button>
        </div>
      </section>

      <CTABanner
        headline="Ready to build a brand that matches your ambition?"
        subtext="Book a free 30-minute call to discuss your Brand Foundation sprint."
        buttonText="Book Your Brand Sprint Call"
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
            <p className="text-muted-foreground font-light leading-relaxed">GRPL provides brand foundation and fractional CMO services in <Link to="/fractional-cmo-sydney" className="text-accent underline underline-offset-4 hover:text-accent/80">Sydney</Link>, <Link to="/fractional-cmo-melbourne" className="text-accent underline underline-offset-4 hover:text-accent/80">Melbourne</Link>, <Link to="/fractional-cmo-brisbane" className="text-accent underline underline-offset-4 hover:text-accent/80">Brisbane</Link>, and <Link to="/fractional-cmo-perth" className="text-accent underline underline-offset-4 hover:text-accent/80">Perth</Link> - with flexible engagement models that work regardless of geography.</p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default BrandFoundation;
