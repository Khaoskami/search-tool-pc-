"use client";

import Link from "next/link";
import { TIER_INFO, BudgetTier } from "@/data/types";

const tierGradients: Record<BudgetTier, string> = {
  budget: "from-green-600 to-green-800",
  "mid-range": "from-blue-600 to-blue-800",
  "high-end": "from-purple-600 to-purple-800",
  premium: "from-yellow-600 to-amber-800",
};

const tierHoverBorders: Record<BudgetTier, string> = {
  budget: "hover:border-green-500",
  "mid-range": "hover:border-blue-500",
  "high-end": "hover:border-purple-500",
  premium: "hover:border-yellow-500",
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              South African Prices in ZAR
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build Your Dream PC
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Best SA Deals
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              Pick your budget, preferences, and we&apos;ll find the best component deals
              across Evetech, Wootware, Takealot, and Incredible Connection.
            </p>
            <Link
              href="/build"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Start Building
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Budget Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-2">Choose Your Budget</h2>
        <p className="text-zinc-400 text-center mb-10">Select a tier to get started with a recommended build</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIER_INFO.map((tier) => (
            <Link
              key={tier.id}
              href={`/build?tier=${tier.id}`}
              className={`group relative rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:scale-[1.03] ${tierHoverBorders[tier.id]}`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${tierGradients[tier.id]} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="relative">
                <span className="text-3xl">{tier.icon}</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-1">{tier.name}</h3>
                <p className="text-lg font-semibold text-zinc-300 mb-3">{tier.priceRange}</p>
                <p className="text-sm text-zinc-400">{tier.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm text-blue-400 font-medium">
                  Build now
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Search Best Deals</h3>
            <p className="text-sm text-zinc-400">Instantly search across 4 major SA retailers for each component in your build.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Swap Parts Freely</h3>
            <p className="text-sm text-zinc-400">Don&apos;t like a part? Swap it for an alternative and we&apos;ll re-search the best deals.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Buy In One Place</h3>
            <p className="text-sm text-zinc-400">Find the best single retailer for your entire build to save on shipping.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
