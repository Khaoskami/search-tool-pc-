"use client";

import { formatZAR, PRICE_DISCLAIMER } from "@/lib/priceUtils";

interface PriceSummaryProps {
  total: number;
  partCount: number;
}

export default function PriceSummary({ total, partCount }: PriceSummaryProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-zinc-400">{partCount} components selected</p>
          <p className="text-3xl font-bold text-white mt-1">{formatZAR(total)}</p>
          <p className="text-xs text-zinc-500">Estimated total</p>
        </div>
      </div>
      <p className="text-xs text-zinc-500 border-t border-zinc-800 pt-3">
        {PRICE_DISCLAIMER}
      </p>
    </div>
  );
}
