import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tier: {
          budget: "#22c55e",
          "mid-range": "#3b82f6",
          "high-end": "#a855f7",
          premium: "#eab308",
        },
      },
    },
  },
  plugins: [],
};
export default config;
