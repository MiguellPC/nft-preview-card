/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: '375px',
      desktop: '1440px',
    },
    colors: {
      'main-bg': 'hsl(217, 54%, 11%)',
      'card-bg': 'hsl(216, 50%, 16%)',
      'line': 'hsl(215, 32%, 27%)',
      'letter-primary': 'hsl(215, 51%, 70%)',
      'letter-cyan': 'hsl(178, 100%, 50%)',
      'letter-white': 'hsl(0, 0%, 100%)',
      'link-color': 'hsl(228, 45%, 44%)',
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

