import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Design from '@/components/Portfolio/Design'
import Sites from '@/components/Portfolio/Sites'
import Other from '@/components/Portfolio/Other'
import AddWork from '@/components/Portfolio/AddWork'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio/design',
      name: 'Design',
      component: Design
    },
    {
      path: '/portfolio/sites',
      name: 'Sites',
      component: Sites
    },
    {
      path: '/portfolio/other',
      name: 'Other',
      component: Other
    },
    {
      path: '/portfolio/add',
      name: 'Add Work',
      component: AddWork
    }
  ],
  mode: 'history'
})
