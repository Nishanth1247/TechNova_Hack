/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#2563EB",
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#DC2626",
        background: "#F8FAFC",
      },
    },
  },
  plugins: [],
};