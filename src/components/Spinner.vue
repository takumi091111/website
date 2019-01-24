<template lang="pug">
  transition(name="fade")
    .spinner(v-if="isLoading")
      img(src="../images/spinner.svg" width="100" height="100")
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/colors.styl'

.spinner
  display flex
  justify-content center
  align-items center
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background-color: rgba(COLORS.BLACK, 0.3)
  z-index 1
</style>
