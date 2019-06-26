<template>
  <div class="mobile-header">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style lang="postcss" scoped>
.mobile-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 50px;

  @media (min-width: 481px) {
    display: none;
  }
}
</style>
