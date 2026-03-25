"use client";

import { Part } from "@/data/types";
import { getRetailerSearchUrls } from "@/lib/urlBuilder";

interface RetailerLinksProps {
  part: Part;
}

export default function RetailerLinks({ part }: RetailerLinksProps) {
  const links = getRetailerSearchUrls(part);

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.retailerId}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium text-white transition-all hover:scale-105 hover:brightness-110"
          style={{ backgroundColor: link.color }}
          title={`Search ${link.name} for ${part.name}`}
        >
          {link.name}
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ))}
    </div>
  );
}
