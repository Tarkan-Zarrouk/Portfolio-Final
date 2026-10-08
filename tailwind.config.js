/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "800px",
    },
    extend: {
      colors: {
        ink: "#eef2ea",
        muted: "#b9aaaa",
        paper: "#332b2b",
        line: "#514646",
        lime: "#d8f45d",
        dark: "#211b1b",
        tile: "#25362a",
        "tile-hover": "#304434",
        "lime-ink": "#172019",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.8s both",
      },
    },
  },
  plugins: [],
};
