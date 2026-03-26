"use client";

import { formatZAR, PRICE_DISCLAIMER } from "@/lib/priceUtils";
import { StoreTotals } from "@/hooks/usePrices";

interface PriceSummaryProps {
  total: number;
  partCount: number;
  isLoadingPrices?: boolean;
  cheapestStore?: StoreTotals;
}

export default function PriceSummary({ total, partCount, isLoadingPrices, cheapestStore }: PriceSummaryProps) {
  const hasRealPrices = cheapestStore && cheapestStore.partsFound > 0;
  const savings = hasRealPrices ? total - cheapestStore.total : 0;

  return (
    <div className="relative bg-zinc-900/80 border border-zinc-700/50 rounded-xl p-6 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
          <div>
            <p className="text-sm text-zinc-400 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              {partCount} components selected
            </p>
            <p className={`text-3xl font-bold mt-1 ${hasRealPrices ? "text-zinc-500 line-through decoration-zinc-600" : "text-white"}`}>
              {formatZAR(total)}
            </p>
            <p className="text-xs text-zinc-600">Estimated total</p>
          </div>

          {hasRealPrices && (
            <div className="text-right">
              <p className="text-sm text-green-400 font-medium flex items-center gap-1 justify-end">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Best via {cheapestStore.retailerName}
              </p>
              <p className="text-3xl font-bold text-green-400 mt-1">
                {formatZAR(cheapestStore.total)}
              </p>
              <p className="text-xs text-green-500/70">
                {cheapestStore.partsFound}/{cheapestStore.totalParts} parts priced
              </p>
            </div>
          )}

          {isLoadingPrices && !hasRealPrices && (
            <div className="flex items-center gap-2 text-sm text-blue-400">
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" strokeLinecap="round" opacity="0.4" />
              </svg>
              Fetching live prices...
            </div>
          )}
        </div>

        {savings > 0 && (
          <div className="flex items-center gap-2 mb-3 py-2 px-3 rounded-lg bg-green-500/10 border border-green-500/20">
            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-green-400">
              Save {formatZAR(savings)} vs estimated price!
            </span>
          </div>
        )}

        <p className="text-[10px] text-zinc-600 border-t border-zinc-800/70 pt-3">
          {PRICE_DISCLAIMER}
        </p>
      </div>
    </div>
  );
}
