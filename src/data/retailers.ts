import { Retailer } from "./types";

export const retailers: Retailer[] = [
  {
    id: "evetech",
    name: "Evetech",
    color: "#e63946",
    buildSearchUrl: (q: string) =>
      `https://www.evetech.co.za/search/${encodeURIComponent(q)}`,
    strengthCategories: ["cpu", "gpu", "motherboard", "ram", "storage", "psu", "cooler"],
  },
  {
    id: "wootware",
    name: "Wootware",
    color: "#2a9d8f",
    buildSearchUrl: (q: string) =>
      `https://www.wootware.co.za/catalogsearch/result/?q=${encodeURIComponent(q)}`,
    strengthCategories: ["cpu", "gpu", "motherboard", "ram", "storage", "psu", "case", "cooler"],
  },
  {
    id: "takealot",
    name: "Takealot",
    color: "#0066cc",
    buildSearchUrl: (q: string) =>
      `https://www.takealot.com/all?qsearch=${encodeURIComponent(q)}`,
    strengthCategories: ["monitor", "keyboard", "mouse", "headset", "case", "storage"],
  },
  {
    id: "incredible",
    name: "Incredible Connection",
    color: "#ff6b00",
    buildSearchUrl: (q: string) =>
      `https://www.incredible.co.za/catalogsearch/result/?q=${encodeURIComponent(q)}`,
    strengthCategories: ["monitor", "keyboard", "mouse", "headset", "gpu"],
  },
];
