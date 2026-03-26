"use client";

import { PriceResult, ScrapedPrice } from "@/data/types";
import { formatZAR } from "@/lib/priceUtils";

interface PriceComparisonProps {
  priceResult?: PriceResult;
  estimatedPrice: number;
}

const retailerColors: Record<string, string> = {
  evetech: "bg-red-500",
  wootware: "bg-teal-500",
  takealot: "bg-blue-500",
  incredible: "bg-orange-500",
};

function ShimmerRow() {
  return (
    <div className="flex items-center justify-between py-1.5">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full shimmer" />
        <div className="w-20 h-3 rounded shimmer" />
      </div>
      <div className="w-16 h-3 rounded shimmer" />
    </div>
  );
}

export default function PriceComparison({ priceResult, estimatedPrice }: PriceComparisonProps) {
  if (!priceResult || priceResult.status === "loading") {
    return (
      <div className="space-y-1">
        <p className="text-xs text-zinc-500 mb-1.5 flex items-center gap-1.5">
          <svg className="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" opacity="0.4" />
          </svg>
          Fetching live prices...
        </p>
        <ShimmerRow />
        <ShimmerRow />
        <ShimmerRow />
      </div>
    );
  }

  if (priceResult.prices.length === 0) {
    return (
      <p className="text-xs text-zinc-500">
        No live prices found.{" "}
        <span className="text-zinc-400">Use retailer links above to check manually.</span>
      </p>
    );
  }

  const cheapest = priceResult.prices[0]; // already sorted by price
  const savings = estimatedPrice - cheapest.priceZAR;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs text-zinc-500">Live prices found:</span>
        {savings > 0 && (
          <span className="text-[10px] font-bold text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded-full">
            Save {formatZAR(savings)}
          </span>
        )}
      </div>
      {priceResult.prices.slice(0, 4).map((price: ScrapedPrice, idx: number) => {
        const isCheapest = idx === 0;
        return (
          <a
            key={`${price.retailerId}-${idx}`}
            href={price.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between py-1.5 px-2 rounded-lg text-xs transition-all hover:bg-zinc-700/50 ${
              isCheapest ? "bg-green-500/5 border border-green-500/20" : ""
            }`}
          >
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className={`w-2 h-2 rounded-full shrink-0 ${retailerColors[price.retailerId] || "bg-zinc-500"}`} />
              <span className={`font-medium ${isCheapest ? "text-green-400" : "text-zinc-300"}`}>
                {price.retailerName}
              </span>
              {isCheapest && (
                <span className="text-[9px] font-bold text-green-400 bg-green-500/15 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                  Best Price
                </span>
              )}
              <span className="text-zinc-600 truncate text-[10px] hidden sm:inline">{price.productName}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0 ml-2">
              <span className={`font-bold ${isCheapest ? "text-green-400" : "text-zinc-200"}`}>
                {formatZAR(price.priceZAR)}
              </span>
              <svg className="w-3 h-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>
        );
      })}
    </div>
  );
}
