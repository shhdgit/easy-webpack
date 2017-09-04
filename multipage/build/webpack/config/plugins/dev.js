const plugins = require('./base.js')

const devPlugins = []

devPlugins.forEach(plugin => {
  plugins.push(plugin)
})

module.exports = plugins
