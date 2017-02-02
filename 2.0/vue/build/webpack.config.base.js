const path = require('path')
const ROOT = path.resolve(__dirname, '../')
const webpack = require('webpack')
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
      'components': `${ROOT}/src/components`,
      'views': `${ROOT}/src/components/views`,
      'store': `${ROOT}/src/store`,
      'mixins': `${ROOT}/src/mixins`,
      'api': `${ROOT}/src/api`,
      'assets': `${ROOT}/src/assets`,
      'config': `${ROOT}/src/config`,
      'service': `${ROOT}/src/service`
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
      template: `${ROOT}/src/index.dll.html`,
      inject: true
    }),
    new webpack.DllReferencePlugin({
      context: `${ROOT}/config`,
      manifest: require('../config/vendor1.manifest.json')
    }),
    new webpack.DllReferencePlugin({
      context: `${ROOT}/config`,
      manifest: require('../config/vendor2.manifest.json')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}
