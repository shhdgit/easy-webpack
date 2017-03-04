import axios from 'axios'

const httpPlugin = {}

httpPlugin.install = function (Vue, config = {}) {
  if (httpPlugin.install.installed) return
  httpPlugin.install.installed = true

  Object.assign(axios.defaults, config)

  Vue.$http = axios

  Vue.prototype.$http = axios
}

if (window.Vue) {
  window.Vue.use(httpPlugin)
}

export default httpPlugin
