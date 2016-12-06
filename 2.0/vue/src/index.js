import Vue from 'vue'
import Vuex from 'vuex'
import {sync} from 'vuex-router-sync'
import App from 'view/App'

Vue.use(Vuex)

new Vue({
  ...App
}).$mount('#app')
