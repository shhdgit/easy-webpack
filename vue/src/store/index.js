import Vuex from 'vuex'
import Vuex from 'vuex'
import app from './module/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
  },
})

export default store
