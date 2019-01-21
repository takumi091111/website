<template lang="pug">
  article.entry(v-if="body")
    section.title
      p.date {{ formatDate(createdAt) }}
      h1 {{ title }}
    section.content(v-html="toHTML")
</template>

<script>
import dayjs from 'dayjs'
import hljs from 'highlightjs'
import 'highlightjs/styles/gruvbox-dark.css'
import marked from 'marked'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    createdAt: {
      type: String,
      default: ''
    },
    updatedAt: {
      type: String,
      default: ''
    }
  },
  computed: {
    toHTML: function () {
      marked.setOptions({
        highlight: function (code, lang) {
          return hljs.highlightAuto(code, [lang]).value
        }
      })
      return marked(this.body)
    }
  },
  methods: {
    formatDate: function (date) {
      return dayjs(date).format('YYYY.MM.DD')
    },
    equalDate: function (a, b) {
      const dateA = dayjs(a).startOf('day')
      const dateB = dayjs(b).startOf('day')
      return dateA.isSame(dateB)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/mixin.styl'

.entry
  display flex
  justify-content left
  align-items center
  flex-direction column
  .title
    width 100%
    padding 30px 0
    color #252627
    h1
      +sp()
        font-size 1.5em
      &::after
        content ''
        position absolute
        bottom 0
        left 0
        right 0
        height 3px
        background-color #E0DAC9
        border-radius 10px
      position relative
      font-size 2em
      font-weight bold
      padding 15px 0
    .date
      color #6A6262
      font-weight bold
  .content
    width 100%
    line-height 1.7em
    color #252627
    >>> h1, >>> h2, >>> h3
      padding 20px 0
    >>> h1 + * {
      padding-top 0
    }
    >>> h1
      +sp()
        font-size 1.5em
      &::after
        content ''
        position absolute
        bottom 0
        left 0
        right 0
        height 3px
        background-color #E0DAC9
        border-radius 10px
        margin-bottom 20px
      position relative
      font-size 2em
      font-weight bold
      padding-bottom 40px
    >>> h1:nth-child(n+3)
      padding-top 40px
    >>> h2
      +sp()
        font-size 1.2em
      font-size 1.5em
      font-weight bold
    >>> p
      +sp()
        font-size 1em
      font-size 1.1em
    >>> a
      text-decoration underline
    >>> blockquote
      background-color #E0DAC9
      // box-shadow 0 1px 5px 0 rgba(106, 98, 98, 0.25)
      padding 20px 25px
      border-radius 10px
    >>> pre
      background-color #282828
      padding 10px 15px
      border-radius 10px
      overflow-x auto
      margin 20px 0
    >>> code
      font-family 'Fira Code', 'M PLUS Rounded 1c', sans-serif
      font-variant-ligatures normal
      background-color #282828
      color #ebdbb2
    >>> :not(pre) > code
      padding 3px 6px
      margin 0 5px
      border-radius 6px
    >>> img
      max-width 100%
      margin 20px 0
    >>> hr
      background-color #E0DAC9
      width 100%
      height 3px
      border none
      border-radius 10px
      margin 20px 0
</style>
