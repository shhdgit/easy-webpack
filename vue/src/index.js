import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import storeConfig from 'store'
import router from 'config/routes'
import HttpPlugin from 'plugins/http'
import App from 'components/layout/Layout'
import 'assets/icon/iconfont.js'
import 'assets/styles/reset.styl'
import 'assets/styles/functional.styl'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(HttpPlugin)

const store = new Vuex.Store(storeConfig)
new Vue({
  ...App,
  router,
  store,
}).$mount('#app')
