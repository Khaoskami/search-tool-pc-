"use client";

import { useState } from "react";
import { Part, PartCategory, CATEGORY_LABELS } from "@/data/types";
import { formatZAR } from "@/lib/priceUtils";
import PartRow from "./PartRow";
import PartSwapModal from "./PartSwapModal";

interface PartsTableProps {
  parts: Part[];
  removedParts: Part[];
  getAlternatives: (category: PartCategory, currentId: string) => Part[];
  onSwap: (category: PartCategory, part: Part) => void;
  onRemove: (category: PartCategory) => void;
  onRestore: (category: PartCategory) => void;
}

export default function PartsTable({ parts, removedParts, getAlternatives, onSwap, onRemove, onRestore }: PartsTableProps) {
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
            onSwapClick={handleSwapClick}
            onRemoveClick={onRemove}
          />
        ))}
      </div>

      {/* Removed Parts Section */}
      {removedParts.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">
            Removed Parts ({removedParts.length})
          </h3>
          <div className="space-y-2">
            {removedParts.map((part) => (
              <div
                key={part.id}
                className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50 opacity-60 hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-zinc-600 uppercase tracking-wider">
                    {CATEGORY_LABELS[part.category]}
                  </span>
                  <span className="text-sm text-zinc-500">{part.name}</span>
                  <span className="text-xs text-zinc-600">{formatZAR(part.estimatedPriceZAR)}</span>
                </div>
                <button
                  onClick={() => onRestore(part.category)}
                  className="px-3 py-1.5 text-xs font-medium text-green-400 border border-green-500/30 rounded-lg hover:bg-green-500/10 transition-colors"
                >
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
