import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }, {
    path: '/select',
    name: 'select',
    component: () => import('../views/SelectView.vue')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/DetailView.vue')
  }, {
    path: '/map',
    name: 'Map',
    component: () => import('../views/MapView.vue')
  }, {
    path: '/desc/:id',
    name: 'Desc',
    component: () => import('../views/DescView.vue')
  }, {
    path: '/scale',
    name: 'Scale',
    component: () => import('../views/ScaleView.vue')
  }]
})

export default router
