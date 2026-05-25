/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        glass: "0 30px 90px rgba(45, 35, 18, 0.16)",
      },
    },
  },
  plugins: [],
};
