export interface IntelligenceDashboardMetric {
  title: string;
  value: string | number;
  description: string;
  href?: string;
}

export interface LgaProjectSummary {
  lga: string;
  total: number;
  completed: number;
  ongoing: number;
  budget2026: number;
}