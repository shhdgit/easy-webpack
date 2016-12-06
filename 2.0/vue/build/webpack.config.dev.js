const path = require('path')
const ROOT = path.resolve(__dirname, '../')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BASE_CONFIG = require('./webpack.config.base')

module.exports = merge(BASE_CONFIG, {
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${ROOT}/src/dev.html`,
      inject: true
    })
  ]
})
