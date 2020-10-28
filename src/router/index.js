import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
       path: '/',
       redirect: '/home'
    },
    {
      path: '/home',
      // redirect: '/',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/program',
      component: () => import('@/views/program.vue'),
    },

    {
      path: '/transit',
      component: () => import('@/views/transit.vue'),
      children: [
        {
          path: '/transit/wisdom',
          component: () => import('@/views/wisdom.vue')
        },
        {
          path: '/transit/yipo',
          component: () => import('@/views/yipo.vue')
        },
        {
          path: '/transit/mirror',
          component: () => import('@/views/mirror.vue')
        },
        {
          path: '/transit/warning',
          component: () => import('@/views/warning.vue')
        },
        {
          path: '/transit/intercom',
          component: () => import('@/views/intercom.vue')
        },
        {
          path: '/transit/mobileye',
          component: () => import('@/views/mobileye.vue')
        }
      ]
    },
    {
      path: '/integrated',
      component: () => import('@/views/integrated.vue'),
    },


    {
      path: '/about',
      component: () => import('@/views/about.vue'),
    },
    {
      path: '/join',
      component: () => import('@/views/join.vue'),
    },
    

  ],
  scrollBehavior (to, from, savedPosition){
    return { x:0, y:0}
  }
})