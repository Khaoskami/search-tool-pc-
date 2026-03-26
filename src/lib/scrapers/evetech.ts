import * as cheerio from "cheerio";
import { ScraperResult, BROWSER_HEADERS, parsePrice, cleanProductName } from "./types";

const BASE_URL = "https://www.evetech.co.za";

export async function scrapeEvetech(query: string): Promise<ScraperResult[]> {
  const url = `${BASE_URL}/search/${encodeURIComponent(query)}`;
  const results: ScraperResult[] = [];

  try {
    const response = await fetch(url, {
      headers: { ...BROWSER_HEADERS, Referer: BASE_URL },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) return results;

    const html = await response.text();
    const $ = cheerio.load(html);

    // Try multiple selector patterns for resilience
    const selectors = [
      { container: ".product-list-item", name: "h2 a, .product-name a, .product-title a", price: ".price, .product-price, .amount", link: "h2 a, .product-name a, a[href*='/']" },
      { container: ".product-item", name: ".product-item-link, .product-name", price: ".price, .special-price", link: "a" },
      { container: "[class*='product']", name: "a[href*='/']", price: "[class*='price'], [class*='Price']", link: "a[href*='/']" },
    ];

    for (const sel of selectors) {
      $(sel.container).each((_, el) => {
        const $el = $(el);
        const nameEl = $el.find(sel.name).first();
        const priceEl = $el.find(sel.price).first();
        const linkEl = $el.find(sel.link).first();

        const name = cleanProductName(nameEl.text());
        const priceText = priceEl.text();
        const price = parsePrice(priceText);
        let href = linkEl.attr("href") || "";

        if (name && price && price > 100) {
          if (href && !href.startsWith("http")) {
            href = `${BASE_URL}${href.startsWith("/") ? "" : "/"}${href}`;
          }
          results.push({
            retailerId: "evetech",
            retailerName: "Evetech",
            productName: name,
            priceZAR: price,
            productUrl: href || url,
            inStock: true,
          });
        }
      });
      if (results.length > 0) break;
    }
  } catch {
    // Scraping failed — return empty
  }

  return results.sort((a, b) => a.priceZAR - b.priceZAR).slice(0, 5);
}
