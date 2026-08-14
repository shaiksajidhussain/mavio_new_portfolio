/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        navy: '#0b2442',
        'navy-deep': '#021023',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        bg: 'rgb(var(--bg) / <alpha-value>)',
        'bg-muted': 'rgb(var(--bg-muted) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        gold: '#e0b05a',
        'gold-bright': '#ffbf00',
        'gold-deep': '#d4a24c',
        paprika: '#b8541f',
        bay: '#6b7b4f',
      },
      fontFamily: {
        display: ['"DM Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Sans"', 'sans-serif'],
      },
      maxWidth: {
        container: '1400px',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4a24c, #e0b05a, #ffbf00)',
      },
      boxShadow: {
        card: '0 1px 2px rgb(11 36 66 / 0.04), 0 8px 24px -12px rgb(11 36 66 / 0.12)',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('themeblack', '.dark.theme-black &')
    },
  ],
}
