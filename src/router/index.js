import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/WorkView.vue')
    },
    {
      path: '/life',
      name: 'life',
      component: () => import('../views/LifeView.vue')
    }
  ]
})

export default router
