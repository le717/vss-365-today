const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [
    "./src/static/js/**/*.js",
    "./src/templates/**/*.html",
    "./src/templates/**/*.jinja2"
  ],
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
