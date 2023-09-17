/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      rose: "#BE123C",
      deepRose: "#B91C1C",
      lightGray: "#9CA3AF",
      midGray: "#666666",
      deepGray: "#111827",
      white: "#fff",
      offWhite: "#F8E7EB",
      black: "#000",
      offBlack: "#333333",
      dustBlack: "#404040",
    },
    fontFamily: {
      dmsans: ['"DM Sans"', "sans"],
      poppins: ["Poppins", "sans"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  darkMode: "class",
};
