/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#1D1927',
        royal: '#25263A',
        ivory: '#F4EFE6',
        champagne: {
          DEFAULT: '#DCC7B2',
          light: '#EBE0D3',
          dark: '#BBA48E',
        },
        taupe: '#A5988A',
        charcoal: '#353032',
        deepbrown: '#5E4F47',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        mega: '.35em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(29, 25, 39, 0.05)',
        'elevated': '0 10px 40px -10px rgba(29, 25, 39, 0.12)',
        'glow': '0 0 25px rgba(220, 199, 178, 0.25)',
      },
    },
  },
  plugins: [],
}
