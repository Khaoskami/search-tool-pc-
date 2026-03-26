"use client";

import { Part, PartCategory, CATEGORY_LABELS } from "@/data/types";
import { formatZAR } from "@/lib/priceUtils";
import CategoryIcon from "./icons/CategoryIcon";

interface PartSwapModalProps {
  category: PartCategory;
  currentPart: Part;
  alternatives: Part[];
  onSwap: (part: Part) => void;
  onClose: () => void;
}

export default function PartSwapModal({ category, currentPart, alternatives, onSwap, onClose }: PartSwapModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-zinc-900 border border-zinc-700/50 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b border-zinc-800 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-blue-400">
                <CategoryIcon category={category} className="w-6 h-6" />
              </span>
              <h3 className="text-lg font-bold text-white">
                Swap {CATEGORY_LABELS[category]}
              </h3>
            </div>
            <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-zinc-800">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-zinc-400 mt-2">
            Current: <span className="text-zinc-200 font-medium">{currentPart.name}</span> — {formatZAR(currentPart.estimatedPriceZAR)}
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
                  className="w-full p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700/50 hover:border-zinc-500 transition-all text-left group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium group-hover:text-blue-300 transition-colors">{alt.name}</p>
                      <p className="text-sm text-zinc-400">{formatZAR(alt.estimatedPriceZAR)}</p>
                    </div>
                    <span className={`text-sm font-bold px-2 py-0.5 rounded-full ${
                      priceDiff > 0 ? "text-red-400 bg-red-500/10" :
                      priceDiff < 0 ? "text-green-400 bg-green-500/10" :
                      "text-zinc-400 bg-zinc-700"
                    }`}>
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
