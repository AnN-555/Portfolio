/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#d4af37',
        'dark-bg': '#0f1111',
        'glass-bg': 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        serif: ['"Old Standard TT"', 'serif'],
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
