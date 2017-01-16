import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import router from 'config/router'
import store from 'store'
import App from 'components/App'

sync(store, router)
new Vue({
  ...App,
  router,
  store
}).$mount('#app')
