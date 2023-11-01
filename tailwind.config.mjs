const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
		"primary": "#abcc23",
		"secondary": "#a3dada",
		"trunk": "#6e7072",
		"background": "#f6f9f5"
      },
      fontFamily: {
        sans: ["Inter", fontFamily.sans],
      },
    },
  },
  plugins: [],
}
