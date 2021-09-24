module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: theme => ({
      'white': '#FFFFFF'
    }),
    colors: {
      navbar: '#282424',
      all: '#080404',
      white: '#FFFFFF',
      button_hover_yellow: '#FFD500',
      black: '#000000'
    },
    inset: {
      '10': '200px'
    },
    maxWidth: {
      '25': '25%',
      '33': '33%',
      '50': '50%',
      '75': '75%',
    },
    extend: {
      fontFamily: {
        'strasua': ['Strasua', 'sans-serif'],
        'body': ['PT Serif', 'serif'] 
      },
      margin: {
        '100': '50rem',
       }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    extend: {},
  },
  plugins: [],
}
