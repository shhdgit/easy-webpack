// CDN Version. NPM Version need add Vue.ues( VueRouter )
import VueRouter from 'vue-router'

const router = new VueRouter( {
  routes: [
    {
      name: 'home',
      path: '/',
      component: resolve => require( [ 'view/home' ], resolve )
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
} )

export default router

