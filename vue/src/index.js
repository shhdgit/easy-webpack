import Vue from 'vue'
import vuexStore from 'store'
import router from 'config/router'
import filters from 'service/filter'
import plugins from 'plugins'
import Layout from 'components/layout/Layout'

import 'assets/icon/iconfont.js'
import 'assets/styles/reset.styl'
import 'assets/styles/functional.styl'

Object.keys(plugins).forEach(key => Vue.use(plugins[key]))
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

new Vue({
  ...Layout,
  router,
  store: vuexStore,
}).$mount('#app')
