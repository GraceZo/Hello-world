import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/Films.vue'
import Details from '@/views/Details.vue'
import Cinemas from '@/views/Cinemas.vue'
import City from '@/views/City.vue'
import Search from '@/views/Search.vue'
// import Center from '@/views/Center.vue'
// import Order from '@/views/Order.vue'
import Login from '@/views/Login.vue'
import NowPlaying from '@/views/films/NowPlaying.vue'
import ComingSoon from '@/views/films/ComingSoon.vue'

Vue.use(VueRouter) // 注册路由插件

// 配置表
const routes = [
  {
    path: '/films',
    component: Films,

    // 嵌套路由
    children: [
      {
        path: '/films/nowplaying',
        component: NowPlaying
      },
      {
        path: '/films/comingsoon',
        component: ComingSoon
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    name: 'graceDetails',
    path: '/details/:id', // 动态二级路由
    component: Details
  },
  {
    path: '/cinemas',
    component: Cinemas
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/cinemas/search',
    component: Search
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/center',
    component: () => import('@/views/Center'), // 懒加载
    meta: {
      isGraceRequired: true
    }
  },
  {
    path: '/order',
    component: () => import('@/views/Order'),
    meta: {
      isGraceRequired: true
    }
  },
  // 重定向
  {
    path: '*',
    redirect: '/films'
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

// 全局拦截 守卫/拦截
router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.meta.isGraceRequired) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
