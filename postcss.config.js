const process = require("process");
const cssnano = require("cssnano")({
  preset: "default"
});

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-custom-properties"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [cssnano] : []),
  ]
}
