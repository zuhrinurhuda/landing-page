/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      // Add custom colors for the IOH brand
      "ioh-red": {
        50: "#FFF5F5",
        600: "#ED1C24",
      },
      "ioh-neutral": {
        50: "#FAFAFA",
        100: "#F9F9F9",
        200: "#EFEFEF",
        300: "#D6D5D6",
        500: "#7C7A7B",
        800: "#403D3E",
        950: "#121B21",
      },
    },
    extend: {
      // Add custom box shadow for the IOH brand
      boxShadow: {
        "ioh-card": "0 7px 15px 0 rgba(0,0,0,.11)",
      },
    },
  },
  plugins: [],
};
