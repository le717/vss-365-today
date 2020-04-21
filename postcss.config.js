const process = require("process");
const tailwindcss = require("tailwindcss");
const css_import = require("postcss-import");
const autoprefixer = require("autoprefixer");
const css_custom_props = require("postcss-custom-properties");
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/static/js/**/*.js", "./src/templates/**/*.html", "./src/templates/**/*.jinja2"],
  css: ["./src/static/css/**/*.css"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
const cssnano = require("cssnano")({
  preset: "default"
});

module.exports = {
  plugins: [
    css_import,
    tailwindcss,
    css_custom_props,
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [cssnano] : []),
  ]
}