const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [
    "./src/static/js/**/*.js",
    "./src/templates/**/*.html",
    "./src/templates/**/*.jinja2"
  ],
  future: {
    purgeLayersByDefault: true
  },
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        custom: [
          ...defaultTheme.fontFamily.sans
        ],
        body: [
          "Karla", ...defaultTheme.fontFamily.sans
        ],
        header: [
          "Josefin Slab", "Karla", ...defaultTheme.fontFamily.sans
        ]
      },
    },
  },
  variants: {},
  plugins: [],
}
