import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {sync} from 'vuex-router-sync'
import storeConfig from 'store'
import router from 'config/routes'
import HttpPlugin from 'plugins/http'
import App from 'components/App'
import 'assets/icon/iconfont.js'
import 'assets/styles/reset.css'
import 'assets/styles/functional.less'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(HttpPlugin)

const store = new Vuex.Store(storeConfig)
sync(store, router)
new Vue({
  ...App,
  router,
  store,
}).$mount('#app')
