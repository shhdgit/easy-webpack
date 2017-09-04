const config = require('../../../config')

const rules = [
  {
    test: /\.(pug|jade)/,
    include: config.dir.src,
    use: 'pug-loader',
  },
  {
    test: /\.js$/,
    include: config.dir.src,
    use: 'babel-loader',
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    query: {
      limit: 10000,
      name: 'commons/images/[name].[contenthash:8].[ext]',
    },
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    query: {
      name: 'commons/fonts/[name].[contenthash:8].[ext]',
    },
  },
]

module.exports = rules
