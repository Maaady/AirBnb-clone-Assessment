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
        airbnb: {
          red: "#FF385C",
          darkRed: "#E00B41",
          hoverRed: "#D70466",
          black: "#222222",
          gray: {
            50: "#F7F7F7",
            100: "#EBEBEB",
            200: "#DDDDDD",
            300: "#B0B0B0",
            400: "#717171",
            500: "#5E5E5E",
            600: "#333333",
            700: "#222222",
          },
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      boxShadow: {
        airbnb: "0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)",
        card: "0 6px 16px rgba(0, 0, 0, 0.12)",
        popup: "0 2px 16px rgba(0, 0, 0, 0.12)",
        lightbox: "0 8px 28px rgba(0, 0, 0, 0.28)",
      },
      maxWidth: {
        listing: "1120px",
        "listing-wide": "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
