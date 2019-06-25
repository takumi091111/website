<template>
  <footer>
    <p>&copy; 2019 Asamac</p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style lang="postcss" scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  font-size: 1.2em;
  font-weight: bold;

  grid-column: 2 / 3;
  grid-row: 3 / 4;
}
</style>
