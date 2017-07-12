const path = require('path')
const ROOT = path.resolve(__dirname, '../')
const webpack = require('webpack')
const merge = require('webpack-merge')
const BASE_CONFIG = require('./webpack.base')

module.exports = merge(BASE_CONFIG, {
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader?sourceMap', 'less-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader?sourceMap', 'stylus-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    contentBase: './public',
    historyApiFallback: true,
    clientLogLevel: "error",
    proxy: {
      '/api': {
        target: 'http://localhost:9090',
        pathRewrite: { "^/api" : "" },
        secure: false,
      },
    },
  }
})
