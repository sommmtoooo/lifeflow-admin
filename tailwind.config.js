/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D72323",
        light: "#F5EDED",
        secondary: "#",
        dark: "#000000",
        overlay: "#3e3636",
        "dark-overlay": "#660000",
      },
    },
  },
  plugins: [],
};
