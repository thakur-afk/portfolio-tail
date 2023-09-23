/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 5s steps(40,end), blink 0.75s infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "80%" },
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "yellow" },
        },
      },
    },
  },
  plugins: [],
};
