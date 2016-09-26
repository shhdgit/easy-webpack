const webpack = require( 'webpack' )
const merge = require( 'webpack-merge' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const BASE_CONFIG = require( './webpack.config.base' )
const PROJECT_ROOT = require( './config' ).PROJECT_ROOT

module.exports = merge( BASE_CONFIG, {
  output: {
    filename: '[name].[chunkhash:8].js',
    chunkFilename: 'chunk/[name].[chunkhash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin( {
      filename: '../../index.html',
      template: `${ PROJECT_ROOT }/src/prod.html`,
      inject: true
    } ),
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } ),
    new webpack.DefinePlugin( {
      'process.env': {
        'NODE_ENV': '"production"'
      }
    } )
  ]
} )
