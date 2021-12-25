module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        shopBlue: '#36A4C2',
        shopPrimary: '#FDF7EC',
        shopSecond: '#F6AB99'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
