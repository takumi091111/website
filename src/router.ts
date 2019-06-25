import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      meta: {
        title: null
      },
      component: () => import(/* webpackChunkName: "Home" */'~/pages/Home.vue')
    },
    {
      name: 'blog',
      path: '/blog',
      meta: {
        title: 'Blog'
      },
      component: () => import(/* webpackChunkName: "Blog" */'~/pages/Blog.vue')
    },
    {
      name: 'entry',
      path: '/blog/:id',
      props: true,
      component: () => import(/* webpackChunkName: "BlogEntry" */'~/pages/BlogEntry.vue')
    },
    {
      name: 'about',
      path: '/about',
      meta: {
        title: 'About'
      },
      component: () => import(/* webpackChunkName: "About" */'~/pages/About.vue')
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    }
  ],
  scrollBehavior (_to, _from, _savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.afterEach((to, _from) => {
  if (to.meta.title !== null) {
    document.title = `Asamac - ${to.meta.title}`
  } else {
    document.title = 'Asamac'
  }
})

export default router
