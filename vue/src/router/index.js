import VueRouter from 'vue-router'

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    let position = savedPosition

    if (!position) {
      position = { x: 0, y: 0 }
    }

    return position
  },
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import(/* webpackChunkName: "1screnn" */ 'views/home'),
    },
    {
      name: '404',
      path: '/404',
      component: () => import(/* webpackChunkName: "1screnn" */ 'views/404'),
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
})

export default router
