import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "marcelo-green-200": "#d9efd9",
        "marcelo-green-800": "#192216",
      },
    },
    fontFamily: {
      serif: ['"DM Serif Text"', "Jomolhari", "Helvetica", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
