<template>
  <section class="entry-view-comment">
    <div id="disqus_thread" />
  </section>
</template>

<script lang="ts">
/* eslint @typescript-eslint/no-explicit-any: 0 */
/* eslint @typescript-eslint/camelcase: 0 */

import Vue from 'vue'
import window from '~/interfaces/Window'

export default Vue.extend({
  props: {
    shortname: {
      type: String,
      required: true
    },
    identifier: {
      type: String || null,
      required: false,
      default: void 0
    },
    url: {
      type: String || null,
      required: false,
      default: void 0
    },
    title: {
      type: String || null,
      required: false,
      default: void 0
    }
  },
  mounted() {
    if (window.DISQUS) {
      this.reset(window.DISQUS)
      return
    }
    this.init()
  },
  methods: {
    reset(disqus: any) {
      const self = this
      disqus.reset({
        reload: true,
        config: function() {
          self.setBaseConfig(this)
        }
      })
    },
    init() {
      const self = this
      window.disqus_config = function() {
        self.setBaseConfig(this)
      }
      setTimeout(() => {
        let d = document,
          s = d.createElement('script')
        s.setAttribute('id', 'embed-disqus')
        s.setAttribute('data-timestamp', new Date().getTime().toString())
        s.type = 'text/javascript'
        s.async = true
        s.src = `//${this.shortname}.disqus.com/embed.js`
        ;(d.head || d.body).appendChild(s)
      }, 0)
    },
    setBaseConfig(disqusConfig: any) {
      disqusConfig.page.identifier =
        this.identifier || this.$route.path || window.location.pathname
      disqusConfig.page.url = this.url || this.$el.baseURI
      if (this.title) {
        disqusConfig.page.title = this.title
      }
    }
  }
})
</script>

<style lang="postcss" scoped>
#disqus_thread {
  padding: 15px 0 0 0;
}
</style>
