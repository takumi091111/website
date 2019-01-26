import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterPrefetch from 'vue-router-prefetch'

Vue.use(VueRouter)
Vue.use(RouterPrefetch)

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
    },
    {
      path: '*',
      redirect: {
        path: '/'
      }
    }
  ],
  scrollBehavior (_to, _from, _savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
