/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1E3FF5', dark: '#1430CC', light: '#E8ECFF' },
        navy: { DEFAULT: '#0B1A4A', light: '#13265F' },
        ink: '#0F172A',
        muted: '#475569',
        soft: '#F4F6FB',
      },
      fontFamily: { sans: ['Figtree', 'system-ui', 'sans-serif'] },
      boxShadow: { card: '0 10px 30px -12px rgba(11,26,74,0.18)' },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
    },
  },
  plugins: [],
}
