const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#8b2e5f",
        dark: "#000000",
        grayDark: "#2e2e2e",
        grayMedium: "#555555",
        accent: "#cf6a9f",
        light: "#F7F0F4"
      },
    },
  },
  plugins: [flowbite.plugin()],
};
