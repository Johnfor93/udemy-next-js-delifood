/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        quicksand: ['var(--font-quicksand)'],
      },
      animation:{
        'loading': "loading 1s ease-in-out infinite"
      },
      keyframes: {
        'loading': {
          '50%':  {
            opacity: 1,
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '0%, 100%': {
            opacity: 0.2,
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          }
        }
      }
    },
  },
  plugins: [],
};
