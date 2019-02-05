import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterPrefetch from 'vue-router-prefetch'
import Home from '../pages/Home'

Vue.use(VueRouter)
Vue.use(RouterPrefetch)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'blog',
      path: '/blog',
      meta: { title: 'Blog' },
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
      meta: { title: 'About' },
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

router.afterEach((to, _from) => {
  if (to.meta && to.meta.title) {
    document.title = `Asamac - ${to.meta.title}`
  } else {
    document.title = 'Asamac'
  }
})

export default router
