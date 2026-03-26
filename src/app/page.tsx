"use client";

import Link from "next/link";
import { TIER_INFO, BudgetTier } from "@/data/types";

const tierGradients: Record<BudgetTier, string> = {
  budget: "from-green-600 to-green-800",
  "mid-range": "from-blue-600 to-blue-800",
  "high-end": "from-purple-600 to-purple-800",
  premium: "from-yellow-600 to-amber-800",
};

const tierBorders: Record<BudgetTier, string> = {
  budget: "hover:border-green-500/50",
  "mid-range": "hover:border-blue-500/50",
  "high-end": "hover:border-purple-500/50",
  premium: "hover:border-yellow-500/50",
};

const tierGlows: Record<BudgetTier, string> = {
  budget: "group-hover:shadow-green-500/10",
  "mid-range": "group-hover:shadow-blue-500/10",
  "high-end": "group-hover:shadow-purple-500/10",
  premium: "group-hover:shadow-yellow-500/10",
};

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Tech grid background */}
        <div className="absolute inset-0 tech-grid-bg opacity-50" />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-40" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse opacity-30" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse opacity-30" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-36 relative">
          <div className="text-center max-w-3xl mx-auto">
            {/* Live prices badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Live Price Scraping &bull; South African Retailers
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Build Your Dream PC
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-gradient bg-clip-text">
                Best SA Deals
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Pick your budget & preferences. We scrape live prices from
              Evetech, Wootware, Takealot & Incredible Connection to find
              the cheapest deals for every component.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/build"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Start Building
              </Link>
              <span className="text-sm text-zinc-500">No account needed &bull; 100% free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Choose Your Budget</h2>
          <p className="text-zinc-400">Select a tier to get started with a curated build</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIER_INFO.map((tier) => (
            <Link
              key={tier.id}
              href={`/build?tier=${tier.id}`}
              className={`group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:scale-[1.03] ${tierBorders[tier.id]} shadow-lg ${tierGlows[tier.id]} hover:shadow-xl overflow-hidden`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${tierGradients[tier.id]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              {/* Gradient top accent */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${tierGradients[tier.id]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <span className="text-3xl">{tier.icon}</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-1">{tier.name}</h3>
                <p className="text-lg font-semibold text-zinc-300 mb-3">{tier.priceRange}</p>
                <p className="text-sm text-zinc-500 leading-relaxed">{tier.description}</p>
                <div className="mt-5 flex items-center gap-1 text-sm text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-800/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
              color: "text-green-400 bg-green-500/10",
              title: "Live Price Scraping",
              desc: "Real-time prices scraped from 4 major SA retailers. Always up-to-date.",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              ),
              color: "text-blue-400 bg-blue-500/10",
              title: "Best Deal Finder",
              desc: "Automatically highlights the cheapest retailer for each component.",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              color: "text-purple-400 bg-purple-500/10",
              title: "Compatibility Check",
              desc: "Automatic validation of CPU/motherboard sockets, PSU wattage, and more.",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              ),
              color: "text-orange-400 bg-orange-500/10",
              title: "Buy In One Place",
              desc: "Find the cheapest single retailer for your entire build to save on shipping.",
            },
          ].map((feature, idx) => (
            <div key={idx} className="text-center">
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Retailers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-center text-xs text-zinc-600 uppercase tracking-widest mb-6">Prices scraped from</p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {[
            { name: "Evetech", color: "text-red-400" },
            { name: "Wootware", color: "text-teal-400" },
            { name: "Takealot", color: "text-blue-400" },
            { name: "Incredible Connection", color: "text-orange-400" },
          ].map((r) => (
            <span key={r.name} className={`${r.color} font-semibold text-sm opacity-60 hover:opacity-100 transition-opacity`}>
              {r.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
