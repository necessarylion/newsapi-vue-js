import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import DetailPage from '@/views/DetailPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/detail/:slug',
    name: 'Detail',
    component: DetailPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
