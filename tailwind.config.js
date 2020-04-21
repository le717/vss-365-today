const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        custom: [
          ...defaultTheme.fontFamily.sans
        ]
      },
    },
  },
  variants: {},
  plugins: [],
}
