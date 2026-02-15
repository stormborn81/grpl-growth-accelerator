export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  heading: string;
  faqs: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "fractional-cmo",
    label: "Fractional CMO",
    heading: "Fractional CMO",
    faqs: [
      {
        question: "What is a fractional CMO?",
        answer: "A fractional CMO is a senior marketing executive who provides strategic leadership to your business on a part-time or contracted basis, typically 2-4 days per week. Unlike a full-time CMO (who commands $200,000-$280,000+ in salary alone), a fractional CMO gives you the same calibre of strategic thinking, team leadership, and executive accountability at 30-40% of the cost. At GRPL, fractional CMOs are not advisors or consultants who hand over a strategy document. They embed inside your business, attending leadership meetings, managing your marketing function, and being directly accountable for commercial results.",
      },
      {
        question: "How is a fractional CMO different from a marketing consultant?",
        answer: "A marketing consultant typically analyses your situation, produces recommendations, and leaves you to implement them. A fractional CMO stays. They own the strategy AND the execution, leading your team, managing your agencies, building your marketing infrastructure, and being accountable for outcomes over months, not days. The difference is the gap between advice and accountability. Consultants give you a document. A fractional CMO gives you a functioning marketing operation.",
      },
      {
        question: "How is a fractional CMO different from a marketing agency?",
        answer: "An agency executes campaigns across many clients simultaneously, covering ads, content, social media, and design. A fractional CMO sits inside your business as a strategic leader. They set the marketing direction, choose the right agencies, write the briefs, build the team, and hold everyone (including agencies) accountable for commercial results. Agencies are tactical executors. A fractional CMO is a strategic leader. The best setup is usually both: a fractional CMO directing strategy with an agency handling execution.",
      },
      {
        question: "What does a fractional CMO actually do day-to-day?",
        answer: "A GRPL fractional CMO typically spends their time across four areas: (1) Strategic leadership, setting marketing direction, aligning it with business objectives, and reporting to the CEO/board on marketing performance. (2) Team management, leading the internal marketing team and/or coordinating external agencies and freelancers. (3) Execution oversight, ensuring campaigns, content, and initiatives are delivered on strategy and on time. (4) Capability building, hiring the right people, implementing marketing technology, building measurement frameworks, and creating the systems that allow the function to eventually run independently.",
      },
      {
        question: "How long does a fractional CMO engagement typically last?",
        answer: "GRPL recommends a minimum 6-month engagement. Month 1 is a diagnostic and strategy phase, months 2-4 focus on implementation and optimisation, and months 5-6 allow measurement and strategic refinement. Many clients continue for 12-18 months as their business grows. Some retain the fractional model permanently as their preferred structure. After the initial period, engagements continue month-to-month with no lock-in contracts.",
      },
      {
        question: "When is a business ready for a fractional CMO?",
        answer: "The strongest signal is when your business has outgrown founder-led marketing but a full-time CMO hire does not yet make financial or operational sense. Typical indicators include: revenue between $2M and $30M, marketing that feels tactical and disconnected from revenue, difficulty articulating why customers should choose you over alternatives, spending on marketing with unclear ROI, or a board/investors asking questions about marketing strategy that you cannot confidently answer.",
      },
      {
        question: "Can a fractional CMO work remotely?",
        answer: "Yes. GRPL's model is flexible, with engagements that can include regular on-site days, fully remote working, or a hybrid arrangement. Most clients find that 1-2 on-site days per week combined with remote work provides the best balance. What matters is strategic clarity, access to the leadership team, and clear accountability, not where your CMO physically sits. GRPL works with businesses across Sydney, Melbourne, Brisbane, Perth, and regional Australia.",
      },
    ],
  },
  {
    id: "chief-growth-officer",
    label: "Chief Growth Officer",
    heading: "Chief Growth Officer",
    faqs: [
      {
        question: "What is a Chief Growth Officer?",
        answer: "A Chief Growth Officer (CGO) is a senior executive who owns the entire revenue-generating system, spanning marketing, sales, product, and customer success. While a CMO focuses primarily on marketing, a CGO aligns all growth functions under one strategic mandate. This role is particularly valuable for businesses where growth has plateaued despite individual functions performing adequately. The problem is not any single function, but how they connect.",
      },
      {
        question: "When do I need a CGO instead of a CMO?",
        answer: "You likely need a CGO rather than a CMO when: marketing generates leads but sales cannot close them, product launches without marketing input on positioning, customer success is reactive rather than strategic, or nobody owns the end-to-end revenue engine. If your growth challenge sits at the intersection of multiple functions rather than within marketing alone, a CGO is the right model.",
      },
      {
        question: "Can the same person serve as both CMO and CGO?",
        answer: "Yes, and this is one of GRPL's differentiators. GRPL leaders have the experience to operate as either a CMO (focused on marketing) or a CGO (spanning the full growth function), depending on what your business needs. Many engagements evolve from one to the other as the business grows and the scope of the role expands. This flexibility means you do not need to hire two different people if your needs change.",
      },
    ],
  },
  {
    id: "pricing-engagement",
    label: "Pricing & Engagement",
    heading: "Pricing & Engagement",
    faqs: [
      {
        question: "How much does a fractional CMO cost in Australia?",
        answer: "GRPL's fractional CMO engagements typically range from $8,000 to $18,000 per month, depending on the number of days per week, complexity of the business, and whether execution management is included. Compare this to the total cost of a full-time CMO: $200,000-$280,000 base salary plus 11.5% superannuation, 15-25% bonus, leave entitlements, and a 15-20% recruiter fee, totalling $280,000-$400,000+ per year. The fractional model delivers equivalent strategic leadership at 60-70% less cost, with no recruitment risk and results from month one.",
      },
      {
        question: "What is included in the monthly fee?",
        answer: "GRPL's monthly fee covers: a dedicated senior marketing leader (2-4 days per week depending on scope), strategic planning and direction, team and agency management, marketing audit and diagnostic work, measurement and reporting, access to the GRPL specialist network for execution support, and regular leadership reporting. The fee does not include media spend, agency retainers, or marketing technology subscriptions. Those remain your business costs, directed by your GRPL CMO.",
      },
      {
        question: "Are there any lock-in contracts?",
        answer: "No. After the initial diagnostic period (typically 4 weeks), all GRPL engagements continue on rolling monthly agreements with a 30-day notice period. We earn your continued business through results, not contracts. GRPL recommends a minimum 6-month commitment to complete a full strategic cycle, but this is a recommendation, not a requirement.",
      },
      {
        question: "Do you charge by the hour?",
        answer: "No. GRPL does not sell hours. We sell strategic marketing leadership structured around outcomes and scope, not time tracked in 15-minute increments. The monthly fee is based on the days per week, complexity of the engagement, and the outcomes we are working toward. This means your GRPL CMO is focused on driving results, not watching the clock.",
      },
      {
        question: "What is the payment structure?",
        answer: "GRPL invoices monthly in advance. There is no upfront lump sum, no performance fee, and no hidden costs. The fee is the fee. If your engagement scope changes (more days, broader mandate), we adjust the monthly fee by mutual agreement.",
      },
    ],
  },
  {
    id: "marketing-audit",
    label: "Marketing Audit",
    heading: "Marketing Audit",
    faqs: [
      {
        question: "What is GRPL's marketing audit?",
        answer: "GRPL's marketing audit is a six-dimension diagnostic that assesses your marketing function across: (1) Strategy, is your marketing tied to business objectives and revenue targets? (2) Channels, are you investing in the right channels and measuring their effectiveness? (3) Team, do you have the right people in the right roles with the right skills? (4) Technology, is your marketing technology implemented, integrated, and delivering value? (5) Measurement, can you connect marketing activity to pipeline and revenue? (6) Positioning, is your market position clear, differentiated, and defensible? The output is not a generic checklist. It is a forensic diagnosis of your specific business with prioritised recommendations.",
      },
      {
        question: "How long does the marketing audit take?",
        answer: "The diagnostic phase typically takes 4 weeks. This includes data gathering and analysis (week 1-2), stakeholder interviews and market review (week 2-3), and synthesis, scoring, and recommendation development (week 3-4). The output is delivered as a working document with clear priorities, not a 60-slide presentation.",
      },
      {
        question: "Can I do just the audit without a longer engagement?",
        answer: "Yes. The marketing audit is available as a standalone engagement. Many clients start with the audit to understand where they stand before deciding whether a fractional CMO or CGO engagement is right for them. The audit gives you a clear, actionable roadmap regardless of whether you engage GRPL for the next phase or take it in-house.",
      },
      {
        question: "What happens after the audit?",
        answer: "After the audit, you receive a detailed diagnostic report with scored assessments across all six dimensions, a prioritised list of recommendations, and a proposed 12-month roadmap. From there, you have three options: (1) Engage GRPL as a fractional CMO or CGO to execute the roadmap, (2) use the roadmap to brief your internal team or existing agencies, or (3) engage GRPL for specific Growth Projects to address the highest-priority gaps.",
      },
    ],
  },
  {
    id: "working-with-grpl",
    label: "Working With GRPL",
    heading: "Working With GRPL",
    faqs: [
      {
        question: "Is GRPL just one person?",
        answer: "No. GRPL is a collective of senior marketing and growth leaders, each a proven operator in their domain. Every engagement is led by a senior strategic leader and supported by specialist capability from the GRPL network, covering brand strategy, demand generation, content, marketing technology, creative, revenue operations, AI and digital transformation, and research. You get the strategic depth of a senior executive with the execution breadth of an entire team.",
      },
      {
        question: "What industries does GRPL work with?",
        answer: "GRPL works with B2B and B2C businesses across technology and SaaS, fintech, professional services (legal, accounting, consulting, engineering), health and biotech, and high-growth companies. The common thread is businesses between $2M and $30M revenue at a growth inflection point. They have outgrown founder-led marketing and need experienced leadership to build a scalable marketing function.",
      },
      {
        question: "Where does GRPL operate?",
        answer: "GRPL provides fractional CMO and growth leadership services across Australia, with a particular focus on Sydney, Melbourne, Brisbane, and Perth. Engagements combine on-site and remote working, with the mix tailored to each client's needs. GRPL also works with businesses in New Zealand and internationally where the engagement model supports it.",
      },
      {
        question: "How quickly can GRPL start?",
        answer: "GRPL can typically begin a new engagement within 2 weeks of agreement. The first month is dedicated to the diagnostic and strategy phase, with execution underway by month 2. Compare this to the 4-6 month timeline of recruiting a full-time CMO and you can see why speed is one of the most compelling advantages of the fractional model.",
      },
      {
        question: "What happens when the engagement ends?",
        answer: "GRPL builds for independence from day one. Every engagement includes capability building: systems, processes, documentation, and team development, so the marketing function can stand on its own. When a transition happens (to a full-time CMO hire, a self-sufficient team, or a different structure), GRPL manages the handover to ensure continuity. The goal is a business that does not need us anymore. That is our definition of success.",
      },
      {
        question: "How does GRPL measure success?",
        answer: "GRPL measures success in commercial outcomes: revenue growth, pipeline generation, market share, and customer acquisition cost. Not impressions, not engagement rates, not content produced. Monthly reporting ties every marketing activity to business outcomes that your leadership team and board can understand and act on. If marketing is not contributing to revenue, something needs to change.",
      },
    ],
  },
  {
    id: "ai-digital-marketing",
    label: "AI & Digital Marketing",
    heading: "AI & Digital Marketing",
    faqs: [
      {
        question: "What is AI search optimisation and why does it matter?",
        answer: "AI search optimisation (also called AIO, GEO, or AEO) is the practice of structuring your content so it gets cited in AI-powered search platforms like ChatGPT, Google AI Overviews, Perplexity, and Claude. These platforms do not rank pages like traditional Google. They synthesise answers from sources they trust. To be cited, your content needs self-contained paragraphs that directly answer questions, specific data points, structured markup, and genuine authority signals. Businesses that optimise for AI search now will dominate the conversation as these platforms grow. Those that ignore it will become invisible to a rapidly growing segment of buyers.",
      },
      {
        question: "Does GRPL help with AI search visibility?",
        answer: "Yes. AI search optimisation is built into every GRPL engagement. This includes structuring website content for AI extraction, implementing schema markup that AI crawlers understand, ensuring robots.txt allows AI bots (GPTBot, ClaudeBot, PerplexityBot, etc.), creating content designed to be cited as authoritative sources, and monitoring AI search results for your key terms. This is a first-mover opportunity. Most Australian businesses have not started thinking about AI search yet.",
      },
      {
        question: "Is traditional SEO still important?",
        answer: "Absolutely. Traditional SEO remains the foundation. Google still drives the majority of search traffic, and the fundamentals (technical health, content quality, backlinks, site structure) matter as much as ever. AI search optimisation builds on top of traditional SEO, not instead of it. The businesses that will win are those doing both: ranking in traditional search AND being cited in AI-powered answers.",
      },
      {
        question: "How does GRPL use AI in its own work?",
        answer: "GRPL uses AI as an accelerator, not a replacement for strategic thinking. AI tools are used for research and competitive analysis, content development and iteration, data analysis and pattern recognition, and workflow automation. But strategy, positioning, creative direction, and strategic decision-making remain human-led. AI makes us faster and more thorough. It does not replace the judgement that comes from 17+ years of marketing leadership experience.",
      },
    ],
  },
  {
    id: "getting-started",
    label: "Getting Started",
    heading: "Getting Started",
    faqs: [
      {
        question: "How do I know if I need a fractional CMO or a different service?",
        answer: "The fastest way to find out is to take the free Growth Diagnostic, a 3-minute interactive assessment that identifies your growth stage, maps your marketing gaps across six dimensions, and recommends the GRPL service most likely to have the highest impact. Alternatively, book a free strategy call and we will talk through your situation directly.",
      },
      {
        question: "What does the first conversation look like?",
        answer: "The first conversation is a free, no-obligation strategy call, typically 30-45 minutes. We will ask about your business, your growth objectives, your current marketing setup, and the challenges you are facing. We will give you an honest assessment of whether GRPL is the right fit and which engagement model makes most sense. There is no pitch, no slide deck, and no pressure. If it is not a fit, we will tell you.",
      },
      {
        question: "What do I need to prepare before engaging GRPL?",
        answer: "Nothing formal. GRPL's diagnostic process is designed to gather everything we need in the first month. That said, having the following ready can speed things up: access to your analytics (Google Analytics, CRM data, advertising accounts), a clear sense of your revenue targets for the next 12 months, and an honest assessment of what you have tried so far and what has not worked. The most important thing is openness. The diagnostic works best when there are no sacred cows.",
      },
      {
        question: "Can I start with a small project before committing to a retainer?",
        answer: "Yes. GRPL's Marketing Audit and Growth Projects services are designed exactly for this. The marketing audit is a standalone 4-week diagnostic that gives you a clear picture of where your marketing stands. Growth Projects are scoped, fixed-fee engagements for specific initiatives like product launches, rebrands, or market entry. Both are excellent ways to experience GRPL's approach before considering a longer fractional engagement.",
      },
      {
        question: "How do I get started?",
        answer: "Three options: (1) Take the Growth Diagnostic, a free 3-minute assessment that identifies your gaps and recommends next steps. (2) Book a free strategy call, a direct conversation about your business and whether GRPL is the right fit. (3) Explore our services, learn about each service offering in detail and decide which aligns with your needs.",
      },
    ],
  },
  {
    id: "brand-foundation",
    label: "Brand Foundation",
    heading: "Brand Foundation",
    faqs: [
      {
        question: "What is GRPL's Brand Foundation service?",
        answer: "Brand Foundation is a structured 4-week sprint that builds a complete, investor-ready brand from the ground up: strategic foundation (vision, mission, values, positioning), visual identity (logo suite, colour palette, typography), brand voice and tone of voice guidelines, and real-world application (website messaging framework, pitch deck narrative, social media starter kit). It is designed for founders and early-stage businesses that need a professional brand fast, without the 4-6 month timeline and $50,000-$100,000 cost of a traditional branding agency.",
      },
      {
        question: "Who is Brand Foundation designed for?",
        answer: "Brand Foundation is ideal for three types of businesses: (1) Pre-revenue founders preparing to launch and needing a brand that signals credibility to investors, customers, and partners. (2) Early-stage businesses (under $3M revenue) that bootstrapped a logo and some messaging in the early days and now need a cohesive brand that matches their ambition. (3) Businesses pivoting or repositioning that need to rebuild their brand foundation to reflect a new direction. The common thread is a business that needs to move fast but cannot afford to build on a weak identity.",
      },
      {
        question: "How long does the Brand Foundation sprint take?",
        answer: "Four weeks from kickoff to final delivery. Week 1 covers strategic foundation (vision, mission, values, positioning through facilitated workshops). Week 2 is visual identity development (logo suite, colour palette, typography system). Week 3 focuses on brand voice, real-world application, and playbook creation. Week 4 is final delivery and handoff. The compressed timeline works because the process is structured to produce decisions, not endless rounds of options.",
      },
      {
        question: "Do I need to have a clear idea of my brand before starting?",
        answer: "No, that is exactly what this process is designed to extract. GRPL's facilitated workshops are built to draw out what already exists in your head and shape it into a coherent strategic foundation. Most founders have strong instincts about what their brand should feel like; they need a structured process to turn those instincts into a defined identity that can be consistently applied across every touchpoint.",
      },
      {
        question: "What do I actually receive at the end?",
        answer: "A comprehensive Brand Playbook (professionally designed PDF plus editable formats) containing: all logo files in every format needed (SVG, PNG, EPS, favicon, social media sizes), colour palette with exact hex codes and usage guidelines, typography system (heading and body fonts with specifications), brand voice guidelines with real-world before-and-after examples, website messaging framework (headlines and key messaging for core pages), pitch deck narrative structure, social media starter kit with example posts, and brand usage do's and don'ts. Everything a designer, developer, or copywriter needs to maintain brand consistency as you grow.",
      },
      {
        question: "How much does Brand Foundation cost?",
        answer: "The fixed project fee ranges from $12,000 to $25,000 depending on complexity and scope. A pre-revenue founder building a brand from scratch is typically at the lower end; a business repositioning with existing brand equity to consider is at the higher end. GRPL provides a specific quote after an initial conversation about your situation. For founders who continue into ongoing fractional CMO services, the sprint fee is credited against the first two months' retainer.",
      },
      {
        question: "Can Brand Foundation work for a business that already has some branding?",
        answer: "Yes. Many clients come to the sprint with a basic logo and inconsistent messaging that served the early days but no longer reflects where the business is heading. The sprint can rebuild the entire brand from the strategic foundation while preserving elements that are working. It is a reset, not necessarily a blank slate.",
      },
      {
        question: "Is this suitable for pre-revenue startups seeking investment?",
        answer: "Absolutely, and it is one of the ideal use cases. Investors evaluate founders partly on how professionally and clearly they present their business. A strong, cohesive brand signals strategic clarity, operational competence, and market readiness. The Brand Foundation helps founders fundraise more effectively by demonstrating they have thought deeply about who they are, who they serve, and where they are going. The pitch deck narrative component is specifically designed to support investor conversations.",
      },
    ],
  },
  {
    id: "growth-projects",
    label: "Growth Projects",
    heading: "Growth Projects",
    faqs: [
      {
        question: "What are GRPL Growth Projects?",
        answer: "Growth Projects are defined, fixed-fee strategic marketing engagements led by senior GRPL leaders, designed for businesses that need experienced marketing leadership for a specific initiative without committing to an ongoing retainer. Project types include product and market launches, brand strategy and rebrands, market validation and opportunity sizing, growth sprints, marketing leadership mentoring, and facilitated strategy workshops. Each project has a clear scope, timeline, deliverables, and investment agreed upfront.",
      },
      {
        question: "How is a Growth Project different from hiring an agency?",
        answer: "An agency project is execution-focused: they build the website, create the campaign, design the collateral. A GRPL Growth Project is strategy-focused: we define what should be built, why, for whom, and how to measure success. We provide the strategic architecture that ensures the execution (whether done by your internal team or an agency) is pointed in the right direction and tied to commercial outcomes. Think of it as hiring the strategic brain before hiring the hands.",
      },
      {
        question: "What types of Growth Projects does GRPL offer?",
        answer: "Six project types: (1) Product and Market Launch, complete go-to-market strategy including positioning, channel strategy, messaging, and launch timeline ($15,000-$35,000, 6-12 weeks). (2) Brand Strategy and Rebrand, competitive analysis, positioning, messaging architecture, and creative direction ($15,000-$30,000, 8-12 weeks). (3) Market Validation, structured market analysis, competitive mapping, and opportunity sizing ($10,000-$20,000, 4-8 weeks). (4) Growth Sprint, intensive, time-boxed engagement to solve a specific growth challenge ($8,000-$18,000, 4-6 weeks). (5) Marketing Leadership Mentoring, one-on-one executive mentoring for emerging marketing leaders ($4,000-$7,000/month, 3-6 months). (6) Strategy Workshop, facilitated half-day or full-day session for leadership teams ($5,000-$10,000, 1-2 days).",
      },
      {
        question: "Can a Growth Project lead into a fractional CMO engagement?",
        answer: "Yes, and this is a common path. Many clients engage GRPL for a specific project, a go-to-market strategy, a brand repositioning, a growth sprint, and then realise they need ongoing strategic leadership to execute against the strategy. If this happens, the project work carries directly into the fractional CMO engagement with full context preserved. There is no obligation or expectation to continue, but the option is always there.",
      },
      {
        question: "How do you prevent scope creep on projects?",
        answer: "Every Growth Project starts with a written proposal that defines the exact scope, deliverables, timeline, and fixed investment. If additional needs emerge during the project (which is natural, good strategy often reveals new opportunities), GRPL discusses them transparently and provides a separate proposal for the additional work. The original scope and fee never change without mutual agreement. This protects both sides and keeps the project focused.",
      },
      {
        question: "What is the minimum investment for a Growth Project?",
        answer: "Growth Projects start at $5,000 for facilitated strategy workshops and range to $35,000+ for comprehensive product launch or brand strategy projects. Most projects fall in the $10,000-$25,000 range. GRPL provides a specific quote after a free 30-minute scoping call where we understand the challenge, desired outcome, and timeline.",
      },
      {
        question: "Do you handle execution or just strategy?",
        answer: "It depends on the project type and what you need. For strategy projects (go-to-market, brand strategy, market validation), GRPL delivers the strategic framework and supports implementation. For growth sprints, GRPL works alongside your team through both strategy and execution. For mentoring engagements, GRPL coaches your team through execution. The balance is defined in the proposal so there are no surprises.",
      },
    ],
  },
  {
    id: "interim-cmo",
    label: "Interim CMO",
    heading: "Interim CMO",
    faqs: [
      {
        question: "What is an interim CMO?",
        answer: "An interim CMO is a senior marketing executive who steps into a full-time-equivalent leadership role on a temporary basis, typically to bridge a gap while you recruit a permanent CMO. Unlike a fractional CMO (who works part-time on an ongoing basis), an interim CMO operates at near-full-time intensity (3-4 days per week) for a defined period, usually 3-6 months. GRPL's interim CMOs operate with full executive authority from day one, leading the team, managing agencies, reporting to the CEO and board, and maintaining strategic continuity so the business does not lose momentum during the transition.",
      },
      {
        question: "When do I need an interim CMO?",
        answer: "Five common scenarios: (1) Sudden departure, your CMO has resigned or been made redundant and you need immediate marketing leadership. (2) First CMO hire, the business is hiring its first senior marketing leader but recruitment will take months. (3) Performance exit, you have removed an underperforming CMO and need someone to stabilise the function. (4) M&A or restructure, the business needs experienced marketing leadership to manage a transition or integration. (5) Parental leave or extended absence, your marketing leader is on leave for 6-12 months and the function needs senior leadership.",
      },
      {
        question: "How quickly can an interim CMO start?",
        answer: "GRPL can typically have an interim CMO operational within 1-2 weeks of agreement. The rapid assessment phase begins immediately in the first week, team leadership is established, and agencies receive direction. Compare this to the 3-6 months it takes to recruit a permanent CMO. The speed advantage is one of the most compelling reasons to engage an interim.",
      },
      {
        question: "How much does an interim CMO cost?",
        answer: "Interim CMO engagements are priced at $15,000 to $22,000 per month for 3-4 days per week. The premium over fractional CMO pricing ($8,000-$18,000/month) reflects the higher intensity, urgency, and near-full-time executive presence required. However, it is substantially less than the fully loaded cost of a full-time CMO ($300,000-$450,000 per year including super, bonuses, leave, and recruiter fees) and avoids the risk of a rushed permanent hire. Minimum engagement term is 3 months.",
      },
      {
        question: "How is an interim CMO different from a fractional CMO?",
        answer: "The difference is intensity, duration, and purpose. An interim CMO is a temporary, higher-intensity engagement (3-4 days per week, 3-6 months) designed to bridge a specific leadership gap until a permanent hire is made. A fractional CMO is an ongoing, part-time role (1-3 days per week, 6-12+ months) designed as the long-term marketing leadership solution for businesses that do not need or want a full-time CMO. Both are led by the same calibre of GRPL senior leader. If you are filling a gap, interim is the right model. If you want ongoing leadership without the full-time cost, fractional is the right model.",
      },
      {
        question: "What happens when we hire our permanent CMO?",
        answer: "GRPL conducts a structured handoff including a comprehensive briefing document covering strategy, team, agencies, technology, measurement, and outstanding initiatives. There is a face-to-face transition session with the incoming CMO, plus a 2-week availability window for questions and support. The permanent CMO inherits a functioning, well-documented marketing operation, not chaos. Many incoming CMOs have told us the GRPL handoff was the best onboarding experience they have had.",
      },
      {
        question: "Can the interim CMO help recruit the permanent replacement?",
        answer: "Yes. GRPL can advise on the role specification, participate in candidate evaluation, and assess whether candidates have the strategic capability the business needs. This is a natural extension of the interim role. Your GRPL leader understands the business deeply after months of embedded work and can provide informed perspective on what the permanent hire needs to deliver.",
      },
      {
        question: "What if we decide we do not need a full-time CMO after all?",
        answer: "This happens more often than you might expect. Sometimes the interim engagement demonstrates that a fractional CMO model is actually the better long-term solution, giving the business enterprise-grade marketing leadership without the $300K+ annual commitment. If this is the case, GRPL can transition the engagement from interim to ongoing fractional seamlessly, with the same leader, the same strategic context, just a different engagement structure and investment level.",
      },
      {
        question: "Will the interim CMO make major changes to our marketing?",
        answer: "The primary mandate is continuity, ensuring the existing strategy continues to execute and the marketing function remains productive. However, if the assessment reveals fundamental problems (strategy misaligned with business objectives, budget being wasted on underperforming channels, critical capability gaps), the interim CMO will recommend and implement changes with CEO approval. The goal is to leave the function in better shape than they found it, not just keep it on life support.",
      },
    ],
  },
];

// Flatten all FAQs for JSON-LD schema
export const getAllFaqs = (): FAQItem[] => {
  return faqCategories.flatMap((cat) => cat.faqs);
};
