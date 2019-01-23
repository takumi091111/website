<template lang="pug">
  button.hamburger-button(@click="hamburgerButtonClicked")
    i.fas(:class="MobileMenuVisible ? 'fa-times' : 'fa-bars'")
</template>

<script>
export default {
  props: {
    MobileMenuVisible: {
      type: Boolean,
      default: null
    }
  },
  methods: {
    hamburgerButtonClicked: function () {
      this.$emit('hamburger-button-click')
      this.icon = (this.icon === 'fa-bars' ? 'fa-times' : 'fa-bars')
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '../stylus/mixin.styl'

.hamburger-button
  &:active
    outline none
  outline none
  +sp()
    display flex
  position fixed
  z-index 2
  top 5px
  right 5px
  display none
  width 50px
  height 50px
  margin 0
  align-items center
  justify-content center
  border none
  background none
  font-size 2em
  color #252627
</style>
