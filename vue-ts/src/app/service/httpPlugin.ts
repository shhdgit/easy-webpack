import axios from 'axios'

const httpPlugin: any = {}

httpPlugin.install = function install(Vue, config = {}) {
  if (httpPlugin.install.installed) {
    return
  }
  httpPlugin.install.installed = true

  const vueInstance = Vue

  Object.assign(axios.defaults, config)

  vueInstance.$http = axios

  vueInstance.prototype.$http = axios
}

if ((window as any).Vue) {
  (window as any).Vue.use(httpPlugin)
}

export default httpPlugin
