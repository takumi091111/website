import Vue, { VueConstructor } from 'vue'
import VueRouter from 'vue-router'
import { Position } from 'vue-router/types/router'

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
      component: (): Promise<VueConstructor> =>
        import(/* webpackChunkName: "Home" */ '~/pages/Home.vue').then(
          (m): VueConstructor => m.default
        )
    },
    {
      name: 'blog',
      path: '/blog',
      meta: {
        title: 'Blog'
      },
      component: (): Promise<VueConstructor> =>
        import(/* webpackChunkName: "Blog" */ '~/pages/Blog.vue').then(
          (m): VueConstructor => m.default
        )
    },
    {
      name: 'entry',
      path: '/blog/:id',
      props: true,
      component: (): Promise<VueConstructor> =>
        import(
          /* webpackChunkName: "BlogEntry" */ '~/pages/BlogEntry.vue'
        ).then((m): VueConstructor => m.default)
    },
    {
      name: 'about',
      path: '/about',
      meta: {
        title: 'About'
      },
      component: (): Promise<VueConstructor> =>
        import(/* webpackChunkName: "About" */ '~/pages/About.vue').then(
          (m): VueConstructor => m.default
        )
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    }
  ],
  scrollBehavior(_to, _from, _savedPosition): Position {
    return { x: 0, y: 0 }
  }
})

router.afterEach((to, _from): void => {
  if (to.meta.title !== null) {
    document.title = `Asamac - ${to.meta.title}`
  } else {
    document.title = 'Asamac'
  }
})

export default router
