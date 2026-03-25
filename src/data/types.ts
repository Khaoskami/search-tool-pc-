export type BudgetTier = "budget" | "mid-range" | "high-end" | "premium";

export type CpuBrand = "amd" | "intel";
export type GpuBrand = "nvidia" | "amd";
export type CaseSize = "mini-itx" | "micro-atx" | "mid-tower" | "full-tower";

export interface BuildPreferences {
  tier: BudgetTier;
  cpuBrand: CpuBrand;
  gpuBrand: GpuBrand;
  includePeripherals: boolean;
  caseSize: CaseSize;
}

export type PartCategory =
  | "cpu"
  | "gpu"
  | "motherboard"
  | "ram"
  | "storage"
  | "psu"
  | "case"
  | "cooler"
  | "monitor"
  | "keyboard"
  | "mouse"
  | "headset";

export const CORE_CATEGORIES: PartCategory[] = [
  "cpu",
  "gpu",
  "motherboard",
  "ram",
  "storage",
  "psu",
  "case",
  "cooler",
];

export const PERIPHERAL_CATEGORIES: PartCategory[] = [
  "monitor",
  "keyboard",
  "mouse",
  "headset",
];

export interface Part {
  id: string;
  category: PartCategory;
  name: string;
  searchQuery: string;
  estimatedPriceZAR: number;
  tier: BudgetTier;
  cpuBrand?: CpuBrand;
  gpuBrand?: GpuBrand;
  caseSizes?: CaseSize[];
  specs?: Record<string, string>;
}

export interface Build {
  preferences: BuildPreferences;
  parts: Part[];
  totalEstimatedZAR: number;
}

export interface Retailer {
  id: string;
  name: string;
  color: string;
  buildSearchUrl: (query: string) => string;
  strengthCategories: PartCategory[];
}

export interface TierInfo {
  id: BudgetTier;
  name: string;
  priceRange: string;
  description: string;
  color: string;
  icon: string;
}

export const TIER_INFO: TierInfo[] = [
  {
    id: "budget",
    name: "Budget",
    priceRange: "R8,000 – R12,000",
    description: "Solid 1080p gaming & everyday productivity",
    color: "tier-budget",
    icon: "💰",
  },
  {
    id: "mid-range",
    name: "Mid-Range",
    priceRange: "R15,000 – R25,000",
    description: "Smooth 1080p/1440p gaming experience",
    color: "tier-mid-range",
    icon: "⚡",
  },
  {
    id: "high-end",
    name: "High-End",
    priceRange: "R30,000 – R45,000",
    description: "1440p/4K gaming & content creation",
    color: "tier-high-end",
    icon: "🔥",
  },
  {
    id: "premium",
    name: "Premium",
    priceRange: "R50,000+",
    description: "No-compromise 4K gaming & professional workloads",
    color: "tier-premium",
    icon: "👑",
  },
];

export const CATEGORY_LABELS: Record<PartCategory, string> = {
  cpu: "Processor (CPU)",
  gpu: "Graphics Card (GPU)",
  motherboard: "Motherboard",
  ram: "Memory (RAM)",
  storage: "Storage (SSD)",
  psu: "Power Supply (PSU)",
  case: "Case",
  cooler: "CPU Cooler",
  monitor: "Monitor",
  keyboard: "Keyboard",
  mouse: "Mouse",
  headset: "Headset",
};
