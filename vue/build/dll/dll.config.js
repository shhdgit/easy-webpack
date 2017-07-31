const webpack = require('webpack')

module.exports = {
  entry: {
    vendor1: ['vue'],
    vendor2: ['vue-router', 'axios', 'vuex'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
}
