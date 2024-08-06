/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "rgb(var(--text))",
          5: "rgba(var(--text), 0.05)",
        },
        secondary: "rgb(var(--secondary))",
        primary: "rgb(var(--primary))",
        white: "rgb(var(--white))",
        border: "rgb(var(--border))",
        background: "rgb(var(--background))",
        gray: "rgb(var(--gray))",
      },
    },
  },
  plugins: [],
};
