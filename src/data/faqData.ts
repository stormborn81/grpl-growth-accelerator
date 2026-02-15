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
        answer: "GRPL uses AI as an accelerator, not a replacement for strategic thinking. AI tools are used for research and competitive analysis, content development and iteration, data analysis and pattern recognition, and workflow automation. But strategy, positioning, creative direction, and strategic decision-making remain human-led. AI makes us faster and more thorough. It does not replace the judgement that comes from 25+ years of marketing leadership experience.",
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
];

// Flatten all FAQs for JSON-LD schema
export const getAllFaqs = (): FAQItem[] => {
  return faqCategories.flatMap((cat) => cat.faqs);
};
