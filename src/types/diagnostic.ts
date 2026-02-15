export type Dimension = 'strategy' | 'execution' | 'team' | 'technology' | 'measurement' | 'positioning';

export type GrowthAmbitionTag = 'aggressive_growth' | 'systems_focus' | 'strategy_focus' | 'team_building' | 'efficiency_focus';

export type RevenueTier = 'under-1m' | '1m-3m' | '3m-10m' | '10m-30m' | '30m-plus';

export interface PointAllocation {
  dimension: Dimension;
  points: number;
}

export interface AnswerOption {
  id: string;
  label: string;
  points: PointAllocation[];
  tag?: GrowthAmbitionTag;
  revenueTier?: RevenueTier;
  branch?: string; // questionId to jump to
  interstitial?: string; // animated text to show before next question
}

export type QuestionType = 'single' | 'multi' | 'slider' | 'swipe';

export interface DiagnosticQuestion {
  id: string;
  question: string;
  context?: string;
  type: QuestionType;
  options: AnswerOption[];
  sliderConfig?: {
    min: number;
    max: number;
    leftLabel: string;
    rightLabel: string;
    pointMap: Record<number, PointAllocation[]>;
  };
  multiScoring?: {
    bonusThresholds: { min: number; max: number; points: PointAllocation[] }[];
    sprawlFlag?: boolean;
  };
  defaultNext?: string; // default next question if no branch
}

export interface DimensionScores {
  strategy: number;
  execution: number;
  team: number;
  technology: number;
  measurement: number;
  positioning: number;
}

export interface UserAnswer {
  questionId: string;
  answerIds: string[];
  sliderValue?: number;
}

export type GrowthStage = 'foundation' | 'traction' | 'scale' | 'optimise';

export interface DiagnosticState {
  phase: 'intro' | 'questions' | 'email-gate' | 'results';
  currentQuestionIndex: number;
  questionHistory: string[]; // ordered list of questionIds visited
  answers: UserAnswer[];
  scores: DimensionScores;
  revenueTier: RevenueTier | null;
  growthAmbitionTag: GrowthAmbitionTag | null;
  formData: {
    firstName: string;
    email: string;
    companyName: string;
    phone: string;
  };
  interstitialText: string | null;
}
