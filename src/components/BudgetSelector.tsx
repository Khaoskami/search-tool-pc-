"use client";

import { BudgetTier, TIER_INFO } from "@/data/types";

interface BudgetSelectorProps {
  selected: BudgetTier;
  onSelect: (tier: BudgetTier) => void;
}

const tierStyles: Record<BudgetTier, { border: string; bg: string; text: string; glow: string; gradient: string }> = {
  budget: { border: "border-green-500", bg: "bg-green-500/5", text: "text-green-400", glow: "glow-green", gradient: "from-green-500/20 to-green-600/5" },
  "mid-range": { border: "border-blue-500", bg: "bg-blue-500/5", text: "text-blue-400", glow: "glow-blue", gradient: "from-blue-500/20 to-blue-600/5" },
  "high-end": { border: "border-purple-500", bg: "bg-purple-500/5", text: "text-purple-400", glow: "glow-purple", gradient: "from-purple-500/20 to-purple-600/5" },
  premium: { border: "border-yellow-500", bg: "bg-yellow-500/5", text: "text-yellow-400", glow: "glow-gold", gradient: "from-yellow-500/20 to-yellow-600/5" },
};

export default function BudgetSelector({ selected, onSelect }: BudgetSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {TIER_INFO.map((tier) => {
        const isSelected = selected === tier.id;
        const style = tierStyles[tier.id];
        return (
          <button
            key={tier.id}
            onClick={() => onSelect(tier.id)}
            className={`
              relative p-5 rounded-xl border-2 transition-all duration-300
              text-left cursor-pointer card-hover overflow-hidden
              ${isSelected
                ? `${style.border} ${style.bg} ${style.glow} scale-[1.02]`
                : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-600"
              }
            `}
          >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-0 ${isSelected ? "opacity-100" : "group-hover:opacity-50"} transition-opacity pointer-events-none`} />
            <div className="relative">
              <div className="text-2xl mb-2">{tier.icon}</div>
              <h3 className={`text-lg font-bold mb-0.5 ${isSelected ? style.text : "text-white"}`}>
                {tier.name}
              </h3>
              <p className={`text-sm font-semibold mb-2 ${isSelected ? style.text : "text-zinc-300"}`}>
                {tier.priceRange}
              </p>
              <p className="text-xs text-zinc-500 leading-relaxed">{tier.description}</p>
            </div>
            {isSelected && (
              <div className="absolute top-3 right-3">
                <div className={`w-3 h-3 rounded-full ${style.border.replace("border", "bg")} animate-pulse-slow`} />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
