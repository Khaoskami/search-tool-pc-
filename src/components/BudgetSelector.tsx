"use client";

import { BudgetTier, TIER_INFO } from "@/data/types";

interface BudgetSelectorProps {
  selected: BudgetTier;
  onSelect: (tier: BudgetTier) => void;
}

const tierBorderColors: Record<BudgetTier, string> = {
  budget: "border-green-500",
  "mid-range": "border-blue-500",
  "high-end": "border-purple-500",
  premium: "border-yellow-500",
};

const tierBgColors: Record<BudgetTier, string> = {
  budget: "bg-green-500/10",
  "mid-range": "bg-blue-500/10",
  "high-end": "bg-purple-500/10",
  premium: "bg-yellow-500/10",
};

const tierTextColors: Record<BudgetTier, string> = {
  budget: "text-green-400",
  "mid-range": "text-blue-400",
  "high-end": "text-purple-400",
  premium: "text-yellow-400",
};

export default function BudgetSelector({ selected, onSelect }: BudgetSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {TIER_INFO.map((tier) => {
        const isSelected = selected === tier.id;
        return (
          <button
            key={tier.id}
            onClick={() => onSelect(tier.id)}
            className={`
              relative p-6 rounded-xl border-2 transition-all duration-200
              text-left cursor-pointer
              ${isSelected
                ? `${tierBorderColors[tier.id]} ${tierBgColors[tier.id]} scale-[1.02]`
                : "border-zinc-700 bg-zinc-900 hover:border-zinc-500 hover:bg-zinc-800/50"
              }
            `}
          >
            <div className="text-2xl mb-2">{tier.icon}</div>
            <h3 className={`text-lg font-bold mb-1 ${isSelected ? tierTextColors[tier.id] : "text-white"}`}>
              {tier.name}
            </h3>
            <p className={`text-sm font-semibold mb-2 ${isSelected ? tierTextColors[tier.id] : "text-zinc-300"}`}>
              {tier.priceRange}
            </p>
            <p className="text-xs text-zinc-400">{tier.description}</p>
            {isSelected && (
              <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${tierBorderColors[tier.id].replace("border", "bg")}`} />
            )}
          </button>
        );
      })}
    </div>
  );
}
