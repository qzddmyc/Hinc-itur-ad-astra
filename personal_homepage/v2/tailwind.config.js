/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], 
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#F9F1D0',
          300: '#E3C878',
          500: '#D4AF37',
          700: '#AA8C2C',
        },
        dark: '#050505'
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mymono: ['"Noto Sans Mono"', 'monospace'],
        mymonol: ['"Maple Mono Light"', '"Noto Sans Mono"', 'monospace'],
        titill: ['TitilliumWeb', 'sans-serif']
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
      }
    }
  },
  plugins: [],
}