/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        secondary: "var(--secondary)",
        primary: "var(--primary)",
        white: "var(--white)",
        border: "var(--border)",
        background: "var(--background)",
      },
    },
  },
  plugins: [],
};
