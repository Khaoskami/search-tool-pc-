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
        brand: {
          amd: "#ed1c24",
          intel: "#0071c5",
          nvidia: "#76b900",
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        "glow-slow": "glow 4s ease-in-out infinite alternate",
        shimmer: "shimmer 2s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "gradient-x": "gradient-x 3s ease infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(59,130,246,0.3), 0 0 10px rgba(59,130,246,0.1)" },
          "100%": { boxShadow: "0 0 15px rgba(59,130,246,0.5), 0 0 30px rgba(59,130,246,0.2)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300% 300%",
      },
    },
  },
  plugins: [],
};
export default config;
