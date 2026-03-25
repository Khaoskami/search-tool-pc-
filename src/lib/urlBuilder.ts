import { retailers } from "@/data/retailers";
import { Part } from "@/data/types";

export function getRetailerSearchUrls(part: Part): { retailerId: string; name: string; url: string; color: string }[] {
  return retailers.map((r) => ({
    retailerId: r.id,
    name: r.name,
    url: r.buildSearchUrl(part.searchQuery),
    color: r.color,
  }));
}

export function getAllPartsSearchUrls(parts: Part[], retailerId: string): { partName: string; url: string }[] {
  const retailer = retailers.find((r) => r.id === retailerId);
  if (!retailer) return [];

  return parts.map((p) => ({
    partName: p.name,
    url: retailer.buildSearchUrl(p.searchQuery),
  }));
}
