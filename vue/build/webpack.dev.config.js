const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const baseConfig = require('./webpack.base.config')

function resolve(filepath) {
  return path.resolve(__dirname, '..', filepath)
}

// add hot-reload related code to entry chunks
Object.keys(baseConfig.entry).forEach((name) => {
  baseConfig.entry[name] = ['./build/dev-client'].concat(baseConfig.entry[name])
})

module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
        include: resolve('src'),
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader?sourceMap', 'less-loader'],
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader?sourceMap', 'stylus-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // ***** dll *****
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: resolve('build/dll/vendor-manifest.json'),
    }),
    new AddAssetHtmlPlugin({
      includeSourcemap: false,
      outputPath: '/vendors',
      publicPath: '/vendors',
      filepath: resolve('public/vendors/*.dll.js'),
    }),
    // ********************
    new HtmlWebpackPlugin({
      filename: resolve('public/index.html'),
      template: resolve('src/index.dev.html'),
      inject: true,
      chunksSortMode: 'dependency',
    }),
    new FriendlyErrorsPlugin(),
  ],
  devtool: '#cheap-module-eval-source-map',
})
