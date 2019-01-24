<template lang="pug">
  transition(name="fade")
    .tooltip(v-if="isActive")
      .tooltip-angle
      p {{ content }}
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/colors.styl'

.tooltip
  display flex
  justify-content center
  align-items center
  position absolute
  color: COLORS.WHITE
  background-color: COLORS.BLACK
  border-radius 10px
  width 140px
  height 35px
  top 75px
  left -30px
  .tooltip-angle
    position absolute
    top -10px
    left 50% - 10px
    width 5px
    height 10px
    border-style solid
    border-width 0 10px 10px 10px
    border-color: transparent transparent COLORS.BLACK transparent
</style>
