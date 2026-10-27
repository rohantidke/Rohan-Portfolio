/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'portfolio-bg': '#000000',
        'portfolio-alt': '#080808',
        'portfolio-card': '#101010',
        'portfolio-elevated': '#171717',
        'portfolio-border': '#262626',
        'portfolio-border-strong': '#3F3F46',
        'portfolio-blue': '#3B82F6',
        'portfolio-cyan': '#22D3EE',
        'portfolio-heading': '#FFFFFF',
        'portfolio-body': '#D4D4D8',
        'portfolio-secondary': '#A1A1AA',
        'portfolio-hover': '#60A5FA',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
