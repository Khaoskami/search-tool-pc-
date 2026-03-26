"use client";

import { useState } from "react";
import { Part } from "@/data/types";
import { retailers } from "@/data/retailers";
import { getAllPartsSearchUrls } from "@/lib/urlBuilder";
import { getRecommendedRetailer, formatZAR } from "@/lib/priceUtils";
import { StoreTotals } from "@/hooks/usePrices";

interface BuyInOnePlaceProps {
  parts: Part[];
  storeTotals?: StoreTotals[];
  isLoadingPrices?: boolean;
}

const retailerGlows: Record<string, string> = {
  evetech: "glow-red",
  wootware: "glow-green",
  takealot: "glow-blue",
  incredible: "glow-gold",
};

export default function BuyInOnePlace({ parts, storeTotals, isLoadingPrices }: BuyInOnePlaceProps) {
  const [expandedRetailer, setExpandedRetailer] = useState<string | null>(null);
  const recommended = getRecommendedRetailer(parts);
  const hasRealPrices = storeTotals && storeTotals.some((s) => s.partsFound > 0);
  const cheapestStore = hasRealPrices ? storeTotals[0] : null;

  const handleOpenAll = (retailerId: string) => {
    const urls = getAllPartsSearchUrls(parts, retailerId);
    urls.forEach((item, index) => {
      setTimeout(() => {
        window.open(item.url, "_blank", "noopener,noreferrer");
      }, index * 300);
    });
  };

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          Buy In One Place
        </h3>
        <p className="text-sm text-zinc-400">
          {hasRealPrices
            ? "Ranked by real scraped prices. The cheapest single-store option is highlighted."
            : "Choose a retailer to search all your components. Recommended store highlighted by category strength."}
        </p>
      </div>

      {/* Cheapest store banner (when real prices available) */}
      {cheapestStore && (
        <div
          className="relative p-4 rounded-xl border-2 overflow-hidden"
          style={{ borderColor: retailers.find((r) => r.id === cheapestStore.retailerId)?.color || "#3b82f6", backgroundColor: `${retailers.find((r) => r.id === cheapestStore.retailerId)?.color}10` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-green-500/5 pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white bg-green-600">
                  Cheapest Store
                </span>
                <span className="text-white font-bold text-lg">{cheapestStore.retailerName}</span>
              </div>
              <p className="text-sm text-zinc-400">
                {cheapestStore.partsFound}/{cheapestStore.totalParts} parts priced
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-400">{formatZAR(cheapestStore.total)}</p>
              <button
                onClick={() => handleOpenAll(cheapestStore.retailerId)}
                className="mt-1 px-4 py-1.5 text-sm font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg transition-colors"
              >
                Open All Searches
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fallback recommendation (no real prices) */}
      {!hasRealPrices && (
        <div
          className="p-4 rounded-xl border-2 transition-all"
          style={{ borderColor: recommended.color, backgroundColor: `${recommended.color}15` }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: recommended.color }}>
              Recommended
            </span>
            <span className="text-white font-bold">{recommended.name}</span>
          </div>
          <p className="text-sm text-zinc-400">{recommended.reason}</p>
        </div>
      )}

      {/* Loading indicator */}
      {isLoadingPrices && (
        <div className="flex items-center gap-2 text-sm text-blue-400 py-2">
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" strokeLinecap="round" opacity="0.4" />
          </svg>
          Scraping live prices from all retailers...
        </div>
      )}

      {/* All Retailers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {retailers.map((retailer) => {
          const isExpanded = expandedRetailer === retailer.id;
          const storeData = storeTotals?.find((s) => s.retailerId === retailer.id);
          const isCheapest = cheapestStore?.retailerId === retailer.id;
          const isRecommended = !hasRealPrices && retailer.id === recommended.retailerId;
          const urls = getAllPartsSearchUrls(parts, retailer.id);

          return (
            <div
              key={retailer.id}
              className={`rounded-xl border transition-all overflow-hidden ${
                isCheapest ? `border-green-500/50 bg-green-500/5 ${retailerGlows[retailer.id] || ""}` :
                isRecommended ? "border-zinc-500 bg-zinc-800/50" :
                "border-zinc-800 bg-zinc-900/80"
              }`}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: retailer.color }} />
                    <span className="text-white font-semibold">{retailer.name}</span>
                    {isCheapest && (
                      <span className="text-[10px] font-bold text-green-400 bg-green-500/15 px-1.5 py-0.5 rounded-full uppercase">Best</span>
                    )}
                    {isRecommended && !isCheapest && (
                      <span className="text-[10px] font-bold text-yellow-400 bg-yellow-500/15 px-1.5 py-0.5 rounded-full uppercase">Rec</span>
                    )}
                  </div>
                  {storeData && storeData.partsFound > 0 && (
                    <div className="text-right">
                      <span className={`text-sm font-bold ${isCheapest ? "text-green-400" : "text-zinc-200"}`}>
                        {formatZAR(storeData.total)}
                      </span>
                      <p className="text-[10px] text-zinc-600">{storeData.partsFound}/{storeData.totalParts} priced</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleOpenAll(retailer.id)}
                    className="flex-1 py-2 px-3 rounded-lg text-sm font-medium text-white transition-colors hover:brightness-110"
                    style={{ backgroundColor: retailer.color }}
                  >
                    Open All Searches
                  </button>
                  <button
                    onClick={() => setExpandedRetailer(isExpanded ? null : retailer.id)}
                    className="py-2 px-3 rounded-lg text-sm font-medium text-zinc-300 bg-zinc-700 hover:bg-zinc-600 transition-colors"
                  >
                    {isExpanded ? "Hide" : "Links"}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="border-t border-zinc-700/50 p-3 space-y-1 bg-zinc-950/50">
                  {urls.map((item, i) => (
                    <a
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-zinc-700/50 text-sm transition-colors"
                    >
                      <span className="text-zinc-300 truncate">{item.partName}</span>
                      <svg className="w-3 h-3 text-zinc-500 shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
