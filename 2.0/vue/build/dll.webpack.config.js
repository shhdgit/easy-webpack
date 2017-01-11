const path = require('path')
const ROOT = path.resolve(__dirname, '../')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    vendor1: ['vue'],
    vendor2: ['vue-router', 'axios', 'vuex']
  },
  output: {
    path: `${ROOT}/public`,
    filename: 'vendors/[name].[chunkhash:8].js',
    publicPath: '/',
    library: '[name]_[chunkhash:8]'                   // 必填项，将此dll包暴露到window上，给app.js调用
  },
  plugins: [
    new webpack.DllPlugin({
      context: `${ROOT}/config`,                      // 必填项，用来标志manifest中的路径
      path: `${ROOT}/config/[name].manifest.json`,    // 必填项，存放manifest的路径
      name: '[name]_[chunkhash:8]'                    // 必填项，manifest的name
    }),
    new HtmlWebpackPlugin({
      filename: 'index.origin.html',
      template: `${ROOT}/src/index.html`,
      inject: true,
      chunksSortMode: function(entry1, entry2) {
        return 1
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ]
}
