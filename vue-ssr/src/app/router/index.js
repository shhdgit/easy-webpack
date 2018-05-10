import Vue from 'vue'
import VueRouter from 'vue-router'

// first screen in app.js
import LoginView from '@/views/LoginView'
// route-level code splitting, lazy load
// const = () => import(/* webpackChunkName: "rest" */ '@/views/')

Vue.use(VueRouter)

export function createRouter() {
  return new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
      if (!savedPosition) {
        savedPosition = { x: 0, y: 0 }
      }

      return savedPosition
    },
    routes: [
      { path: '/login', component: LoginView },
      { path: '/', redirect: '/login' },
    ],
  })
}
