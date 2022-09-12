/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        material: "0 1px 3px rgba(0,0,0,0.12)",
      },
      colors: {
        materialBlue: "#1976d2",
      },
    },
  },
  plugins: [],
};
