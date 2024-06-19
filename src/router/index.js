import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '果籽',
      }
    },
    {
      path: '/product',
      name: 'product',
      component: () => import(/* webpackChunkName: "product" */ '@/views/ProductView.vue'),
      meta: {
        title: '商品',
      }
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('@/views/ActivityView.vue'),
      meta: {
        title: '近期活動',
      }
    },
    {
      path: '/activity/:activityId',
      name: 'activitypage',
      component: () => import('@/views/ActivityPage.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/GameView.vue'),
      meta: {
        title: '食農教育',
      }
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: '關於我們',
      }
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: () => import('@/views/ContactusView.vue'),
      meta: {
        title: '聯絡我們',
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue'),
      meta: {
        title: '會員',
      }
    },
    {
      path: '/heart',
      name: 'heart',
      component: () => import('@/views/HeartView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue'),
      meta: {
        title: '購物車',
      }
    },
    {
      path: '/ProductPage/:productId',
      name: 'ProductPage',
      component: () => import(/* webpackChunkName: "ProductPage" */ '@/views/ProductPage.vue')
    },
    {
      path: '/userlayout',
      name: 'UserLayout',
      component: () => import('@/components/UserLayout.vue'),
      children: [
        {
          path: 'userdata',
          name: 'UserData',
          component: () => import('@/views/UserData.vue'),
        },
        {
          path: 'userfavorite',
          name: 'UserFavorite',
          component: () => import('@/views/UserFavorite.vue'),
        },
        {
          path: 'userorder',
          name: 'UserOrder',
          component: () => import('@/views/UserOrder.vue'),
        },
        {
          path: 'userorder/orderdetail:orderId',
          name: 'OrderDetail',
          component: () => import('@/views/OrderDetail.vue'),
        },
        {
          path: 'useractivity',
          name: 'UserActivity',
          component: () => import('@/views/UserActivity.vue'),
        },
        {
          path: 'useractivity/activitydetail:activityId',
          name: 'ActivityDetail',
          component: () => import('@/views/ActivityDetail.vue'),
        }
      ]
    },
    {
      path: '/signuppage/:signupId',
      name: 'signuppage',
      component: () => import('@/views/SignupPage.vue'),
      meta: {
        title: '活動報名',
      }
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: () => import('@/views/Shoppingcart.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/SvgAnimation',
      name: 'SvgAnimation',
      component: () => import('../components/SvgAnimation.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // 始终滚动到顶部
    if (to.name == "UserLayout" || to.name == "UserData" || to.name == "UserFavorite" || to.name == "UserOrder" || to.name == "OrderDetail" || to.name == "UserActivity" || to.name == "ActivityDetail") {
      return {};
    } else {
      return { top: 0 }
    }


  },
})

router.beforeEach(async (to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
