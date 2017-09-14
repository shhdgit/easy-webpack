const path = require('path')

const dir = {}

dir.root = path.resolve(__dirname, '..')
dir.src = path.resolve(dir.root, 'src')
dir.components = path.resolve(dir.src, 'components')
dir.pages = path.resolve(dir.src, 'pages')

module.exports = dir
