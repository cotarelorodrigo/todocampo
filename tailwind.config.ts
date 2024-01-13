import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "light",
      themes: {
        light: {
          // ...
          colors: {
            default: "#749d45",
            background: "#ffffff",
            foreground: "#000000",
            primary: {
              "50": "#f4f8ed",
              "100": "#e6efd8",
              "200": "#cfe1b5",
              "300": "#afcd89",
              "400": "#93b964",
              "500": "#749d45",
              "600": "#597c34",
              "700": "#45602b",
              "800": "#394d27",
              "900": "#334324",
            },
            secondary: {
              "50": "#f3f8fc",
              "100": "#e7f0f7",
              "200": "#c9dfee",
              "300": "#99c5e0",
              "400": "#62a8ce",
              "500": "#3e8db9",
              "600": "#3179a7",
              "700": "#265b7e",
              "800": "#234e69",
              "900": "#224158",
            },
          },
        },
      },
    }),
  ],
};
export default config;
