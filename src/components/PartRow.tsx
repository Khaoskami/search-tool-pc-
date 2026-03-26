"use client";

import { Part, PartCategory, PriceResult, CATEGORY_LABELS } from "@/data/types";
import { formatZAR } from "@/lib/priceUtils";
import CategoryIcon from "./icons/CategoryIcon";
import RetailerLinks from "./RetailerLinks";
import PriceComparison from "./PriceComparison";

interface PartRowProps {
  part: Part;
  priceResult?: PriceResult;
  onSwapClick: (category: PartCategory) => void;
  onRemoveClick: (category: PartCategory) => void;
}

const categoryGradients: Record<string, string> = {
  cpu: "from-blue-500/20",
  gpu: "from-green-500/20",
  motherboard: "from-purple-500/20",
  ram: "from-cyan-500/20",
  storage: "from-orange-500/20",
  psu: "from-yellow-500/20",
  case: "from-zinc-500/20",
  cooler: "from-sky-500/20",
  monitor: "from-indigo-500/20",
  keyboard: "from-pink-500/20",
  mouse: "from-rose-500/20",
  headset: "from-violet-500/20",
};

const categoryIconColors: Record<string, string> = {
  cpu: "text-blue-400",
  gpu: "text-green-400",
  motherboard: "text-purple-400",
  ram: "text-cyan-400",
  storage: "text-orange-400",
  psu: "text-yellow-400",
  case: "text-zinc-400",
  cooler: "text-sky-400",
  monitor: "text-indigo-400",
  keyboard: "text-pink-400",
  mouse: "text-rose-400",
  headset: "text-violet-400",
};

export default function PartRow({ part, priceResult, onSwapClick, onRemoveClick }: PartRowProps) {
  const cheapest = priceResult?.prices?.[0];
  const displayPrice = cheapest ? cheapest.priceZAR : part.estimatedPriceZAR;
  const isLivePrice = !!cheapest;

  return (
    <div className="relative bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all card-hover group">
      {/* Gradient left accent */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${categoryGradients[part.category] || "from-zinc-500/20"} to-transparent`} />

      <div className="p-4 pl-5">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Category Icon & Name */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className={`${categoryIconColors[part.category] || "text-zinc-400"}`}>
                <CategoryIcon category={part.category} className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                {CATEGORY_LABELS[part.category]}
              </span>
            </div>
            <h4 className="text-white font-semibold text-sm sm:text-base">{part.name}</h4>
          </div>

          {/* Price & Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <span className={`text-lg font-bold ${isLivePrice ? "text-green-400" : "text-white"}`}>
                {part.estimatedPriceZAR === 0 ? "Included" : formatZAR(displayPrice)}
              </span>
              {isLivePrice && (
                <p className="text-[10px] text-green-500 font-medium">Live price</p>
              )}
              {!isLivePrice && part.estimatedPriceZAR > 0 && (
                <p className="text-[10px] text-zinc-600">Estimated</p>
              )}
            </div>
            <button
              onClick={() => onSwapClick(part.category)}
              className="px-3 py-1.5 text-xs font-medium text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors"
            >
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Swap
              </span>
            </button>
            <button
              onClick={() => onRemoveClick(part.category)}
              className="p-1.5 text-xs font-medium text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/10 transition-colors"
              title="Remove from build"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Retailer Links + Live Prices */}
        <div className="mt-3 pt-3 border-t border-zinc-800/70">
          <div className="flex flex-wrap gap-2 mb-3">
            <RetailerLinks part={part} />
          </div>
          <PriceComparison priceResult={priceResult} estimatedPrice={part.estimatedPriceZAR} />
        </div>
      </div>
    </div>
  );
}
