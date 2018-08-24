// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { store } from './store'
import router from './router'
import firebase from 'firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    var config = {
      apiKey: 'AIzaSyArfwYlGh2L3P9dQrLz0acM4dIzEsIo_n8',
      authDomain: 'yaroslav-hromovyi-portfolio.firebaseapp.com',
      databaseURL: 'https://yaroslav-hromovyi-portfolio.firebaseio.com',
      projectId: 'yaroslav-hromovyi-portfolio',
      storageBucket: 'yaroslav-hromovyi-portfolio.appspot.com',
      messagingSenderId: '201624409075'
    }
    firebase.initializeApp(config)
    this.$store.dispatch('fetchPortfolio')
  }
})
