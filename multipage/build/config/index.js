const path = require('path')
const glob = require('glob')

const dir = {}

dir.root = path.resolve(__dirname, '../../')
dir.src = path.resolve(dir.root, './src')
dir.public = path.resolve(dir.root, './public')
dir.manifest = path.resolve(dir.root, './manifest')
dir.pages = path.resolve(dir.src, './pages')

const IGblo = new glob.Glob('*/*', {
  cwd: dir.pages,
  sync: true,
})
const pages = IGblo.found

module.exports = {
  dir,
  pages,
  build: {
    env: 'production',
    outputIndex: path.resolve(dir.public, './index.html'),
    assetsRoot: dir.public,
    assetsSubDirectory: 'dist',
    assetsPublicPath: '/',
    productionSouceMap: false,
  },
  dev: {
    env: 'development',
    port: 8081,
    autoOpenBrowser: false,
    assetsSubDirectory: 'dist',
    assetsPublicPath: '/',
    proxyTable: {
    },
  },
}
