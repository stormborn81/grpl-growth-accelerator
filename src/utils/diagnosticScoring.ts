import type { Dimension, DimensionScores, GrowthStage, GrowthAmbitionTag } from "@/types/diagnostic";

const MAX_SCORES: DimensionScores = {
  strategy: 15,
  execution: 15,
  team: 15,
  technology: 15,
  measurement: 15,
  positioning: 15,
};

export function normaliseScores(raw: DimensionScores): DimensionScores {
  return {
    strategy: Math.round((raw.strategy / MAX_SCORES.strategy) * 100),
    execution: Math.round((raw.execution / MAX_SCORES.execution) * 100),
    team: Math.round((raw.team / MAX_SCORES.team) * 100),
    technology: Math.round((raw.technology / MAX_SCORES.technology) * 100),
    measurement: Math.round((raw.measurement / MAX_SCORES.measurement) * 100),
    positioning: Math.round((raw.positioning / MAX_SCORES.positioning) * 100),
  };
}

export function getTotalPercentage(normalised: DimensionScores): number {
  const dims = Object.values(normalised);
  return Math.round(dims.reduce((a, b) => a + b, 0) / dims.length);
}

export function getGrowthStage(totalPct: number): GrowthStage {
  if (totalPct <= 25) return 'foundation';
  if (totalPct <= 45) return 'traction';
  if (totalPct <= 70) return 'scale';
  return 'optimise';
}

export const GROWTH_STAGE_INFO: Record<GrowthStage, { title: string; subtitle: string; description: string; color: string; recommendedService: string }> = {
  foundation: {
    title: 'Foundation Stage',
    subtitle: 'Building the Base',
    description: 'Your business has significant untapped potential, but the marketing foundation needs to be built before growth tactics will work. The priority is strategic clarity: understanding your positioning, your audience, and the 2-3 channels that will actually move the needle. This is not a bad place to be. It is the starting line.',
    color: 'hsl(220, 60%, 50%)',
    recommendedService: 'Brand Foundation + Marketing Audit',
  },
  traction: {
    title: 'Traction Stage',
    subtitle: 'Ready to Build the Engine',
    description: 'You have some elements working, but marketing is fragmented: a mix of tactics without a unifying strategy or consistent measurement. The biggest risk at this stage is adding more activity without first building the strategic infrastructure. You need marketing leadership, not more marketing tactics.',
    color: 'hsl(174, 60%, 40%)',
    recommendedService: 'Fractional CMO + Marketing Audit',
  },
  scale: {
    title: 'Scale Stage',
    subtitle: 'Time to Professionalise',
    description: 'Your marketing is working in pockets, but it is not yet a system. You have outgrown the approach that got you here and need to build a professional marketing function: the right team, the right technology, the right measurement, and a leader who is accountable for the whole thing. This is the most impactful stage for a fractional CMO.',
    color: 'hsl(145, 50%, 40%)',
    recommendedService: 'Fractional CMO or Chief Growth Officer',
  },
  optimise: {
    title: 'Optimise Stage',
    subtitle: 'Sharpen the Edge',
    description: 'Your marketing function is relatively mature. The opportunity now is optimisation: finding the 10-20% improvements in positioning, channel mix, team capability, and measurement that compound into significant growth. A strategic advisor or CGO can provide the outside perspective that identifies what your team is too close to see.',
    color: 'hsl(45, 80%, 50%)',
    recommendedService: 'Chief Growth Officer or Growth Projects',
  },
};

export function getDimensionAssessment(dimension: Dimension, pct: number): string {
  const assessments: Record<Dimension, [string, string, string]> = {
    strategy: [
      'Your marketing lacks strategic direction. Activity without strategy is expensive guesswork.',
      'Some strategic thinking exists, but it is not yet driving all marketing decisions consistently.',
      'Strong strategic foundation. Your marketing is guided by clear direction and business objectives.',
    ],
    execution: [
      'Marketing execution is minimal or inconsistent. The gap between plan and action is significant.',
      'You are executing across some channels, but there are gaps in consistency and coverage.',
      'Solid execution capability. Your team can deliver across multiple channels consistently.',
    ],
    team: [
      'Your marketing team is under-resourced for your growth ambitions. This is a critical bottleneck.',
      'You have some marketing capability, but key roles or skills are missing.',
      'Your marketing team is well-structured and capable of executing at your current growth stage.',
    ],
    technology: [
      'Your marketing technology is basic or underutilised. You are likely making decisions without good data.',
      'You have tools in place but they are not fully integrated or leveraged.',
      'Your tech stack is solid and you are using it to inform decisions and automate where it matters.',
    ],
    measurement: [
      'You cannot connect marketing activity to revenue. This makes every budget decision a guess.',
      'Some measurement is in place, but you cannot confidently tie marketing spend to business outcomes.',
      'Strong measurement discipline. You know what is working and can allocate budget with confidence.',
    ],
    positioning: [
      'Your market positioning is unclear or undifferentiated. Buyers cannot tell you apart from alternatives.',
      'You have a sense of your positioning, but it is not yet sharp enough to drive consistent messaging.',
      'Clear, differentiated positioning. Your market knows who you are and why you are different.',
    ],
  };
  const tier = pct <= 33 ? 0 : pct <= 66 ? 1 : 2;
  return assessments[dimension][tier];
}

export function getDimensionColor(pct: number): string {
  if (pct <= 33) return '#E53E3E';
  if (pct <= 66) return '#ED8936';
  return '#38A169';
}

export function getTop3Gaps(normalised: DimensionScores): Dimension[] {
  const entries = Object.entries(normalised) as [Dimension, number][];
  entries.sort((a, b) => a[1] - b[1]);
  return entries.slice(0, 3).map(e => e[0]);
}

export const GAP_RECOMMENDATIONS: Record<Dimension, { title: string; body: string; link: string; linkText: string }> = {
  strategy: {
    title: 'Build a strategic marketing plan tied to revenue.',
    body: 'Your marketing needs a clear strategic direction before adding more tactics or channels. Start with a marketing audit that assesses where you are, then build a 12-month plan that connects every activity to a revenue outcome. Without this, everything else is guesswork.',
    link: '/services/marketing-audit',
    linkText: 'Explore the Marketing Audit',
  },
  execution: {
    title: 'Close the execution gap.',
    body: 'Strategy without execution is academic. You need either the internal capability or the right external partners, directed by someone who understands your strategy. A fractional CMO can build and manage your execution engine while you focus on the business.',
    link: '/services/fractional-cmo',
    linkText: 'Learn about Fractional CMO',
  },
  team: {
    title: 'Invest in marketing leadership before marketing hires.',
    body: 'Hiring a marketing manager without a marketing strategy means they will build what they know, not what you need. Get the strategic leadership in place first, then hire the team to execute it.',
    link: '/blog/when-ready-for-fractional-cmo',
    linkText: 'How a Fractional CMO builds teams',
  },
  technology: {
    title: 'Fix your marketing technology before buying more.',
    body: 'Most businesses are using 20% of the tools they are paying for. Before adding another platform, audit what you have, integrate it properly, and build the reporting that connects activity to outcomes.',
    link: '/services/marketing-audit',
    linkText: 'Marketing Audit: Technology Dimension',
  },
  measurement: {
    title: 'Build a measurement framework that your leadership team trusts.',
    body: 'If you cannot answer "what is our cost per qualified lead?" and "what is marketing\'s revenue contribution?" you have a measurement gap that is costing you more than you think. Fix this first.',
    link: '/blog/b2b-marketing-leadership-strategy-execution',
    linkText: 'B2B Marketing: Strategy to Execution',
  },
  positioning: {
    title: 'Sharpen your positioning before spending another dollar on marketing.',
    body: 'If you cannot articulate why a customer should choose you in one sentence, your marketing will always underperform, regardless of budget or channels. Positioning is the foundation everything else is built on.',
    link: '/services/brand-foundation',
    linkText: 'Brand Foundation Service',
  },
};

export function getRecommendedService(stage: GrowthStage, tag: GrowthAmbitionTag | null): { name: string; path: string; description: string } {
  if (stage === 'foundation') {
    return { name: 'Marketing Audit + Brand Foundation', path: '/services/marketing-audit', description: 'Start with a strategic diagnostic to build the foundation your marketing needs before investing in channels or tactics.' };
  }
  if (stage === 'optimise') {
    return { name: 'Chief Growth Officer', path: '/services/chief-growth-officer', description: 'Your marketing is mature enough to benefit from strategic growth leadership that optimises across marketing, sales, and revenue functions.' };
  }
  if (stage === 'traction') {
    if (tag === 'strategy_focus' || tag === 'efficiency_focus') {
      return { name: 'Marketing Audit', path: '/services/marketing-audit', description: 'A structured diagnostic will identify exactly where your marketing is leaking value and where to focus for maximum impact.' };
    }
    return { name: 'Fractional CMO', path: '/services/fractional-cmo', description: 'Senior marketing leadership to build the strategic infrastructure and execution engine your business needs at this stage.' };
  }
  // scale stage
  if (tag === 'aggressive_growth') {
    return { name: 'Chief Growth Officer', path: '/services/chief-growth-officer', description: 'Align marketing, sales, and revenue functions under strategic growth leadership to accelerate your trajectory.' };
  }
  if (tag === 'efficiency_focus') {
    return { name: 'Marketing Audit', path: '/services/marketing-audit', description: 'A structured diagnostic will identify exactly where your marketing spend is underperforming and how to fix it.' };
  }
  return { name: 'Fractional CMO', path: '/services/fractional-cmo', description: 'Senior marketing leadership to professionalise your marketing function and build the systems that scale.' };
}
