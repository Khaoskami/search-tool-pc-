import { BuildPreferences, Build, Part, PartCategory, CORE_CATEGORIES, PERIPHERAL_CATEGORIES } from "@/data/types";
import { partsCatalog } from "@/data/parts";
import { buildTemplates, defaultCases } from "@/data/builds";

export function generateBuild(preferences: BuildPreferences): Build {
  const { tier, cpuBrand, gpuBrand, includePeripherals, caseSize } = preferences;

  // Find the matching build template
  const template = buildTemplates.find(
    (t) => t.tier === tier && t.cpuBrand === cpuBrand && t.gpuBrand === gpuBrand
  );

  const categories: PartCategory[] = includePeripherals
    ? [...CORE_CATEGORIES, ...PERIPHERAL_CATEGORIES]
    : [...CORE_CATEGORIES];

  const parts: Part[] = [];

  for (const category of categories) {
    let partId: string | undefined;

    if (category === "case") {
      partId = defaultCases[tier]?.[caseSize];
    } else {
      partId = template?.defaults[category];
    }

    let part: Part | undefined;

    if (partId) {
      part = partsCatalog.find((p) => p.id === partId);
    }

    // Fallback: find first matching part from catalog
    if (!part) {
      part = partsCatalog.find((p) => {
        if (p.category !== category || p.tier !== tier) return false;
        if (category === "cpu" && p.cpuBrand !== cpuBrand) return false;
        if (category === "gpu" && p.gpuBrand !== gpuBrand) return false;
        if (category === "motherboard" && p.cpuBrand !== cpuBrand) return false;
        if (category === "case" && p.caseSizes && !p.caseSizes.includes(caseSize)) return false;
        return true;
      });
    }

    if (part) {
      parts.push(part);
    }
  }

  const totalEstimatedZAR = parts.reduce((sum, p) => sum + p.estimatedPriceZAR, 0);

  return { preferences, parts, totalEstimatedZAR };
}

export function getAlternatives(category: PartCategory, tier: string, currentId: string, cpuBrand?: string, gpuBrand?: string, caseSize?: string): Part[] {
  return partsCatalog.filter((p) => {
    if (p.category !== category || p.tier !== tier || p.id === currentId) return false;
    if (category === "cpu" && cpuBrand && p.cpuBrand !== cpuBrand) return false;
    if (category === "gpu" && gpuBrand && p.gpuBrand !== gpuBrand) return false;
    if (category === "motherboard" && cpuBrand && p.cpuBrand !== cpuBrand) return false;
    if (category === "case" && caseSize && p.caseSizes && !p.caseSizes.includes(caseSize as never)) return false;
    return true;
  });
}
