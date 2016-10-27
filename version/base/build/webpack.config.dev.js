const merge = require( 'webpack-merge' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const BASE_CONFIG = require( './webpack.config.base' );
const PROJECT_ROOT = require( './config' ).PROJECT_ROOT;

module.exports = merge( BASE_CONFIG, {
  output: {
    publicPath: ''
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../../index.html',
      template: `${ PROJECT_ROOT }/src/dev.html`,
      inject: true
    })
  ]
} );
