import Vue from 'vue'
import Layout from 'components/layout/Layout'

import './index.styl'

new Vue({
  ...Layout,
  router,
}).$mount('#app')
