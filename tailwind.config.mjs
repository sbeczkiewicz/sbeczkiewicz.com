const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "griko": "#27292b",
        "cultured": "#f9f9f9",
        "flash": "#ffc24f"
      },
      fontFamily: {
        sans: ["Inter", fontFamily.sans],
      },
    },
  },
  plugins: [],
}
