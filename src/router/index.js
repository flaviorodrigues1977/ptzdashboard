import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ModoEdit',
    name: 'Modo Edit',
    component: () => import(/* webpackChunkName: "modoedit" */ '../views/ModoEdit.vue')
  },
  {
    path: '/HelpCenter',
    name: 'Help Center',
    component: () => import(/* webpackChunkName: "helpcenter" */ '../views/HelpCenter.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
