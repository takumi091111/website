<template>
  <section class="entry-view-body" v-html="toHTML"></section>
</template>

<script lang="ts">
import Vue from 'vue'
import marked from 'marked'
import { hljs } from '~/utils/highlight'
import 'highlight.js/styles/gruvbox-dark.css'

marked.setOptions({
  highlight (code: string, lang: string): string {
    return hljs.highlightAuto(code, [lang]).value
  }
})

export default Vue.extend({
  props: {
    body: {
      type: String,
      required: true
    }
  },
  computed: {
    toHTML (): string {
      return marked(this.body)
    }
  }
})
</script>

<style lang="postcss" scoped>
.entry-view-body {
  & >>> h1 {
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
  }

  & >>> h2 {
    font-size: 1.4em;
    font-weight: bold;

    padding: 10px 0;
  }

  & >>> p, & >>> li, & >>> ol {
    line-height: 1.8em;
  }

  & >>> a {
    color: var(--color_base);
  }

  & >>> ul {
    list-style: square;
    padding: 10px 0 10px 1.5em;
  }

  & >>> ol {
    list-style: none;
  }

  & >>> blockquote {
    background-color: var(--light-gray);
    padding: 10px;
    margin: 15px 0;
    border-radius: 10px;
    overflow-x: auto;
  }

  & >>> pre {
    background-color: var(--gruvbox-black);
    padding: 10px;
    margin: 15px 0;
    border-radius: 10px;
    overflow-x: auto;
  }

  & >>> code {
    color: var(--gruvbox-white);
    background-color: var(--gruvbox-black);
    font-family: 'Fira Mono', Rounded-Mplus-1c, monospace;
  }

  & >>> :not(pre) > code {
    padding: 3px 6px;
    margin: 0 5px;
    border-radius: 7px;
  }

  & >>> img {
    padding: 15px 0;
  }

  & >>> hr {
    background-color: var(--border-color_base);
    width: 100%;
    height: 2px;
    border: none;
    margin: 15px 0;
  }
}
</style>
