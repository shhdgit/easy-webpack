const path = require('path')
const config = require('../../config')

let entries = {}

config.pages.forEach(page => {
  entries[page] = path.resolve(config.dir.pages, page, 'index')

  if (process.env.NODE_ENV === 'development') {
    entries[page] = [`${config.dir.root}/build/hot.js`].concat(entries[page])
  }
})

module.exports = entries
