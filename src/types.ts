export type TabType = 'guide' | 'assessment' | 'scenarios' | 'mindset' | 'support';

export interface ResearchScaleItem {
  id: number;
  text: string;
  mean: number;
  sd: number;
  level: number;
}

export interface CorrelationPair {
  pair: string;
  var1: string;
  var2: string;
  r: number;
  ci95: [number, number];
  p: string;
  r2: number;
  interpretation: string;
  significance: 'positive_significant' | 'negative_significant' | 'not_significant';
}

export interface CopingStrategyData {
  name: string;
  votes: number;
  percentage: number;
  isPositive: boolean;
  analysis: string;
}

export interface SupportNeedData {
  topic: string;
  votes: number;
  percentage: number;
  highlight?: boolean;
}

export interface FormatPreferenceData {
  format: string;
  votes: number;
  percentage: number;
  iconName: string;
}

export interface AssessmentQuestion {
  id: string;
  scaleType: 'pustin' | 'cnvct' | 'ltt';
  scaleName: string;
  text: string;
  description: string;
}

export interface AssessmentResult {
  pustinScore: number;
  cnvctScore: number;
  lttScore: number;
  pustinLevel: number;
  cnvctLevel: number;
  lttLevel: number;
  summaryTitle: string;
  analysis: string;
  recommendations: string[];
}

export interface ScenarioOption {
  id: string;
  text: string;
  type: 'assertive' | 'passive' | 'aggressive' | 'deflective';
  badgeLabel: string;
  feedback: string;
  psychologicalInsight: string;
  effectiveness: 'high' | 'medium' | 'low';
}

export interface Scenario {
  id: string;
  title: string;
  context: 'school' | 'social_media' | 'family' | 'peer_pressure';
  situation: string;
  quote: string;
  options: ScenarioOption[];
  expertAdvice: string;
}

export interface ReframingCard {
  id: string;
  negativeThought: string;
  cognitiveTrap: string;
  reframedTruth: string;
  actionStep: string;
}

export interface SupportContact {
  name: string;
  phone: string;
  availability: string;
  cost: string;
  address?: string;
  description: string;
  tag: string;
}
