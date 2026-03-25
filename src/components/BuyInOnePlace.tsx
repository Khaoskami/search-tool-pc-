"use client";

import { useState } from "react";
import { Part } from "@/data/types";
import { retailers } from "@/data/retailers";
import { getAllPartsSearchUrls } from "@/lib/urlBuilder";
import { getRecommendedRetailer } from "@/lib/priceUtils";

interface BuyInOnePlaceProps {
  parts: Part[];
}

export default function BuyInOnePlace({ parts }: BuyInOnePlaceProps) {
  const [expandedRetailer, setExpandedRetailer] = useState<string | null>(null);
  const recommended = getRecommendedRetailer(parts);

  const handleOpenAll = (retailerId: string) => {
    const urls = getAllPartsSearchUrls(parts, retailerId);
    urls.forEach((item, index) => {
      setTimeout(() => {
        window.open(item.url, "_blank", "noopener,noreferrer");
      }, index * 300); // stagger to avoid popup blockers
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-white mb-2">Buy In One Place</h3>
        <p className="text-sm text-zinc-400">
          Choose a retailer to search all your components. The recommended store is highlighted based on category strengths.
        </p>
      </div>

      {/* Recommended Badge */}
      <div
        className="p-4 rounded-xl border-2 transition-all"
        style={{ borderColor: recommended.color, backgroundColor: `${recommended.color}15` }}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: recommended.color }}>
            Recommended
          </span>
          <span className="text-white font-bold">{recommended.name}</span>
        </div>
        <p className="text-sm text-zinc-400">{recommended.reason}</p>
      </div>

      {/* All Retailers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {retailers.map((retailer) => {
          const isExpanded = expandedRetailer === retailer.id;
          const isRecommended = retailer.id === recommended.retailerId;
          const urls = getAllPartsSearchUrls(parts, retailer.id);

          return (
            <div
              key={retailer.id}
              className={`rounded-xl border transition-all ${
                isRecommended ? "border-zinc-500 bg-zinc-800/50" : "border-zinc-800 bg-zinc-900"
              }`}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: retailer.color }} />
                    <span className="text-white font-semibold">{retailer.name}</span>
                  </div>
                  {isRecommended && (
                    <span className="text-xs text-yellow-400 font-medium">Best Match</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleOpenAll(retailer.id)}
                    className="flex-1 py-2 px-3 rounded-lg text-sm font-medium text-white transition-colors hover:brightness-110"
                    style={{ backgroundColor: retailer.color }}
                  >
                    Open All Searches
                  </button>
                  <button
                    onClick={() => setExpandedRetailer(isExpanded ? null : retailer.id)}
                    className="py-2 px-3 rounded-lg text-sm font-medium text-zinc-300 bg-zinc-700 hover:bg-zinc-600 transition-colors"
                  >
                    {isExpanded ? "Hide" : "Links"}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="border-t border-zinc-700 p-3 space-y-1">
                  {urls.map((item, i) => (
                    <a
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-zinc-700/50 text-sm transition-colors"
                    >
                      <span className="text-zinc-300 truncate">{item.partName}</span>
                      <svg className="w-3 h-3 text-zinc-500 shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
