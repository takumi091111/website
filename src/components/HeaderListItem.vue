<template>
  <li>
    <router-link :to="link.url" @click.native="onClick">{{ link.title }}</router-link>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Link from '~/interfaces/Link'

export default Vue.extend({
  props: {
    link: {
      type: Object as PropType<Link>,
      required: true
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
})
</script>

<style lang="postcss" scoped>
li {
  &:hover {
    color: var(--color_hover);
    background-color: var(--background-color_hover);
  }
  width: 130px;
  height: 40px;
  border-radius: 15px;
  transition: all 0.1s;
  & a {
    color: inherit;
    font-size: 1.4em;
    font-weight: 800;
    display: block;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
  }
}
</style>
