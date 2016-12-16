const path = require('path')
const ROOT = path.resolve(__dirname, '../')
const webpack = require('webpack')
const merge = require('webpack-merge')
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
  devtool: 'eval-source-map'
})
