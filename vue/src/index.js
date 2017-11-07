import Vue from 'vue'

import vuexStore from '@/store'
import router from '@/router'
import App from '@/App'
import httpPlugin from 'service/httpPlugin'

import './assets/icons/iconfont.js'
import './assets/styles/reset.styl'
import './assets/styles/functional.styl'

Vue.use(httpPlugin)

const app = new Vue({
  ...App,
  router,
  store: vuexStore,
})

document.addEventListener('DOMContentLoaded', () => {
  app.$mount('#app')
})

// service worker
if (window.location.protocol === 'https:' && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}
