/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
      backgroundColor: {
        light: {
          primary: '#ffffff',
          secondary: '#f8fafc',
        },
        dark: {
          primary: '#0a192f',
          secondary: '#112240',
        },
      },
      textColor: {
        light: {
          primary: '#1e293b',
          secondary: '#475569',
        },
        dark: {
          primary: '#e2e8f0',
          secondary: '#94a3b8',
        },
      },
    },
  },
  plugins: [],
}