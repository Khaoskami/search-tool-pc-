"use client";

import { Part, PartCategory, CATEGORY_LABELS } from "@/data/types";
import { formatZAR } from "@/lib/priceUtils";
import RetailerLinks from "./RetailerLinks";

interface PartRowProps {
  part: Part;
  onSwapClick: (category: PartCategory) => void;
}

const categoryIcons: Record<PartCategory, string> = {
  cpu: "🔲",
  gpu: "🎮",
  motherboard: "📟",
  ram: "💾",
  storage: "💿",
  psu: "⚡",
  case: "🖥️",
  cooler: "❄️",
  monitor: "🖥️",
  keyboard: "⌨️",
  mouse: "🖱️",
  headset: "🎧",
};

export default function PartRow({ part, onSwapClick }: PartRowProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-600 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        {/* Category & Name */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{categoryIcons[part.category]}</span>
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              {CATEGORY_LABELS[part.category]}
            </span>
          </div>
          <h4 className="text-white font-semibold truncate">{part.name}</h4>
        </div>

        {/* Price & Swap */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-lg font-bold text-white">
            {part.estimatedPriceZAR === 0 ? "Included" : formatZAR(part.estimatedPriceZAR)}
          </span>
          <button
            onClick={() => onSwapClick(part.category)}
            className="px-3 py-1.5 text-xs font-medium text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors"
          >
            Swap
          </button>
        </div>
      </div>

      {/* Retailer Links */}
      <div className="mt-3 pt-3 border-t border-zinc-800">
        <p className="text-xs text-zinc-500 mb-2">Search for best deals:</p>
        <RetailerLinks part={part} />
      </div>
    </div>
  );
}
