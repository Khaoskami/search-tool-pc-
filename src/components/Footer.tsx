export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-[#050508] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">SA</div>
              <span className="font-bold text-white">PC Builder</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Compare PC component prices across South African retailers. Live price scraping with intelligent best-deal recommendations.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Retailers</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Evetech", url: "https://www.evetech.co.za", color: "text-red-400" },
                { name: "Wootware", url: "https://www.wootware.co.za", color: "text-teal-400" },
                { name: "Takealot", url: "https://www.takealot.com", color: "text-blue-400" },
                { name: "Incredible Connection", url: "https://www.incredible.co.za", color: "text-orange-400" },
              ].map((r) => (
                <li key={r.name}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className={`${r.color} hover:brightness-125 transition-all`}>
                    {r.name} <span className="text-zinc-600">&#8599;</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Disclaimer</h3>
            <p className="text-zinc-600 text-xs leading-relaxed">
              Prices are scraped from retailer websites and may not always be accurate. Always verify prices on the retailer&apos;s website before purchasing. We are not affiliated with any retailer listed.
            </p>
          </div>
        </div>
        <div className="border-t border-zinc-800/50 mt-8 pt-4 text-center">
          <span className="text-zinc-600 text-xs">SA PC Builder &copy; {new Date().getFullYear()}</span>
          <span className="text-zinc-700 text-xs mx-2">&bull;</span>
          <span className="text-zinc-600 text-xs">Built for South African PC enthusiasts</span>
        </div>
      </div>
    </footer>
  );
}
