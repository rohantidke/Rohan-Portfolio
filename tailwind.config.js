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
        'portfolio-bg': '#0B1120',
        'portfolio-alt': '#0F172A',
        'portfolio-card': '#111C32',
        'portfolio-border': '#263449',
        'portfolio-blue': '#3B82F6',
        'portfolio-cyan': '#22D3EE',
        'portfolio-text': '#F8FAFC',
        'portfolio-body': '#CBD5E1',
        'portfolio-muted': '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
