import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          inverted: "var(--color-text-inverted)",
          muted: "var(--color-text-muted)",
          accent: "var(--color-text-accent)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          base: "var(--color-background-base)",
          "fill-inverted": "var(--color-fill-inverted)",
          "button-accent": "var(--color-button-accent)",
          "button-accent-hover": "var(--color-button-accent-hover)",
          "button-muted": "var(--color-button-muted)",
          "button-accent-secondary": "var(--color-button-accent-secondary)",
          "button-accent-secondary-hover":
            "var(--color-button-accent-secondary-hover)",
          "input-field-accent": "var(--color-input-field-accent)",
        },
      },
      borderColor: {
        skin: {
          base: "var(--color-text-base)",
        },
      },
      fill: {
        skin: {
          base: "#4561DA",
        },
      },
    },
  },
  plugins: [],
};
export default config;
