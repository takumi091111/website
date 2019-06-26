<template>
  <li class="entry-list-item">
    <router-link :to="routerLink">
      <h1>{{ entry.fields.title }}</h1>
      <p class="date">
        {{ entryDate }}
      </p>
      <p class="summary">
        {{ entry.fields.summary }}
      </p>
    </router-link>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Entry } from '~/interfaces/Entry'

interface Location {
  name: string
  params: {
    id: string
    entry: Entry
  }
}

export default Vue.extend({
  props: {
    entry: {
      type: Object as PropType<Entry>,
      required: true
    }
  },
  computed: {
    routerLink(): Location {
      return {
        name: 'entry',
        params: {
          id: this.entry.sys.id,
          entry: this.entry
        }
      }
    },
    entryDate(): string {
      const createdAt = new Date(this.entry.sys.createdAt)
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
.entry-list-item {
  &:hover {
    color: var(--color_hover);
    background-color: var(--background-color_hover);
    border: 2px solid var(--border-color_hover);

    & a {
      & .date {
        color: var(--color_hover);
      }
    }
  }

  width: 100%;
  margin: 20px 0;

  border: 2px solid var(--border-color_base);
  border-radius: 10px;

  transition: all 0.1s;

  & a {
    display: block;

    color: inherit;
    text-decoration: none;

    width: 100%;
    height: 100%;

    padding: 20px;

    & h1 {
      font-size: 1.5em;
      font-weight: bold;

      @media (max-width: 480px) {
        font-size: 1.2em;
      }
    }
    & .date {
      color: var(--deep-gray);
    }
    & .summary {
      padding: 10px 0;
    }
  }
}
</style>
