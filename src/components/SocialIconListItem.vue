<template>
  <a :href="url" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <Icon :name="iconPath" scale="2.5" />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import 'vue-awesome/icons/brands/discord'
import 'vue-awesome/icons/brands/twitter'
import 'vue-awesome/icons/brands/github'
import Icon from 'vue-awesome/components/Icon.vue'

export default Vue.extend({
  components: {
    Icon
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    iconPath(): string {
      return `brands/${this.icon}`
    }
  },
  methods: {
    onMouseEnter() {
      this.$emit('mouseenter')
    },
    onMouseLeave() {
      this.$emit('mouseleave')
    }
  }
})
</script>

<style lang="postcss" scoped>
a {
  &:hover {
    opacity: 0.5;
  }

  color: var(--color_base);
  font-size: 2.5em;
  text-decoration: none;
  padding: 0 20px;
  transition: 0.3s opacity;

  @media (max-width: 480px) {
    font-size: 2.3em;
  }
}
</style>
