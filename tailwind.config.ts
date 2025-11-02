import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef9ff",
          100: "#d8efff",
          200: "#afdfff",
          300: "#75c8ff",
          400: "#3eaefc",
          500: "#1b93e0",
          600: "#0a71b6",
          700: "#085c93",
          800: "#0b4a75",
          900: "#0d3e63"
        },
        accent: {
          50: "#fff6ec",
          100: "#ffe6c8",
          200: "#ffd094",
          300: "#ffb55b",
          400: "#ff953a",
          500: "#ff6d02",
          600: "#e14f00",
          700: "#b73902",
          800: "#8f2f07",
          900: "#742809"
        }
      },
      boxShadow: {
        card: "0 20px 45px -25px rgba(30,64,175,0.45)"
      },
      animation: {
        pulseSlow: "pulse 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
