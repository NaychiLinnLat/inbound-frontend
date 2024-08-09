/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Pyidaungsu", "Helvetica", "Arial", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: "#074ca1",
      yellow: "#FFEF00",
      cyan: "#67e8f9",
      bgColor: "#abb8c3",
      slate: "#f1f5f9",
      red: "#f00",
      childBackground: "#e2e8f0",
    },
  },
  plugins: [],
};
