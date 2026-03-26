"use client";

import { useState } from "react";
import { Part, PartCategory, PriceMap, CATEGORY_LABELS } from "@/data/types";
import { formatZAR } from "@/lib/priceUtils";
import CategoryIcon from "./icons/CategoryIcon";
import PartRow from "./PartRow";
import PartSwapModal from "./PartSwapModal";

interface PartsTableProps {
  parts: Part[];
  removedParts: Part[];
  prices: PriceMap;
  getAlternatives: (category: PartCategory, currentId: string) => Part[];
  onSwap: (category: PartCategory, part: Part) => void;
  onRemove: (category: PartCategory) => void;
  onRestore: (category: PartCategory) => void;
}

export default function PartsTable({ parts, removedParts, prices, getAlternatives, onSwap, onRemove, onRestore }: PartsTableProps) {
  const [swapModal, setSwapModal] = useState<{ category: PartCategory; part: Part } | null>(null);

  const handleSwapClick = (category: PartCategory) => {
    const part = parts.find((p) => p.category === category);
    if (part) {
      setSwapModal({ category, part });
    }
  };

  return (
    <>
      <div className="space-y-3">
        {parts.map((part) => (
          <PartRow
            key={part.id}
            part={part}
            priceResult={prices[part.id]}
            onSwapClick={handleSwapClick}
            onRemoveClick={onRemove}
          />
        ))}
      </div>

      {/* Removed Parts Section */}
      {removedParts.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Removed ({removedParts.length})
          </h3>
          <div className="space-y-2">
            {removedParts.map((part) => (
              <div
                key={part.id}
                className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/50 opacity-60 hover:opacity-90 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-zinc-600">
                    <CategoryIcon category={part.category} className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                    {CATEGORY_LABELS[part.category]}
                  </span>
                  <span className="text-sm text-zinc-500">{part.name}</span>
                  <span className="text-xs text-zinc-600">{formatZAR(part.estimatedPriceZAR)}</span>
                </div>
                <button
                  onClick={() => onRestore(part.category)}
                  className="px-3 py-1.5 text-xs font-medium text-green-400 border border-green-500/30 rounded-lg hover:bg-green-500/10 transition-colors flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Restore
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {swapModal && (
        <PartSwapModal
          category={swapModal.category}
          currentPart={swapModal.part}
          alternatives={getAlternatives(swapModal.category, swapModal.part.id)}
          onSwap={(newPart) => onSwap(swapModal.category, newPart)}
          onClose={() => setSwapModal(null)}
        />
      )}
    </>
  );
}
