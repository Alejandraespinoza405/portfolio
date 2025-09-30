import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",   // Verde oscuro
        secondary: "var(--color-secondary)"// Violeta
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Anton", "sans-serif"],
      },
      borderRadius: { "2xl": "1.25rem" },
      boxShadow: { soft: "0 10px 25px rgba(0,0,0,0.08)" },
    },
  },
  plugins: [],
};
export default config;
