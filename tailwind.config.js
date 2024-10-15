/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "50%": { width: "100%" },
          "55%": { width: "100%" },
          "65%": { width: "0%" },
          "100%": { width: "0%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
      },
      animation: {
        typing: "typing 8s steps(20) infinite, blink 0.7s infinite",
      },
    },
  },
  plugins: [],
};
