/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#E31E2D',
        accent: '#A4123F'
      },
      fontFamily: {
        display: ['mr-eaves-xl-modern', ...defaultTheme.fontFamily.sans],
        sans: ['source-sans-pro', ...defaultTheme.fontFamily.sans],
        serif: ['kepler-std', ...defaultTheme.fontFamily.serif]
      }
    }
  },
  variants: {},
  plugins: []
}
