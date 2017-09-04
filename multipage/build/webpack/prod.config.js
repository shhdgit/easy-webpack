module.exports = {
  entry: require('./config/entry.js'),
  output: require('./config/output.js'),
  module: require('./config/module/prod.js'),
  resolve: require('./config/resolve.js'),
  plugins: require('./config/plugins/prod.js'),
}
