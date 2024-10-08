/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackish: "#121212",
        whitish: "#f5f5f5",
      },
      boxShadow: {
        shadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
