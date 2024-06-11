/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        // Use max-width breakpoints for a desktop-first approach
        sm: { max: "575px" },
        // => @media (max-width: 575px) { ... }

        md: { max: "959px" },
        // => @media (max-width: 959px) { ... }

        lg: { max: "1439px" },
        // => @media (max-width: 1439px) { ... }

        // You can also keep min-width breakpoints if needed
        xl: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
