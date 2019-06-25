<template>
  <div :class="pageClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    centered: {
      type: Boolean,
      required: false,
      default: false
    },
    vertical: {
      type: Boolean,
      required: false,
      default: false
    },
    horizontal: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    pageClass (): string {
      const pageClass = ['page']
      if (this.centered) {
        pageClass.push('flex')
        if (this.vertical) pageClass.push('v-centered')
        if (this.horizontal) pageClass.push('h-centered')
      }
      return pageClass.join(' ')
    }
  }
})
</script>

<style lang="postcss" scoped>
.page {
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  @media (max-width: 480px) {
    padding-top: 50px;
  }
}

.flex {
  display: flex;
}

.h-centered {
  justify-content: center;
}

.v-centered {
  align-items: center;
}
</style>

