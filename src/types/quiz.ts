export interface QuizAnswer {
  value: number;
  label: string;
  description: string;
}

export interface QuizQuestion {
  id: number;
  pillar: string;
  question: string;
  rationale: string;
  answers: QuizAnswer[];
}

export interface QuizResult {
  score: number;
  tier: 'transform' | 'scale' | 'elevate';
  tierTitle: string;
  tierDescription: string;
  cta: {
    primary: string;
    secondary: string;
  };
  strengths: string[];
  weaknesses: string[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    pillar: "Brand Clarity",
    question: "How clearly can you describe your brand's unique value proposition and why you're different?",
    rationale: "A basic health check should verify that your brand's USPs and communication style are well defined.",
    answers: [
      { value: 0, label: "Needs significant improvement", description: "We don't have a concise statement" },
      { value: 1, label: "Somewhat", description: "We have a statement, but it's not widely understood" },
      { value: 2, label: "Solid", description: "Our value proposition is clear internally but isn't consistently used externally" },
      { value: 3, label: "Excellent", description: "Everyone can articulate our USP and it's evident in our messaging" }
    ]
  },
  {
    id: 2,
    pillar: "Audience Definition",
    question: "How well do you understand your target market's demographics and psychographics?",
    rationale: "Effective marketing requires more than demographic data – psychographics and behaviours provide direction.",
    answers: [
      { value: 0, label: "Needs significant improvement", description: "We have no documented personas" },
      { value: 1, label: "Somewhat", description: "We know basic demographics, but not attitudes or pain points" },
      { value: 2, label: "Solid", description: "We have personas, but they aren't used to guide messaging or campaigns" },
      { value: 3, label: "Excellent", description: "We have detailed personas (demographic and psychographic) and use them to drive marketing decisions" }
    ]
  },
  {
    id: 3,
    pillar: "Channel Mix",
    question: "How confident are you that your current mix of marketing channels reaches your target audience effectively?",
    rationale: "You need to list all channels used and be able to justify them.",
    answers: [
      { value: 0, label: "Needs significant improvement", description: "We're unsure which channels our audience uses" },
      { value: 1, label: "Somewhat", description: "We use multiple channels but can't justify each choice" },
      { value: 2, label: "Solid", description: "We know which channels work, but haven't optimised spend" },
      { value: 3, label: "Excellent", description: "We use a balanced mix and can justify each channel's purpose and ROI" }
    ]
  },
  {
    id: 4,
    pillar: "Strategic Goals",
    question: "Do you have clear marketing goals that align with the company mission, and how well are you tracking against them?",
    rationale: "Goals need to be measurable, specific and achievable to be useful.",
    answers: [
      { value: 0, label: "Needs significant improvement", description: "We don't have documented goals" },
      { value: 1, label: "Somewhat", description: "We have goals but they aren't specific or measured" },
      { value: 2, label: "Solid", description: "We have specific goals but lack regular tracking" },
      { value: 3, label: "Excellent", description: "Goals are measurable, tied to the mission, and reviewed regularly" }
    ]
  },
  {
    id: 5,
    pillar: "Competitive Positioning",
    question: "How do your marketing efforts compare with your key competitors?",
    rationale: "Understanding competitive strengths and weaknesses helps refine strategy.",
    answers: [
      { value: 0, label: "Needs significant improvement", description: "We have no idea what competitors are doing" },
      { value: 1, label: "Somewhat", description: "We occasionally monitor competitors" },
      { value: 2, label: "Solid", description: "We benchmark ourselves informally against a few competitors" },
      { value: 3, label: "Excellent", description: "We systematically track competitor marketing and adjust our strategy accordingly" }
    ]
  },
  {
    id: 6,
    pillar: "Execution Alignment",
    question: "To what extent do your day-to-day marketing activities reflect your overarching strategy?",
    rationale: "There's no point having a strategy if it doesn't drive execution.",
    answers: [
      { value: 0, label: "Needs significant improvement", description: "Day-to-day tasks are reactive and disconnected from strategy" },
      { value: 1, label: "Somewhat", description: "We have a strategy, but daily tasks often drift from it" },
      { value: 2, label: "Solid", description: "We try to align activities, but lack processes or automation" },
      { value: 3, label: "Excellent", description: "Daily work is guided by strategy; automation frees time for strategic tasks" }
    ]
  },
  {
    id: 7,
    pillar: "ROI and Reporting",
    question: "How confident are you in measuring the ROI of your marketing activities?",
    rationale: "Understanding which campaigns work is critical to maximising budget efficiency.",
    answers: [
      { value: 0, label: "Needs significant improvement", description: "We don't measure ROI" },
      { value: 1, label: "Somewhat", description: "We make rough estimates" },
      { value: 2, label: "Solid", description: "We measure some campaigns but not overall spend" },
      { value: 3, label: "Excellent", description: "We have dashboards that track ROI across all campaigns and use the insights to optimise spend" }
    ]
  },
  {
    id: 8,
    pillar: "MarTech Integration",
    question: "How well integrated is your marketing technology stack, and how effectively do you use automation and data?",
    rationale: "A modern marketing engine requires a cohesive, ROI-driven technology stack.",
    answers: [
      { value: 0, label: "Needs significant improvement", description: "We have disparate tools with no integration" },
      { value: 1, label: "Somewhat", description: "We've integrated some tools, but data is siloed" },
      { value: 2, label: "Solid", description: "Our tools are integrated, but we don't fully leverage automation" },
      { value: 3, label: "Excellent", description: "Our stack is fully integrated, with automation and data informing decisions" }
    ]
  },
  {
    id: 9,
    pillar: "Creativity & Content",
    question: "How effective is your content and creative in telling your story and engaging your audience?",
    rationale: "Storytelling and creative execution help turn logical benefits into emotional engagement.",
    answers: [
      { value: 0, label: "Needs significant improvement", description: "We have no content or brand storytelling strategy" },
      { value: 1, label: "Somewhat", description: "We occasionally produce content but it lacks consistency or impact" },
      { value: 2, label: "Solid", description: "We have a content strategy, but it's not tied to clear narratives or measurement" },
      { value: 3, label: "Excellent", description: "Our content is planned, consistent, and tells stories that resonate" }
    ]
  },
  {
    id: 10,
    pillar: "Scalability",
    question: "Do you have the systems, processes and resources to scale your marketing as the business grows?",
    rationale: "GRPL's value proposition includes building capacity and capability so marketing can scale without dependency.",
    answers: [
      { value: 0, label: "Needs significant improvement", description: "We're scrambling to keep up with current demand" },
      { value: 1, label: "Somewhat", description: "We can handle current needs but have no plan for growth" },
      { value: 2, label: "Solid", description: "We've started documenting processes and building playbooks" },
      { value: 3, label: "Excellent", description: "We have documented playbooks, trained staff, and can scale our marketing operations quickly" }
    ]
  }
];
