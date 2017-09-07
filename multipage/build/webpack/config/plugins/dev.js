const webpack = require('webpack')
const plugins = require('./base.js')

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
]

devPlugins.forEach(plugin => {
  plugins.push(plugin)
})

module.exports = plugins
