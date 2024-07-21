import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        pad: {
          '0%': { padding: '0', boxShadow: 'none' },
          '50%': { padding: '0', boxShadow: 'none' },
          '100%': { padding: '5rem', boxShadow: '0 6px 6px rgba(0, 0, 0, 0.1)' },
        },
        translateUp: {
          '0%': { transform: 'translateY(20%)', opacity : "0%" },
          '100%': { transform: 'translateY(0)', opacity : "100%" },
        },
      },
      animation: {
        translateUp: 'translateUp 1.5s ease-out',
        pad: 'pad 1.5s ease-in-out forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.no-scrollbar': {
          '-webkit-overflow-scrolling': 'touch',
          '-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': { display: 'none' },
      });
    },
  ],
};


export default config;
