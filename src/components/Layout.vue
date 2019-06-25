<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style lang="postcss" scoped>
.layout {
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: auto minmax(min-content, 1000px) auto;
  grid-template-rows: 50px 1fr 50px;
  grid-gap: 10px;

  padding: 10px;

  @media (max-width: 480px) {
    grid-template-columns: 0 minmax(min-content, 640px) 0;
    grid-template-rows: auto 1fr 50px;

    padding: 0;
  }
}
</style>
