/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fdfdff",
      purple: "#6854fc",
      yellow: "#ffe710",
      black: "#000000",
      gray: "#858586",
      lightgray: "#eeeef0",
      LightGray: "#f1f1f3",
      Gray: "#e2e2e2",
      blue: "#aee2ff",
      skin: "#FCEDEE",
      lightblue: "#BED3FF",
      lightgreen: "#DEFEEA",
      lightyellow: "#FFEEA6",
      brown: "#B85A60",
      green: "#0f642f",
      DarkYellow: "#b89500",
      DarkBlue: "#2655bb",
      DarkBlack: "#0a142f",
      DarkPurple: "#212a43",
    },
    extend: {
      screens: {
        ms: "320px",
        // => @media (min-width: 320px) { ... }

        mm: "375px",
        // => @media (min-width: 375px) { ... }

        ml: "425px",
        // => @media (min-width: 425px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }

        "3xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
