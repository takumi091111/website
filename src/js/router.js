import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('../pages/Home')
    },
    {
      name: 'blog',
      path: '/blog',
      component: () => import('../pages/Blog')
    },
    {
      name: 'entry',
      path: '/blog/:id',
      component: () => import('../pages/BlogEntry')
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('../pages/About')
    }
  ]
})

export default router
