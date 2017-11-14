import Vue from 'vue'
import VueRouter from 'vue-router'

// first screen in index.js
import HomeView from '@/views/HomeView.vue'
// lazy load
const NotfoundView = () => import(/* webpackChunkName: "rest" */ '@/views/NotfoundView.vue')

if (process.env.NODE_ENV === 'development') {
  Vue.use(VueRouter)
}

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (!savedPosition) {
      savedPosition = { x: 0, y: 0 }
    }

    return savedPosition
  },
  routes: [
    { name: 'home', path: '/', component: HomeView },
    { name: '404', path: '/404', component: NotfoundView },
    { path: '*', redirect: '/404' },
  ],
})

export default router
