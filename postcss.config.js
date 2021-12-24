//  autoprefixer, cssnano,
/* module.exports = {
  plugins: {
    'postcss-nested': {},
    'precss': true
  },
} */

module.exports = {
  map: true,
  plugins: [require("postcss-nested"), require("precss")],
}
