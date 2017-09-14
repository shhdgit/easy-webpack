import Vue from 'vue'
import Layout from 'components/layout/Layout'
import router from './router'

import './index.styl'

new Vue({
  ...Layout,
  router,
}).$mount('#app')
