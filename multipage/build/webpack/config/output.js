const config = require('../../config')

const originOutput = {
  path: config.dir.public,
}
const prodOutput = {
  publicPath: config.build.assetsPublicPath,
  filename: '[name]/index.[chunkhash:8].js',
  chunkFilename: '[name]/chunk.[chunkhash:8].js',
}
const devOutput = {
  publicPath: config.dev.assetsPublicPath,
  filename: '[name]/index.js',
  chunkFilename: '[name]/chunk.js',
}

module.exports = Object.assign(originOutput, process.env.NODE_ENV === 'production' ? prodOutput : devOutput)
