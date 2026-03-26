"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-800/50 bg-[#050508]/90 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-sm text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <span className="relative z-10">SA</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <span className="text-lg font-bold text-white">PC Builder</span>
              <span className="hidden sm:inline text-xs text-zinc-500 ml-2">South Africa</span>
            </div>
          </Link>
          <nav className="flex items-center gap-3">
            <Link href="/" className="text-zinc-400 hover:text-white transition-colors text-sm px-3 py-1.5">
              Home
            </Link>
            <Link
              href="/build"
              className="relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
            >
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                Build PC
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
