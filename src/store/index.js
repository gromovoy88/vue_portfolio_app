import Vue from 'vue'
import Vuex from 'vuex'
import porfolio from './portfolio'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    porfolio
  }
})
