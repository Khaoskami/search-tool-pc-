import { NextResponse } from "next/server";
import { scrapeRetailer, VALID_RETAILERS } from "@/lib/scrapers";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const retailer = searchParams.get("retailer");
  const query = searchParams.get("query");

  if (!retailer || !query) {
    return NextResponse.json(
      { error: "Missing retailer or query parameter" },
      { status: 400 }
    );
  }

  if (!VALID_RETAILERS.includes(retailer)) {
    return NextResponse.json(
      { error: `Invalid retailer. Valid: ${VALID_RETAILERS.join(", ")}` },
      { status: 400 }
    );
  }

  try {
    const { results, cached } = await scrapeRetailer(retailer, query);
    return NextResponse.json(
      { prices: results, cached, query },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { prices: [], error: "Scraping failed", query },
      { status: 200 }
    );
  }
}
