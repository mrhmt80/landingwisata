import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Wisata.vue'
import FoodDetail from '../views/WisataDetail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Wisata',
    name: 'Wisata',
    component: Foods
  },
  {
    path: '/Wisata/:id',
    name: 'WisataDetail',
    component: FoodDetail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
