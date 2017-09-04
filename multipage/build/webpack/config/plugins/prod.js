const os = require('os')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const plugins = require('./base.js')

const prodPlugins = [
  new UglifyJsPlugin({
    parallel: {
      cache: true,
      workers: os.cpus().length,
    },
  }),
  new OptimizeCssAssetsPlugin({
    cssProcessor: require('cssnano'),
    cssProcessorOptions: { discardComments: { removeAll: true } },
    canPrint: true
  }),
]

prodPlugins.forEach(plugin => {
  plugins.push(plugin)
})

module.exports = plugins
