<template>
  <Layout>
    <Header :links="links"></Header>
    <transition>
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import links from '~/data/links'
import Layout from '~/components/Layout.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  data () {
    return {
      links
    }
  },
  components: {
    Layout,
    Header,
    Footer
  }
})
</script>

<style lang="postcss">
html, body {
  color: var(--color_base);
  background-color: var(--background-color_base);
  border-color: var(--border-color_base);
  font-family: Rounded-Mplus-1c, -apple-system, BlinkMacSystemFont, YuGothic, Meiryo, sans-serif;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'palt' 1;
}
</style>
