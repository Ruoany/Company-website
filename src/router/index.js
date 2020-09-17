import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/program',
      component: () => import('@/views/program.vue'),
    //   redirect: '/program/wisdom' ,
    //   children: [
    //     {
    //       path: '/program/wisdom',
    //       component: () => import('@/views/wisdom.vue')
    //     },
    //     {
    //       path: '/program/yipo',
    //       component: () => import('@/views/yipo.vue')
    //     },
    //     {
    //       path: '/program/mirror',
    //       component: () => import('@/views/mirror.vue')
    //     },
    //     {
    //       path: '/program/warning',
    //       component: () => import('@/views/warning.vue')
    //     },
    //     {
    //       path: '/program/intercom',
    //       component: () => import('@/views/intercom.vue')
    //     },
    //     {
    //       path: '/program/mobileye',
    //       component: () => import('@/views/mobileye.vue')
    //     },
    //     {
    //       path: '/program/integrated',
    //       component: () => import('@/views/integrated.vue'),
    //     },
    //   ]
    },
    {
      path: '/about',
      component: () => import('@/views/about.vue'),
    },
    {
      path: '/join',
      component: () => import('@/views/join.vue'),
    },
    

  ]
})