import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import header from '@/components/header.vue'
import aboutus from '@/views/aboutus.vue'
import contactus from '@/views/contactus.vue'
import cart from '@/views/cart.vue'
import heart from '@/views/heart.vue'
import user from '@/views/user.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/heart',
      name: 'heart',
      component: heart
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})

export default router
