/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
        roboto: ["Roboto"],
        inter: ["Inter"],
        montserrat: ["Montserrat"],
        poppins: ["Poppins"]
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          '2xl' : "1440px",
        },
        center: true,
        padding: {
          DEFAULT: '1em',
        }
      }
    },
  },
  plugins: [],
}

