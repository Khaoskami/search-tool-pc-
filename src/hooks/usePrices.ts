"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Part, ScrapedPrice, PriceResult, PriceMap } from "@/data/types";

const RETAILERS = ["evetech", "wootware", "takealot", "incredible"];

export interface StoreTotals {
  retailerId: string;
  retailerName: string;
  total: number;
  partsFound: number;
  totalParts: number;
}

export function usePrices(parts: Part[]) {
  const [prices, setPrices] = useState<PriceMap>({});
  const [isLoading, setIsLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const fetchPrices = useCallback(async (partsToFetch: Part[]) => {
    if (partsToFetch.length === 0) return;

    // Abort previous requests
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setIsLoading(true);

    // Initialize loading state for all parts
    const loadingMap: PriceMap = {};
    for (const part of partsToFetch) {
      loadingMap[part.id] = {
        partId: part.id,
        searchQuery: part.searchQuery,
        prices: [],
        status: "loading",
      };
    }
    setPrices(loadingMap);

    // Fetch per part × retailer, batched with max 4 concurrent
    const tasks: { partId: string; retailerId: string; query: string }[] = [];
    for (const part of partsToFetch) {
      if (part.estimatedPriceZAR === 0) continue; // skip stock coolers etc
      for (const retailerId of RETAILERS) {
        tasks.push({ partId: part.id, retailerId, query: part.searchQuery });
      }
    }

    // Process in batches of 4
    const batchSize = 4;
    const allResults: Record<string, ScrapedPrice[]> = {};

    for (let i = 0; i < tasks.length; i += batchSize) {
      if (controller.signal.aborted) break;

      const batch = tasks.slice(i, i + batchSize);
      const batchResults = await Promise.allSettled(
        batch.map(async (task) => {
          const res = await fetch(
            `/api/scrape?retailer=${task.retailerId}&query=${encodeURIComponent(task.query)}`,
            { signal: controller.signal }
          );
          const data = await res.json();
          return { partId: task.partId, prices: data.prices || [] };
        })
      );

      for (const result of batchResults) {
        if (result.status === "fulfilled") {
          const { partId, prices: scraped } = result.value;
          if (!allResults[partId]) allResults[partId] = [];
          allResults[partId].push(...scraped);
        }
      }

      // Update incrementally
      if (!controller.signal.aborted) {
        setPrices((prev) => {
          const next = { ...prev };
          for (const [partId, scrapedPrices] of Object.entries(allResults)) {
            next[partId] = {
              partId,
              searchQuery: partsToFetch.find((p) => p.id === partId)?.searchQuery || "",
              prices: scrapedPrices.sort((a, b) => a.priceZAR - b.priceZAR),
              status: "loaded",
            };
          }
          return next;
        });
      }
    }

    if (!controller.signal.aborted) {
      // Mark remaining parts as loaded (even if no results)
      setPrices((prev) => {
        const next = { ...prev };
        for (const part of partsToFetch) {
          if (!next[part.id] || next[part.id].status === "loading") {
            next[part.id] = {
              partId: part.id,
              searchQuery: part.searchQuery,
              prices: [],
              status: "loaded",
            };
          }
        }
        return next;
      });
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (parts.length > 0) {
      fetchPrices(parts);
    }
    return () => {
      abortRef.current?.abort();
    };
  }, [parts, fetchPrices]);

  // Compute cheapest per part
  const cheapestByPart: Record<string, ScrapedPrice | null> = {};
  for (const [partId, result] of Object.entries(prices)) {
    cheapestByPart[partId] = result.prices.length > 0 ? result.prices[0] : null;
  }

  // Compute store totals
  const storeTotals: StoreTotals[] = RETAILERS.map((retailerId) => {
    let total = 0;
    let partsFound = 0;
    const retailerNames: Record<string, string> = {
      evetech: "Evetech", wootware: "Wootware",
      takealot: "Takealot", incredible: "Incredible Connection",
    };

    for (const part of parts) {
      const result = prices[part.id];
      if (result) {
        const retailerPrice = result.prices.find((p) => p.retailerId === retailerId);
        if (retailerPrice) {
          total += retailerPrice.priceZAR;
          partsFound++;
        } else {
          total += part.estimatedPriceZAR; // fallback
        }
      } else {
        total += part.estimatedPriceZAR;
      }
    }

    return {
      retailerId,
      retailerName: retailerNames[retailerId],
      total,
      partsFound,
      totalParts: parts.length,
    };
  }).sort((a, b) => a.total - b.total);

  return { prices, isLoading, cheapestByPart, storeTotals, refetch: () => fetchPrices(parts) };
}
