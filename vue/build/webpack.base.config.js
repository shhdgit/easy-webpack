const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// TODO: merge config
const config = require('../config')

function resolve(filepath) {
  return path.resolve(__dirname, '..', filepath)
}

module.exports = {
  entry: {
    app: resolve('src/app'),
  },
  output: {
    path: config.build.assetsRoot,
    filename: 'dist/js/[name].js',
    chunkFilename: 'dist/js/[name].chunk.js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve('src'),
      public: resolve('public'),
      api: resolve('src/api'),
      components: resolve('src/components'),
      views: resolve('src/views'),
      service: resolve('src/service'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'dist/images/[name].[contenthash:8].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'dist/fonts/[name].[contenthash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    // new webpack.DllReferencePlugin({
    //   context: resolve('build/dll),
    //   manifest: resolve('build/dll/vendor1.manifest.json'),
    // }),
    // new webpack.DllReferencePlugin({
    //   context: resolve('build/dll'),
    //   manifest: resolve('build/dll/vendor2.manifest.json'),
    // }),
  ],
  externals: {
    vue: 'Vue',
    axios: 'axios',
  },
}
