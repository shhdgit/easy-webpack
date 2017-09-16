const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config')

function resolve(filepath) {
  return path.resolve(__dirname, '..', filepath)
}

module.exports = {
  entry: {
    vendor1: ['vue'],
    vendor2: ['vuex', 'vue-router', 'axios'],
  },
  output: {
    path: config.build.assetsRoot,
    filename: 'vendors/dev/vendor.[chunkhash:8].js',
    publicPath: config.build.assetsPublicPath,
    library: 'vendor_[chunkhash:8]',                   // 必填项，将此dll包暴露到window上，给app.js调用
  },
  plugins: [
    new webpack.DllPlugin({
      context: resolve('build/dll'),                   // 必填项，用来标志manifest中的路径
      path: resolve('build/dll/[name].manifest.json'), // 必填项，存放manifest的路径
      name: 'vendor_[chunkhash:8]',                                // 必填项，manifest的name
    }),
    new HtmlWebpackPlugin({
      filename: resolve('build/dll/index.dev.html'),
      template: resolve('src/index.html'),
      inject: true,
      chunksSortMode: 'dependency',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
}
