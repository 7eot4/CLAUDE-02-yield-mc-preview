import type { Config } from 'tailwindcss';

// Color tokens copied 1:1 from docs/BRAND.md §4 - reference these named colors
// (e.g. `bg-yield-bg text-yield-text`) instead of raw hex codes anywhere in the app.
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'yield-bg': '#0B0F0D',
        'yield-surface': '#141A17',
        'yield-green': '#2ED573',
        'yield-green-dim': '#1B8F4C',
        'yield-gold': '#F5B942',
        'yield-violet': '#9B6BFF',
        'yield-text': '#EAF2ED',
        'yield-text-dim': '#8FA398',
        'yield-danger': '#FF5C5C',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'yield-gradient': 'linear-gradient(135deg, #2ED573 0%, #1B8F4C 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
