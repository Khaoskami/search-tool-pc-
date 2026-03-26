import * as cheerio from "cheerio";
import { ScraperResult, BROWSER_HEADERS, parsePrice, cleanProductName } from "./types";

const BASE_URL = "https://www.takealot.com";

export async function scrapeTakealot(query: string): Promise<ScraperResult[]> {
  const url = `${BASE_URL}/all?qsearch=${encodeURIComponent(query)}`;
  const results: ScraperResult[] = [];

  try {
    const response = await fetch(url, {
      headers: { ...BROWSER_HEADERS, Referer: BASE_URL },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) return results;

    const html = await response.text();
    const $ = cheerio.load(html);

    // Try to find embedded JSON data first (Takealot often hydrates from JSON)
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const json = JSON.parse($(el).html() || "");
        if (json["@type"] === "Product" || json["@type"] === "ItemList") {
          const items = json.itemListElement || [json];
          for (const item of items) {
            const product = item.item || item;
            if (product.name && product.offers) {
              const offer = Array.isArray(product.offers) ? product.offers[0] : product.offers;
              results.push({
                retailerId: "takealot",
                retailerName: "Takealot",
                productName: cleanProductName(product.name),
                priceZAR: parseFloat(offer.price) || 0,
                productUrl: product.url || url,
                inStock: offer.availability !== "OutOfStock",
              });
            }
          }
        }
      } catch {
        // JSON parse failed
      }
    });

    if (results.length === 0) {
      // Fallback: try HTML selectors
      const selectors = [
        { container: ".product-card, .search-product, [data-ref='product-card']", name: ".product-title, [data-ref='product-title'], h4, h3", price: ".amount, [data-ref='price'], .price, .buybox-module-price", link: "a[href*='/']" },
        { container: ".result-item, [class*='product']", name: "a[href*='/'], .product-name", price: ".amount, [class*='price']", link: "a[href*='/']" },
      ];

      for (const sel of selectors) {
        $(sel.container).each((_, el) => {
          const $el = $(el);
          const name = cleanProductName($el.find(sel.name).first().text());
          const price = parsePrice($el.find(sel.price).first().text());
          let href = $el.find(sel.link).first().attr("href") || $el.find("a").first().attr("href") || "";

          if (name && price && price > 100) {
            if (href && !href.startsWith("http")) {
              href = `${BASE_URL}${href.startsWith("/") ? "" : "/"}${href}`;
            }
            results.push({
              retailerId: "takealot",
              retailerName: "Takealot",
              productName: name,
              priceZAR: price,
              productUrl: href || url,
              inStock: true,
            });
          }
        });
        if (results.length > 0) break;
      }
    }
  } catch {
    // Scraping failed
  }

  return results.filter((r) => r.priceZAR > 0).sort((a, b) => a.priceZAR - b.priceZAR).slice(0, 5);
}
