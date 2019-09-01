import Vue from 'vue'
import Router from 'vue-router'
import auth from './auth'
import Home from '../views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

router.beforeEach(auth)

export default router
