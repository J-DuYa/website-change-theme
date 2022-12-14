import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/home/index.vue')
        }
      ]
    }
  ]
})

export default router
