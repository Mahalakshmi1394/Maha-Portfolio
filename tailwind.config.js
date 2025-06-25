// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        "frost-dark": "rgba(0,0,0,0.6)",
        "frost-light": "rgba(255,255,255,0.05)",
        primary: "#2563EB",
        "primary-hover": "#1D4ED8",
      },
      backdropBlur: {
        xs: "2px",
      }
    },
  },
  plugins: [],
};
