const glob = require('glob')
const dir = require('./dir_alias')

exports.entries = function () {
  const options = {
    cwd: dir.pages, // 在 pages 目录里找
    sync: true, // 这里不能异步，只能同步
  }
  const globInstance = new glob.Glob('!(_)*/!(_)*', options) // 考虑到多个页面共用 HTML 等资源的情况，跳过以'_'开头的目录

  return globInstance.found // 一个数组，形如 ['index/index', 'index/login', 'alert/index']
}
