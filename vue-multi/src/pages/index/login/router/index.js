import Vue from 'vue'
import Router from 'vue-router'
import Index from '../index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '',
      component: Index,
    },
  ],
})
