<template>
  <Layout>
    <Header :links="links" />
    <transition>
      <router-view />
    </transition>
    <Footer />
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import links from '~/data/links'
import Layout from '~/components/Layout.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Layout,
    Header,
    Footer
  },
  data() {
    return {
      links
    }
  }
})
</script>

<style lang="postcss">
html,
body {
  color: var(--color_base);
  background-color: var(--background-color_base);
  border-color: var(--border-color_base);
  font-family: 'M PLUS Rounded 1c', -apple-system, BlinkMacSystemFont, YuGothic,
    Meiryo, sans-serif;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'palt' 1;

  @media (max-width: 480px) {
    font-size: 0.95em;
  }
}

h1,
h2,
h3,
h4,
p,
span,
a,
li {
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
  transform: rotate(0.028deg);
}
</style>
