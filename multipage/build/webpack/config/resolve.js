const path = require('path')
const config = require('../../config')

const resolve = {
  extensions: ['.js'],
  alias: {
    '@': config.dir.root,
    src: config.dir.src,
    pages: config.dir.pages,
    assets: path.resolve(config.dir.src, './assets'),
    components: path.resolve(config.dir.src, './components'),
    config: path.resolve(config.dir.src, './config'),
    layout: path.resolve(config.dir.src, './layout'),
    libs: path.resolve(config.dir.src, './libs'),
  },
}

module.exports = resolve
