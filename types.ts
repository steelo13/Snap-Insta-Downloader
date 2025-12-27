
export enum ToolCategory {
  DOWNLOADER = 'Downloader',
  TEXT = 'Text & Bio',
  ANALYTICS = 'Analytics',
  DESIGN = 'Design',
  UTILITIES = 'Utilities',
  ADMIN = 'Creator Admin'
}

export type ViewType = 'dashboard' | 'tool' | 'privacy' | 'terms';

export interface Tool {
  id: string;
  name: string;
  icon: string;
  category: ToolCategory;
  description: string;
  isViral?: boolean;
  instructions?: string[]; // New field for detailed steps
  proTips?: string; // New field for expert advice
}

export interface CalculationResult {
  label: string;
  value: string | number;
  description?: string;
}
