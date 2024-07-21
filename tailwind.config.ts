import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
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
          '0%': { padding: '0' },
          '50%': { padding: '0' },
          '100%': { padding: '5rem' }, // Adjust to your desired padding value
        },
        translateUp: {
          '0%': { transform: 'translateY(20%)', opacity : "0%" },
          '100%': { transform: 'translateY(0)', opacity : "100%" },
        },
      },
      animation: {
        translateUp: 'translateUp 1.5s ease-out',
        pad: 'pad 1.5s ease-in-out forwards', // 1s animation duration, forwards to keep the final state
      },
    },
  },
  plugins: [addVariablesForColors,
    function ({ addUtilities } : { addUtilities : any }) {
      addUtilities({
        '.no-scrollbar': {
          /* Hide scrollbar for Chrome, Safari, and Opera */
          '-webkit-overflow-scrolling': 'touch',
          '-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge, and Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      })
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
