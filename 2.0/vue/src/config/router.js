import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  scrollBehaviors (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      name: 'home',
      path: '/',
      component: r => require.ensure([], () => r(require('views/home')), '1st-screen')
    },
    {
      name: '404',
      path: '*',
      component: r => require.ensure([], () => r(require('views/404')), '404')
    }
  ]
})

export default router
