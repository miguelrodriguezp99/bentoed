/** @type {import('tailwindcss').Config} */

import animations from "@midudev/tailwind-animations";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        highlight: "var(--color-block-highlight)",
        highlight_hover: "var(--color-block-highlight-hover)",
      },
    },
  },
  darkMode: "class",
  plugins: [animations],
};
