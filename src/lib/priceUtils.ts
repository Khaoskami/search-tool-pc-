import { Part, PartCategory } from "@/data/types";
import { retailers } from "@/data/retailers";

const zarFormatter = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatZAR(amount: number): string {
  return zarFormatter.format(amount);
}

export function getRecommendedRetailer(parts: Part[]): { retailerId: string; name: string; color: string; reason: string } {
  const categories = parts.map((p) => p.category);

  // Score each retailer based on how many of the build's categories they're strong in
  const scores = retailers.map((r) => {
    const matchCount = categories.filter((cat: PartCategory) =>
      r.strengthCategories.includes(cat)
    ).length;
    return { ...r, score: matchCount };
  });

  scores.sort((a, b) => b.score - a.score);
  const best = scores[0];

  return {
    retailerId: best.id,
    name: best.name,
    color: best.color,
    reason: `Best overall selection for ${best.score} of ${categories.length} components in your build`,
  };
}

export const PRICE_DISCLAIMER = "Prices are estimates and may vary. Click retailer links to check current pricing. Last updated: March 2026.";
