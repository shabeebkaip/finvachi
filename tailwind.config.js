/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#277BAB",
        secondary: "#888888",
        finvBlue: "#083F75",
        borderColor: "#707070",
      },
      fontSize: {
        xs: '0.75rem',   // 12px
        sm: '0.875rem',  // 14px
        base: '1rem',    // 16px
        lg: '1.125rem',  // 18px
        xl: '1.25rem',   // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',    // 48px
        '6xl': '3.75rem', // 60px
        '7xl': '4.5rem',  // 72px
        '8xl': '6rem',    // 96px
        '9xl': '8rem',    // 128px
        'tiny': '0.625rem',   // 10px
        'huge': '10rem',      // 160px
      },
      container: {
        center: true,
        screens: {
          sm: '600px',     // Small screens
          md: '728px',     // Medium screens
          lg: '984px',     // Large screens
          xl: '1240px',    // Extra-large screens
          '2xl': '1496px', // 2xl screens
          '3xl': '1600px', // Custom screen for 1600px
          '4xl': '1792px', // Custom screen for 1792px
          '5xl': '1920px', // Custom screen for 1920px
        },
      },
    },
  },
  plugins: [],
}
