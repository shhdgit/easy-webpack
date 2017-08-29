const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../../config')

function resolve(dir) {
  return path.join(__dirname, '../..', dir)
}

module.exports = {
  entry: {
    main: resolve('src'),
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
    extensions: ['.js', '.json', '.vue'],
    alias: {
      public: resolve('public'),
      src: resolve('src'),
      components: resolve('src/components'),
      ui: resolve('src/components/UI'),
      views: resolve('src/views'),
      store: resolve('src/store'),
      mixin: resolve('src/mixin'),
      api: resolve('src/api'),
      assets: resolve('src/assets'),
      config: resolve('src/config'),
      plugins: resolve('src/plugins'),
      service: resolve('src/service'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre',
        include: resolve('src'),
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: resolve('src'),
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
  ],
}
