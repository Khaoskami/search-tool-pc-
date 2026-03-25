import { BudgetTier, CpuBrand, GpuBrand, CaseSize, PartCategory } from "./types";

// Default part IDs for each build configuration
interface BuildTemplate {
  tier: BudgetTier;
  cpuBrand: CpuBrand;
  gpuBrand: GpuBrand;
  defaults: Partial<Record<PartCategory, string>>;
}

// Maps case size to default case part ID per tier
export const defaultCases: Record<BudgetTier, Record<CaseSize, string>> = {
  budget: {
    "mini-itx": "case-b-itx-1",
    "micro-atx": "case-b-matx-1",
    "mid-tower": "case-b-mid-1",
    "full-tower": "case-b-full-1",
  },
  "mid-range": {
    "mini-itx": "case-m-itx-1",
    "micro-atx": "case-m-matx-1",
    "mid-tower": "case-m-mid-1",
    "full-tower": "case-m-full-1",
  },
  "high-end": {
    "mini-itx": "case-h-itx-1",
    "micro-atx": "case-h-matx-1",
    "mid-tower": "case-h-mid-1",
    "full-tower": "case-h-full-1",
  },
  premium: {
    "mini-itx": "case-p-itx-1",
    "micro-atx": "case-p-matx-1",
    "mid-tower": "case-p-mid-1",
    "full-tower": "case-p-full-1",
  },
};

export const buildTemplates: BuildTemplate[] = [
  // Budget AMD + NVIDIA
  {
    tier: "budget", cpuBrand: "amd", gpuBrand: "nvidia",
    defaults: { cpu: "cpu-b-amd-1", gpu: "gpu-b-nv-1", motherboard: "mb-b-amd-1", ram: "ram-b-1", storage: "stor-b-1", psu: "psu-b-1", cooler: "cool-b-1", monitor: "mon-b-1", keyboard: "kb-b-1", mouse: "mouse-b-1", headset: "hs-b-1" },
  },
  // Budget AMD + AMD GPU
  {
    tier: "budget", cpuBrand: "amd", gpuBrand: "amd",
    defaults: { cpu: "cpu-b-amd-1", gpu: "gpu-b-amd-2", motherboard: "mb-b-amd-1", ram: "ram-b-1", storage: "stor-b-1", psu: "psu-b-1", cooler: "cool-b-1", monitor: "mon-b-1", keyboard: "kb-b-1", mouse: "mouse-b-1", headset: "hs-b-1" },
  },
  // Budget Intel + NVIDIA
  {
    tier: "budget", cpuBrand: "intel", gpuBrand: "nvidia",
    defaults: { cpu: "cpu-b-intel-1", gpu: "gpu-b-nv-1", motherboard: "mb-b-intel-1", ram: "ram-b-1", storage: "stor-b-1", psu: "psu-b-1", cooler: "cool-b-1", monitor: "mon-b-1", keyboard: "kb-b-1", mouse: "mouse-b-1", headset: "hs-b-1" },
  },
  // Budget Intel + AMD GPU
  {
    tier: "budget", cpuBrand: "intel", gpuBrand: "amd",
    defaults: { cpu: "cpu-b-intel-1", gpu: "gpu-b-amd-2", motherboard: "mb-b-intel-1", ram: "ram-b-1", storage: "stor-b-1", psu: "psu-b-1", cooler: "cool-b-1", monitor: "mon-b-1", keyboard: "kb-b-1", mouse: "mouse-b-1", headset: "hs-b-1" },
  },

  // Mid-Range AMD + NVIDIA
  {
    tier: "mid-range", cpuBrand: "amd", gpuBrand: "nvidia",
    defaults: { cpu: "cpu-m-amd-1", gpu: "gpu-m-nv-1", motherboard: "mb-m-amd-1", ram: "ram-m-1", storage: "stor-m-1", psu: "psu-m-1", cooler: "cool-m-1", monitor: "mon-m-1", keyboard: "kb-m-1", mouse: "mouse-m-1", headset: "hs-m-1" },
  },
  // Mid-Range AMD + AMD GPU
  {
    tier: "mid-range", cpuBrand: "amd", gpuBrand: "amd",
    defaults: { cpu: "cpu-m-amd-1", gpu: "gpu-m-amd-1", motherboard: "mb-m-amd-1", ram: "ram-m-1", storage: "stor-m-1", psu: "psu-m-1", cooler: "cool-m-1", monitor: "mon-m-1", keyboard: "kb-m-1", mouse: "mouse-m-1", headset: "hs-m-1" },
  },
  // Mid-Range Intel + NVIDIA
  {
    tier: "mid-range", cpuBrand: "intel", gpuBrand: "nvidia",
    defaults: { cpu: "cpu-m-intel-1", gpu: "gpu-m-nv-1", motherboard: "mb-m-intel-1", ram: "ram-m-1", storage: "stor-m-1", psu: "psu-m-1", cooler: "cool-m-1", monitor: "mon-m-1", keyboard: "kb-m-1", mouse: "mouse-m-1", headset: "hs-m-1" },
  },
  // Mid-Range Intel + AMD GPU
  {
    tier: "mid-range", cpuBrand: "intel", gpuBrand: "amd",
    defaults: { cpu: "cpu-m-intel-1", gpu: "gpu-m-amd-1", motherboard: "mb-m-intel-1", ram: "ram-m-1", storage: "stor-m-1", psu: "psu-m-1", cooler: "cool-m-1", monitor: "mon-m-1", keyboard: "kb-m-1", mouse: "mouse-m-1", headset: "hs-m-1" },
  },

  // High-End AMD + NVIDIA
  {
    tier: "high-end", cpuBrand: "amd", gpuBrand: "nvidia",
    defaults: { cpu: "cpu-h-amd-1", gpu: "gpu-h-nv-1", motherboard: "mb-h-amd-1", ram: "ram-h-1", storage: "stor-h-1", psu: "psu-h-1", cooler: "cool-h-1", monitor: "mon-h-1", keyboard: "kb-h-1", mouse: "mouse-h-1", headset: "hs-h-1" },
  },
  // High-End AMD + AMD GPU
  {
    tier: "high-end", cpuBrand: "amd", gpuBrand: "amd",
    defaults: { cpu: "cpu-h-amd-1", gpu: "gpu-h-amd-1", motherboard: "mb-h-amd-1", ram: "ram-h-1", storage: "stor-h-1", psu: "psu-h-1", cooler: "cool-h-1", monitor: "mon-h-1", keyboard: "kb-h-1", mouse: "mouse-h-1", headset: "hs-h-1" },
  },
  // High-End Intel + NVIDIA
  {
    tier: "high-end", cpuBrand: "intel", gpuBrand: "nvidia",
    defaults: { cpu: "cpu-h-intel-1", gpu: "gpu-h-nv-1", motherboard: "mb-h-intel-1", ram: "ram-h-1", storage: "stor-h-1", psu: "psu-h-1", cooler: "cool-h-1", monitor: "mon-h-1", keyboard: "kb-h-1", mouse: "mouse-h-1", headset: "hs-h-1" },
  },
  // High-End Intel + AMD GPU
  {
    tier: "high-end", cpuBrand: "intel", gpuBrand: "amd",
    defaults: { cpu: "cpu-h-intel-1", gpu: "gpu-h-amd-1", motherboard: "mb-h-intel-1", ram: "ram-h-1", storage: "stor-h-1", psu: "psu-h-1", cooler: "cool-h-1", monitor: "mon-h-1", keyboard: "kb-h-1", mouse: "mouse-h-1", headset: "hs-h-1" },
  },

  // Premium AMD + NVIDIA
  {
    tier: "premium", cpuBrand: "amd", gpuBrand: "nvidia",
    defaults: { cpu: "cpu-p-amd-1", gpu: "gpu-p-nv-1", motherboard: "mb-p-amd-1", ram: "ram-p-1", storage: "stor-p-1", psu: "psu-p-1", cooler: "cool-p-1", monitor: "mon-p-1", keyboard: "kb-p-1", mouse: "mouse-p-1", headset: "hs-p-1" },
  },
  // Premium AMD + AMD GPU
  {
    tier: "premium", cpuBrand: "amd", gpuBrand: "amd",
    defaults: { cpu: "cpu-p-amd-1", gpu: "gpu-p-amd-1", motherboard: "mb-p-amd-1", ram: "ram-p-1", storage: "stor-p-1", psu: "psu-p-1", cooler: "cool-p-1", monitor: "mon-p-1", keyboard: "kb-p-1", mouse: "mouse-p-1", headset: "hs-p-1" },
  },
  // Premium Intel + NVIDIA
  {
    tier: "premium", cpuBrand: "intel", gpuBrand: "nvidia",
    defaults: { cpu: "cpu-p-intel-1", gpu: "gpu-p-nv-1", motherboard: "mb-p-intel-1", ram: "ram-p-1", storage: "stor-p-1", psu: "psu-p-1", cooler: "cool-p-1", monitor: "mon-p-1", keyboard: "kb-p-1", mouse: "mouse-p-1", headset: "hs-p-1" },
  },
  // Premium Intel + AMD GPU
  {
    tier: "premium", cpuBrand: "intel", gpuBrand: "amd",
    defaults: { cpu: "cpu-p-intel-1", gpu: "gpu-p-amd-1", motherboard: "mb-p-intel-1", ram: "ram-p-1", storage: "stor-p-1", psu: "psu-p-1", cooler: "cool-p-1", monitor: "mon-p-1", keyboard: "kb-p-1", mouse: "mouse-p-1", headset: "hs-p-1" },
  },
];
