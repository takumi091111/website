<template lang="pug">
  router-link.entry-list-item(:to="{ name: 'entry', params: { id: this.entryId } }")
    h1 {{ title }}
    p.date {{ formatDate }}
    p.summary {{ summary }}
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    entryId: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    createdAt: {
      type: String,
      default: ''
    },
    summary: {
      type: String,
      default: ''
    }
  },
  computed: {
    formatDate: function () {
      return dayjs(this.createdAt).format('YYYY.MM.DD')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/mixin.styl'
@import '../stylus/colors.styl'

.entry-list-item
  &:hover
    background-color: COLORS.LIGHT_GRAY
  display flex
  flex-direction column
  color: COLORS.BLACK
  padding 20px
  margin 20px 0
  border: 3px solid COLORS.LIGHT_GRAY
  border-radius 10px
  outline none
  transition all 0.2s
  h1
    +sp()
      font-size 1.2em
    font-size 1.5em
    font-weight bold
    text-align justify
  .date
    color: COLORS.DEEP_GRAY
    padding 5px 0
  .summary
    padding 10px 0
</style>
