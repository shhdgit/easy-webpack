const path = require('path')

const dir = {}

dir.root = path.resolve(__dirname, '..')
dir.src = path.resolve(dir.root, 'src')
dir.public = path.resolve(dir.root, 'public')
dir.api = path.resolve(dir.src, 'api')
dir.components = path.resolve(dir.src, 'components')
dir.layout = path.resolve(dir.src, 'layout')
dir.mixins = path.resolve(dir.src, 'mixins')
dir.views = path.resolve(dir.src, 'views')
dir.service = path.resolve(dir.src, 'service')

module.exports = dir
