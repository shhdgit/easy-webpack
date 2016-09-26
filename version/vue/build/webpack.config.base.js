const PROJECT_ROOT = require( './config' ).PROJECT_ROOT

module.exports = {
  entry: {
    index: './src/index'
  },
  output: {
    path: `${ PROJECT_ROOT }/public/dist`,
    publicPath: './public/dist/',
    filename: '[name].js',
    chunkFilename: 'chunk/[name].js'
  },
  resolve: {
    extensions: [ '', '.js', '.vue' ],
    alias: {
      'vuex-actions': `${ PROJECT_ROOT }/src/vuex/action`,
      'component': `${ PROJECT_ROOT }/src/component`,
      'view': `${ PROJECT_ROOT }/src/view`,
      'public': `${ PROJECT_ROOT }/public`
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: `${ PROJECT_ROOT }/src`,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue',
        include: [
          `${ PROJECT_ROOT }/src/`
        ]
      }
    ]
  },
  externals: {}
}
