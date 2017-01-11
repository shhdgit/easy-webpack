const path = require('path')
const ROOT = path.resolve(__dirname, '../')
const webpack = require('webpack')
const merge = require('webpack-merge')
const BASE_CONFIG = require('./webpack.config.base')

module.exports = merge(BASE_CONFIG, {
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      `${ROOT}/src/index`
    ]
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader?sourceMap', 'less-loader']
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
    stats: {
      warnings: false,
      children: false,
      chunks: false,
      chunkModules: false
    }
  }
})
