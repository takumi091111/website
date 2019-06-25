<template>
  <section class="entry-view-header">
    <p class="date">{{ createdDate }}</p>
    <h1>{{ title }}</h1>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    }
  },
  computed: {
    createdDate (): string {
      const createdAt = new Date(this.createdAt)
      return [
        createdAt.getFullYear(),
        ('0' + (createdAt.getMonth() + 1)).slice(-2),
        ('0' + createdAt.getDate()).slice(-2)
      ].join('.')
    }
  }
})
</script>

<style lang="postcss" scoped>
.entry-view-header {
  & .date {
    color: var(--deep-gray);
    font-weight: bold;
  }

  & h1 {
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      bottom: 15px;
      border-bottom: 2px solid var(--border-color_base);
    }
    position: relative;
    font-size: 1.8em;
    font-weight: bold;

    padding: 20px 0 25px 0;

    @media (max-width: 480px) {
      font-size: 1.5em;
    }
  }
}
</style>
