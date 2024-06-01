import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import header from '@/components/header.vue'
import aboutus from '@/views/aboutus.vue'
import contactus from '@/views/contactus.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('@/views/AboutView.vue')
    // },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/product.vue')
    },
    // {
    //   path: '/index_banner',
    //   name: 'index_banner',
    //   component: () => import('@/views/index_banner.vue')
    // },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('@/views/activity.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/game.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: contactus
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/Test.vue')
    }
  ]
})

export default router
