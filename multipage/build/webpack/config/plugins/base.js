const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../../../config')

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
  new ExtractTextPlugin({
    filename: '[name]/index.[contenthash:8].css',
    allChunks: true,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: '[name]/bundle.[chunkhash:8].js',
    minChunks: 4,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'webpack-runtime',
    filename: 'commons/webpack-runtime.[hash:8].js',
  }),
]

config.pages.forEach(page => {
  plugins.push(new HtmlWebpackPlugin({
    filename: `${page}/index.html`,
    template: path.resolve(config.dir.pages, `./${page}/html.js`),
    chunks: ['webpack-runtime', page, 'commons/commons'],
    hash: true,
    minify: {
      collapseWhitespace: true,
      html5: true,
      minifyCSS: true,
      removeComments: true,
    },
  }))
})

module.exports = plugins
