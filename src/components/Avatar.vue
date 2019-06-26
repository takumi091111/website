<template>
  <figure>
    <img src="~/assets/avatar.png" alt="Avatar" />
    <h1>Asamac</h1>
  </figure>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style lang="postcss" scoped>
figure {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 10px;
  border-bottom: 2px solid var(--border-color_base);

  & img {
    &:hover {
      transform: rotate(24deg);
    }
    width: 50%;
    transition: transform 0.3s;
  }

  & h1 {
    font-size: 3.5em;
    font-weight: 800;
    @media (max-width: 480px) {
      font-size: 2.5em;
    }
  }
}
</style>
