import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import { router } from './route'
import App from './view/App'

if ( process.env.NODE_ENV !== 'production' ) {
  require( '../index.html' )
}

sync( store, router )
router.start( App, '#app' )
