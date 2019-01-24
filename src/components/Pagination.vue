<template lang="pug">
  transition(name="fade" mode="out-in")
    .pagination
      span.fas.fa-chevron-left.icon(@click="prev")
      span(
        v-for="page in pages"
        :class="{ current: isCurrent(page) }"
        @click="select(page)"
      ) {{ page }}
      span.fas.fa-chevron-right.icon(@click="next")
</template>

<script>
export default {
  props: {
    itemCount: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    },
    current: {
      type: Number,
      default: 1
    }
  },
  computed: {
    pages: function () {
      let length = Math.ceil(this.itemCount / this.limit)
      if (length <= 0) length = 1

      const array = new Array(length)
      for (let i = 0; i < length; i++) {
        array[i] = i + 1
      }
      return array
    }
  },
  methods: {
    isCurrent: function (page) {
      return this.current === page
    },
    next: function () {
      if (this.current < this.pages.length) {
        this.$emit('pagination-change', this.current + 1)
      }
    },
    prev: function () {
      if (this.current > 1) {
        this.$emit('pagination-change', this.current - 1)
      }
    },
    select: function (page) {
      if (this.current !== page) {
        this.$emit('pagination-change', page)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/colors.styl'

.pagination
  display flex
  justify-content center
  align-items center
  height 40px
  line-height 40px
  span
    &:hover
      border: 3px solid COLORS.LIGHT_GRAY
    color: COLORS.BLACK
    border: 3px solid COLORS.WHITE
    cursor pointer
    padding 0 15px
    margin 0 5px
    border-radius 100%
    transition border 0.2s
  .current
    color: COLORS.WHITE
    background-color: COLORS.BLACK
  .icon
    padding 12px 15px
</style>
