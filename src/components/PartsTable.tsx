"use client";

import { useState } from "react";
import { Part, PartCategory } from "@/data/types";
import PartRow from "./PartRow";
import PartSwapModal from "./PartSwapModal";

interface PartsTableProps {
  parts: Part[];
  getAlternatives: (category: PartCategory, currentId: string) => Part[];
  onSwap: (category: PartCategory, part: Part) => void;
}

export default function PartsTable({ parts, getAlternatives, onSwap }: PartsTableProps) {
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
          />
        ))}
      </div>

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
