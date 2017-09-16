import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    modules: {
      app,
    },
  })
}
