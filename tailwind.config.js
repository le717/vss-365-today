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
        ],
        body: [
          "Noto Serif SC", ...defaultTheme.fontFamily.serif
        ],
        header: [
          "Josefin Slab", "Noto Serif SC", ...defaultTheme.fontFamily.serif
        ]
      },
    },
  },
  variants: {},
  plugins: [],
}
