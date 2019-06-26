<template>
  <button @click="onClick">
    <MenuIcon v-if="!status" w="40px" h="40px" root-class="icon" />
    <CloseIcon v-if="status" w="40px" h="40px" root-class="icon" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import MenuIcon from 'vue-ionicons/dist/ios-menu.vue'
import CloseIcon from 'vue-ionicons/dist/ios-close.vue'

export default Vue.extend({
  components: {
    MenuIcon,
    CloseIcon
  },
  props: {
    status: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit('menu-button-click')
    }
  }
})
</script>

<style lang="postcss" scoped>
button {
  background-color: transparent;
  border: none;
  outline: none;
}
.icon {
  width: 40px;
  height: 40px;
  fill: var(--color_base);
}
</style>
