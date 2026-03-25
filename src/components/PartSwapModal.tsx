"use client";

import { Part, PartCategory, CATEGORY_LABELS } from "@/data/types";
import { formatZAR } from "@/lib/priceUtils";

interface PartSwapModalProps {
  category: PartCategory;
  currentPart: Part;
  alternatives: Part[];
  onSwap: (part: Part) => void;
  onClose: () => void;
}

export default function PartSwapModal({ category, currentPart, alternatives, onSwap, onClose }: PartSwapModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b border-zinc-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">
              Swap {CATEGORY_LABELS[category]}
            </h3>
            <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-zinc-400 mt-1">
            Current: <span className="text-zinc-200">{currentPart.name}</span> — {formatZAR(currentPart.estimatedPriceZAR)}
          </p>
        </div>
        <div className="p-4 overflow-y-auto max-h-[60vh] space-y-2">
          {alternatives.length === 0 ? (
            <p className="text-zinc-500 text-center py-8">No alternatives available for this configuration.</p>
          ) : (
            alternatives.map((alt) => {
              const priceDiff = alt.estimatedPriceZAR - currentPart.estimatedPriceZAR;
              return (
                <button
                  key={alt.id}
                  onClick={() => { onSwap(alt); onClose(); }}
                  className="w-full p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-500 transition-all text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{alt.name}</p>
                      <p className="text-sm text-zinc-400">{formatZAR(alt.estimatedPriceZAR)}</p>
                    </div>
                    <span className={`text-sm font-medium ${priceDiff > 0 ? "text-red-400" : priceDiff < 0 ? "text-green-400" : "text-zinc-400"}`}>
                      {priceDiff > 0 ? "+" : ""}{formatZAR(priceDiff)}
                    </span>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
