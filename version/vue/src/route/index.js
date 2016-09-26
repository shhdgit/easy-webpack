// CDN Version. NPM Version need add Vue.ues( VueRouter )
import VueRouter from 'vue-router'

let router = new VueRouter()

router.map( {} )

router.redirect( {
  '*': '/'
} )

export router
