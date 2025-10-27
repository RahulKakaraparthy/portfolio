/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: '#64ffda',
        navy: {
          DEFAULT: '#0a192f',
          light: '#112240',
          dark: '#020c1b',
        },
      },
    },
  },
  plugins: [],
}