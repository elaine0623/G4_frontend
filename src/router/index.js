import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component: () => import(/* webpackChunkName: "product" */ '@/views/ProductView.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('@/views/ActivityView.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/GameView.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: () => import('@/views/ContactusView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue')
    },
    {
      path: '/heart',
      name: 'heart',
      component: () => import('@/views/HeartView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue')
    },
    {
      path:'/ProductPage/:productId',
      name:'ProductPage',
      component: () => import(/* webpackChunkName: "ProductPage" */ '@/views/ProductPage.vue')
    },
    {
      path: '/ProductPage/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ProductPage/activity',
      name: 'activity',
      component: () => import('@/views/ActivityView.vue')
    },
    {
      path:'/ActivityPage/:activityId',
      name:'ActivityPage',
      component: () => import('@/views/ActivityPage.vue')
    },
    {
      path: '/ActivityPage/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ActivityPage/activity',
      name: 'activity',
      component: () => import('@/views/ActivityView.vue')
    },
    {
      path:'/UserLayout',
      path:'/userlayout',
      name:'UserLayout',
      component:() => import('@/components/UserLayout.vue'),
      children: [
        {
          path:'userdata',
          name:'UserData',
          component:() => import('@/views/UserData.vue'),
        },
        {
          path:'userfavorite',
          name:'UserFavorite',
          component:() => import('@/views/UserFavorite.vue'),
        },
        {
          path:'userorder',
          name:'UserOrder',
          component:() => import('@/views/UserOrder.vue'),
        },
        {
          path:'useractivity',
          name:'UserActivity',
          component:() => import('@/views/UserActivity.vue'),
        }
      ]
    }
  ]
})

export default router
