const path = require('path')
const config = require('../../config')

let entries = {}

config.pages.forEach(page => {
  entries[page] = path.resolve(config.dir.pages, page, 'index')
})

module.exports = entries
