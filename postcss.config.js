//  autoprefixer, cssnano,
/* module.exports = {
  plugins: {
    'postcss-nested': {},
    'precss': true
  },
} */

module.exports = {
  sourcemap: true,
  plugins: [require("postcss-nested"), require("precss")],
}
