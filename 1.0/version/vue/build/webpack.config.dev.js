const merge = require( 'webpack-merge' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const BASE_CONFIG = require( './webpack.config.base' );
const PROJECT_ROOT = require( './config' ).PROJECT_ROOT;

module.exports = merge( BASE_CONFIG, {
  output: {
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new ExtractTextPlugin( 'asset/style/[name].css' ),
    new HtmlWebpackPlugin({
      filename: '../../index.html',
      template: `${ PROJECT_ROOT }/src/dev.html`,
      inject: true
    })
  ]
} );
