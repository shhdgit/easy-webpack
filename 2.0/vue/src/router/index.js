import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
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
