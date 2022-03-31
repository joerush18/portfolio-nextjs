module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#e1e5f2",
        backgroundContent: "#f8f9fa",
        textPrimary: "#242526",
        primary: "#e07a5f",
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
        MavenPro: ["Maven Pro", "sans-serif"],
        PressStart: ["Press Start 2P"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
