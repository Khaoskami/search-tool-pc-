import * as cheerio from "cheerio";
import { ScraperResult, BROWSER_HEADERS, parsePrice, cleanProductName } from "./types";

const BASE_URL = "https://www.wootware.co.za";

export async function scrapeWootware(query: string): Promise<ScraperResult[]> {
  const url = `${BASE_URL}/catalogsearch/result/?q=${encodeURIComponent(query)}`;
  const results: ScraperResult[] = [];

  try {
    const response = await fetch(url, {
      headers: { ...BROWSER_HEADERS, Referer: BASE_URL },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) return results;

    const html = await response.text();
    const $ = cheerio.load(html);

    // Magento-style selectors
    const selectors = [
      { container: ".product-item", name: ".product-item-link", price: ".price-wrapper .price, .price-box .price, [data-price-type='finalPrice'] .price", link: ".product-item-link" },
      { container: ".product-item-info", name: ".product-item-name a, .product-name a", price: ".price, .special-price .price", link: ".product-item-name a, .product-name a" },
      { container: "[class*='product']", name: "a[class*='product']", price: "span[class*='price'], [data-price-amount]", link: "a[href*='/']" },
    ];

    for (const sel of selectors) {
      $(sel.container).each((_, el) => {
        const $el = $(el);
        const nameEl = $el.find(sel.name).first();
        const priceEl = $el.find(sel.price).first();
        const linkEl = $el.find(sel.link).first();

        const name = cleanProductName(nameEl.text());
        const price = parsePrice(priceEl.text()) || parsePrice(priceEl.attr("data-price-amount") || "");
        let href = linkEl.attr("href") || "";

        if (name && price && price > 100) {
          if (href && !href.startsWith("http")) {
            href = `${BASE_URL}${href.startsWith("/") ? "" : "/"}${href}`;
          }
          results.push({
            retailerId: "wootware",
            retailerName: "Wootware",
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
    // Scraping failed
  }

  return results.sort((a, b) => a.priceZAR - b.priceZAR).slice(0, 5);
}
