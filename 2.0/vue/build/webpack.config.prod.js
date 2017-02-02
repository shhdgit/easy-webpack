const path = require('path')
const ROOT = path.resolve(__dirname, '../')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BASE_CONFIG = require('./webpack.config.base')

module.exports = merge(BASE_CONFIG, {
  output: {
    filename: 'dist/[name].[chunkhash:8].js',
    chunkFilename: 'dist/chunks/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader!less-loader',
          fallbackLoader: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        vue: {
          loaders: {
            css: ExtractTextPlugin.extract({
              loader: 'css-loader',
              fallbackLoader: 'vue-style-loader'
            }),
            less: ExtractTextPlugin.extract({
              loader: 'css-loader!less-loader',
              fallbackLoader: 'vue-style-loader'
            })
          }
        }
      }
    }),
    new ExtractTextPlugin({
      filename: 'dist/styles/[name].[contenthash:8].css',
      allChunks: true
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
})
