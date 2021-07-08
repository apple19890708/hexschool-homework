import {
  createRouter, createWebHashHistory,
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue'),
  }, {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../views/Product.vue'),
  },
  {
    meta: {
      business: true,
    },
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    meta: {
      requiresAuth: true,
    },
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'DashboardProduct',
        component: () => import('../views/DashboardProduct.vue'),
      },
      {
        path: 'orders',
        name: 'DashboardOrders',
        component: () => import('../views/DashboardOrders.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  console.log('123', to.matched)
  const isBusinessPage = to.matched.some((record) => record.meta.business)
  if (isBusinessPage) {
    console.log('透過meta判斷 我在購物車')
  }
  next()
})

export default router
