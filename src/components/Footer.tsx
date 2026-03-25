export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-2">SA PC Builder</h3>
            <p className="text-zinc-400 text-sm">
              Find the best PC component deals from South African retailers.
              Compare prices across Evetech, Wootware, Takealot, and more.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Retailers</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="https://www.evetech.co.za" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">Evetech</a></li>
              <li><a href="https://www.wootware.co.za" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">Wootware</a></li>
              <li><a href="https://www.takealot.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">Takealot</a></li>
              <li><a href="https://www.incredible.co.za" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">Incredible Connection</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Disclaimer</h3>
            <p className="text-zinc-500 text-xs">
              Prices shown are estimates and may not reflect current retail prices.
              Always verify prices on retailer websites before purchasing.
              We are not affiliated with any retailer listed.
            </p>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-8 pt-4 text-center text-zinc-500 text-xs">
          SA PC Builder &copy; {new Date().getFullYear()} &mdash; Built for South African PC enthusiasts
        </div>
      </div>
    </footer>
  );
}
