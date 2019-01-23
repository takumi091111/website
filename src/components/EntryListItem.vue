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

.entry-list-item
  &:hover
    border 3px solid #E0DAC9
  display flex
  flex-direction column
  padding 20px
  margin 20px 0
  border 3px solid #F4F4E8
  box-shadow 0 1px 5px 0 rgba(106, 98, 98, 0.25)
  border-radius 10px
  outline none
  transition border 0.2s
  h1
    +sp()
      font-size 1.2em
    color #252627
    font-size 1.5em
    font-weight bold
    text-align justify
  .date
    color #6A6262
    padding 5px 0
  .summary
    padding 10px 0
</style>
