import type { DiagnosticQuestion } from "@/types/diagnostic";

export const QUESTION_ORDER = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'];

export const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: 'q1',
    question: 'What best describes your business right now?',
    context: 'No wrong answers. This helps us understand your starting point.',
    type: 'single',
    defaultNext: 'q2',
    options: [
      {
        id: 'q1a',
        label: 'We are growing but it feels chaotic. No clear system.',
        points: [{ dimension: 'execution', points: 1 }],
      },
      {
        id: 'q1b',
        label: 'Growth has plateaued. We are doing things but nothing is moving the needle.',
        points: [{ dimension: 'strategy', points: 1 }, { dimension: 'execution', points: 2 }],
      },
      {
        id: 'q1c',
        label: 'We are early stage. Figuring out product-market fit and how to get traction.',
        points: [],
        branch: 'q1b_branch',
      },
      {
        id: 'q1d',
        label: 'We are scaling well but need to professionalise the marketing function.',
        points: [{ dimension: 'strategy', points: 2 }, { dimension: 'execution', points: 2 }, { dimension: 'team', points: 1 }],
      },
    ],
  },
  {
    id: 'q1b_branch',
    question: 'Where are you in the founder journey?',
    type: 'single',
    defaultNext: 'q2',
    options: [
      {
        id: 'q1b_a',
        label: 'Pre-revenue. Building product, testing the market.',
        points: [],
      },
      {
        id: 'q1b_b',
        label: 'First customers. Some revenue, figuring out what works.',
        points: [{ dimension: 'strategy', points: 1 }, { dimension: 'positioning', points: 1 }],
      },
      {
        id: 'q1b_c',
        label: 'Under $1M revenue. It is working but needs fuel.',
        points: [{ dimension: 'strategy', points: 1 }, { dimension: 'execution', points: 1 }, { dimension: 'positioning', points: 1 }],
      },
    ],
  },
  {
    id: 'q2',
    question: 'What is your approximate annual revenue?',
    type: 'single',
    defaultNext: 'q3',
    options: [
      { id: 'q2a', label: 'Under $1M', points: [], revenueTier: 'under-1m' },
      { id: 'q2b', label: '$1M - $3M', points: [{ dimension: 'team', points: 1 }], revenueTier: '1m-3m' },
      { id: 'q2c', label: '$3M - $10M', points: [{ dimension: 'team', points: 1 }, { dimension: 'strategy', points: 1 }], revenueTier: '3m-10m' },
      { id: 'q2d', label: '$10M - $30M', points: [{ dimension: 'team', points: 2 }, { dimension: 'strategy', points: 1 }], revenueTier: '10m-30m' },
      { id: 'q2e', label: '$30M+', points: [{ dimension: 'team', points: 2 }, { dimension: 'strategy', points: 2 }], revenueTier: '30m-plus' },
    ],
  },
  {
    id: 'q3',
    question: 'Who is currently responsible for marketing strategy in your business?',
    context: 'Not execution. Who decides what to do and why.',
    type: 'single',
    defaultNext: 'q4',
    options: [
      {
        id: 'q3a',
        label: 'Me (the founder/CEO)',
        points: [],
        interstitial: 'You are not alone. 68% of businesses at your stage are founder-led on marketing.',
      },
      {
        id: 'q3b',
        label: 'A marketing manager or coordinator',
        points: [{ dimension: 'strategy', points: 1 }, { dimension: 'team', points: 1 }],
      },
      {
        id: 'q3c',
        label: 'An external agency',
        points: [{ dimension: 'team', points: 1 }, { dimension: 'execution', points: 1 }],
      },
      {
        id: 'q3d',
        label: 'A senior marketing leader (Head of / Director / CMO)',
        points: [{ dimension: 'strategy', points: 2 }, { dimension: 'team', points: 3 }, { dimension: 'execution', points: 2 }],
      },
      {
        id: 'q3e',
        label: 'Nobody, honestly',
        points: [],
      },
    ],
  },
  {
    id: 'q4',
    question: 'Can you articulate in one sentence why a customer should choose you over every alternative, including doing nothing?',
    type: 'swipe',
    defaultNext: 'q5',
    options: [
      {
        id: 'q4a',
        label: 'Yes. We have a clear, differentiated position.',
        points: [{ dimension: 'positioning', points: 3 }, { dimension: 'strategy', points: 2 }],
      },
      {
        id: 'q4b',
        label: 'Sort of. We know what we do, but struggle to articulate why us.',
        points: [{ dimension: 'positioning', points: 1 }, { dimension: 'strategy', points: 1 }],
      },
      {
        id: 'q4c',
        label: 'No. We compete on price or relationships, not positioning.',
        points: [],
      },
    ],
  },
  {
    id: 'q5',
    question: 'Which marketing channels are you actively investing in?',
    context: 'Select all that apply. "Investing" means budget and consistent effort, not a post once a month.',
    type: 'multi',
    defaultNext: 'q6',
    options: [
      { id: 'q5a', label: 'Content marketing / blog', points: [{ dimension: 'execution', points: 1 }] },
      { id: 'q5b', label: 'SEO', points: [{ dimension: 'execution', points: 1 }, { dimension: 'technology', points: 1 }] },
      { id: 'q5c', label: 'Paid advertising (Google, Meta, LinkedIn)', points: [{ dimension: 'execution', points: 1 }] },
      { id: 'q5d', label: 'Email marketing', points: [{ dimension: 'execution', points: 1 }, { dimension: 'technology', points: 1 }] },
      { id: 'q5e', label: 'Social media (organic)', points: [{ dimension: 'execution', points: 1 }] },
      { id: 'q5f', label: 'Events / conferences / networking', points: [{ dimension: 'execution', points: 1 }] },
      { id: 'q5g', label: 'PR / media', points: [{ dimension: 'execution', points: 1 }] },
      { id: 'q5h', label: 'Referral / partner programmes', points: [{ dimension: 'execution', points: 1 }] },
    ],
    multiScoring: {
      bonusThresholds: [
        { min: 2, max: 3, points: [{ dimension: 'execution', points: 1 }] },
        { min: 4, max: 5, points: [{ dimension: 'execution', points: 2 }] },
        { min: 6, max: 99, points: [{ dimension: 'execution', points: 2 }] },
      ],
      sprawlFlag: true,
    },
  },
  {
    id: 'q6',
    question: 'How confident are you that your marketing spend is generating a positive return?',
    type: 'slider',
    defaultNext: 'q7',
    options: [],
    sliderConfig: {
      min: 1,
      max: 5,
      leftLabel: 'No idea. We do not measure it properly.',
      rightLabel: 'Very confident. We track marketing to revenue.',
      pointMap: {
        1: [],
        2: [{ dimension: 'measurement', points: 1 }],
        3: [{ dimension: 'measurement', points: 2 }],
        4: [{ dimension: 'measurement', points: 3 }],
        5: [{ dimension: 'measurement', points: 4 }],
      },
    },
  },
  {
    id: 'q7',
    question: 'How would you describe your marketing technology (CRM, email, analytics, automation)?',
    type: 'single',
    defaultNext: 'q8',
    options: [
      { id: 'q7a', label: 'We barely have any. Maybe Google Analytics and a spreadsheet.', points: [] },
      { id: 'q7b', label: 'We have tools but they are not connected or properly used.', points: [{ dimension: 'technology', points: 1 }] },
      { id: 'q7c', label: 'We have a decent stack but lack the expertise to get value from it.', points: [{ dimension: 'technology', points: 2 }] },
      { id: 'q7d', label: 'Our tech stack is solid, integrated, and we use it well.', points: [{ dimension: 'technology', points: 4 }] },
    ],
  },
  {
    id: 'q8',
    question: 'If you needed to launch a major campaign in the next 30 days, could your current team execute it?',
    type: 'single',
    defaultNext: 'q9',
    options: [
      { id: 'q8a', label: 'No. We do not have the people or the skills.', points: [] },
      { id: 'q8b', label: 'Maybe. We have some capability but significant gaps.', points: [{ dimension: 'team', points: 1 }, { dimension: 'execution', points: 1 }] },
      { id: 'q8c', label: 'Yes, but it would stretch us. We would need external support.', points: [{ dimension: 'team', points: 2 }, { dimension: 'execution', points: 2 }] },
      { id: 'q8d', label: 'Yes. We have the team and the processes to move quickly.', points: [{ dimension: 'team', points: 3 }, { dimension: 'execution', points: 3 }] },
    ],
  },
  {
    id: 'q9',
    question: 'Our biggest marketing problem is not knowing what to do. It is not having someone accountable for making it happen.',
    context: 'Be honest. This is the question most founders avoid.',
    type: 'swipe',
    defaultNext: 'q10',
    options: [
      { id: 'q9a', label: 'Agree. We know what to do, nobody owns it.', points: [{ dimension: 'strategy', points: 2 }, { dimension: 'measurement', points: 1 }] },
      { id: 'q9b', label: 'Partly. We need both better strategy and better execution.', points: [{ dimension: 'strategy', points: 1 }, { dimension: 'execution', points: 1 }] },
      { id: 'q9c', label: 'Disagree. We genuinely do not know what to do.', points: [] },
    ],
  },
  {
    id: 'q10',
    question: 'What does the next 12 months need to look like for you to consider it a success?',
    type: 'single',
    defaultNext: 'done',
    options: [
      { id: 'q10a', label: 'Double revenue.', points: [], tag: 'aggressive_growth' },
      { id: 'q10b', label: 'Build a repeatable, scalable marketing engine.', points: [], tag: 'systems_focus' },
      { id: 'q10c', label: 'Get clarity on our positioning and go-to-market.', points: [], tag: 'strategy_focus' },
      { id: 'q10d', label: 'Hire the right marketing leader and build the team.', points: [], tag: 'team_building' },
      { id: 'q10e', label: 'Stop wasting money on marketing that does not work.', points: [], tag: 'efficiency_focus' },
    ],
  },
];
