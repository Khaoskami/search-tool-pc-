import { ScraperResult } from "./types";
import { getCached, setCache, cacheKey } from "./cache";
import { scrapeEvetech } from "./evetech";
import { scrapeWootware } from "./wootware";
import { scrapeTakealot } from "./takealot";
import { scrapeIncredible } from "./incredible";

const scrapers: Record<string, (query: string) => Promise<ScraperResult[]>> = {
  evetech: scrapeEvetech,
  wootware: scrapeWootware,
  takealot: scrapeTakealot,
  incredible: scrapeIncredible,
};

export async function scrapeRetailer(
  retailerId: string,
  query: string
): Promise<{ results: ScraperResult[]; cached: boolean }> {
  const key = cacheKey(retailerId, query);

  // Check cache first
  const cached = getCached<ScraperResult[]>(key);
  if (cached) {
    return { results: cached, cached: true };
  }

  const scraper = scrapers[retailerId];
  if (!scraper) {
    return { results: [], cached: false };
  }

  try {
    const results = await scraper(query);
    if (results.length > 0) {
      setCache(key, results);
    }
    return { results, cached: false };
  } catch {
    return { results: [], cached: false };
  }
}

export const VALID_RETAILERS = Object.keys(scrapers);
