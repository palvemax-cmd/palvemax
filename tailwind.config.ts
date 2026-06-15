import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1a3c6b",
          "blue-dark": "#0f2442",
          "blue-light": "#2a5ba0",
          orange: "#e8601c",
          "orange-light": "#f07a3a",
          gray: "#f5f6f8",
          "gray-dark": "#374151",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'DM Sans'", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
