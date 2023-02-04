import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决跳转重复路由导致的报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/category',
    component: () => import('@/views/category/Category.vue')
  },
  {
    path: '/cart',
    component: () => import('@/views/cart/Cart.vue')
  },
  {
    path: '/my',
    component: () => import('@/views/my/My.vue')
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/detail/Detail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
