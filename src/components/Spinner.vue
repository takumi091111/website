<template>
  <transition>
    <div v-if="isLoading" class="spinner">
      <img src="/assets/spinner.svg" width="100" height="100" alt="Spinner" />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import '~/assets/spinner.svg'

export default Vue.extend({
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>

<style lang="postcss" scoped>
.spinner {
  position: fixed;

  background-color: rgba(37, 38, 39, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 2;
}
</style>
