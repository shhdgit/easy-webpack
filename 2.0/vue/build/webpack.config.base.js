const path = require('path')
const ROOT = path.resolve(__dirname, '../')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: `${ROOT}/src/index`
  },
  output: {
    path: `${ROOT}/public`,
    filename: 'dist/[name].js',
    chunkFilename: 'dist/chunks/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      'public': `${ROOT}/public`,
      'src': `${ROOT}/src`,
      'component': `${ROOT}/src/components`,
      'UIcomponent': `${ROOT}/src/components/UI`,
      'Vcomponent': `${ROOT}/src/components/view`,
      'view': `${ROOT}/src/views`,
      'store': `${ROOT}/src/store`,
      'mixin': `${ROOT}/src/mixins`,
      'filter': `${ROOT}/src/filters`,
      'api': `${ROOT}/src/api`,
      'assets': `${ROOT}/src/assets`,
      'router': `${ROOT}/src/router`
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
        include: `${ROOT}/src/`
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: `${ROOT}/src/`,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${ROOT}/public/index.origin.html`,
      inject: true
    }),
    new webpack.DllReferencePlugin({
      context: `${ROOT}/config`,
      manifest: require('../config/vendor1.manifest.json')
    }),
    new webpack.DllReferencePlugin({
      context: `${ROOT}/config`,
      manifest: require('../config/vendor2.manifest.json')
    })
  ]
}
