import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const LoginView = () => import('views/LoginView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
      let position = savedPosition

      if (!position) {
        position = { x: 0, y: 0 }
      }

      return position
    },
    routes: [
      { path: '/login', component: LoginView },
      { path: '/', redirect: '/login' },
    ]
  })
}
