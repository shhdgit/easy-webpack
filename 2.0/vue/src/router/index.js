import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => System.import('view/home')
    },
    {
      name: '404',
      path: '*',
      component: () => System.import('view/404')
    }
  ]
})
