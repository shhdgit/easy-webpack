const ExtractTextPlugin = require('extract-text-webpack-plugin')
const rules = require('./rules.base.js')
const config = require('../../../config')

const prodRules = [
  {
    test: /\.(styl|css)$/,
    include: config.dir.src,
    use: ExtractTextPlugin.extract([
      {
        loader: 'css-loader',
        options: {
          minimize: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: (loader) => [
            require('autoprefixer'),
          ],
        },
      },
      {
        loader: 'stylus-loader',
      },
    ]),
  },
]

prodRules.forEach(rule => {
  rules.push(rule)
})

module.exports = {
  rules,
}
