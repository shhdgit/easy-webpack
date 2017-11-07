const os = require('os')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const baseConfig = require('./webpack.base.config')

function resolve(filepath) {
  return path.resolve(__dirname, '..', filepath)
}

module.exports = merge(baseConfig, {
  output: {
    filename: 'dist/js/[name].[chunkhash:8].js',
    chunkFilename: 'dist/js/[name].chunk.[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: resolve('src'),
        options: {
          extractCSS: true,
        },
      },
      {
        test: /\.(css|styl)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'stylus-loader',
            },
          ]
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'dist/styles/[name].[contenthash:8].css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      filename: resolve('public/index.html'),
      template: resolve('src/index.html'),
      inject: true,
      chunksSortMode: 'dependency',
    }),
    new UglifyJsPlugin({
      parallel: {
        cache: true,
        workers: os.cpus().length,
      },
    }),
    // TODOs: completed pre-render
    // ***** pre-render *****
    // new PrerenderSpaPlugin(
    //   resolve('public'),
    //   ['/', '/404']
    // ),
    // ***** service worker *****
    new SWPrecachePlugin({
      cacheId: 'vue-app',
      filename: 'service-worker.js',
      minify: true,
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst'
        },
        // {
        //   urlPattern: /\/(top|new|show|ask|jobs)/,
        //   handler: 'networkFirst'
        // },
      ]
    })
  ],
  externals: {
    vue: 'Vue',
    vuex: 'Vuex',
    'vue-router': 'VueRouter',
    axios: 'axios',
  },
})
