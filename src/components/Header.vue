<template lang="pug">
  header(:class="mobileMenuClass")
    nav
      ul
        li(v-for="link in links" @click="$emit('menu-item-click')")
          router-link(:to="link.url") {{ link.title }}
</template>

<script>
export default {
  props: {
    MobileMenuVisible: {
      type: Boolean,
      default: null
    }
  },
  data () {
    return {
      links: [
        { title: 'HOME', url: '/' },
        { title: 'BLOG', url: '/blog' },
        { title: 'ABOUT', url: '/about' }
      ]
    }
  },
  computed: {
    mobileMenuClass: function () {
      if (this.MobileMenuVisible === null) return ''
      if (this.MobileMenuVisible) return 'slideIn'
      if (!this.MobileMenuVisible) return 'slideOut'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/mixin.styl'

@keyframes slideIn
  0%
    min-height 60px
  100%
    min-height 240px
@keyframes slideOut
  0%
    min-height 240px
  100%
    min-height 60px
.slideIn
  animation slideIn 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)
  animation-fill-mode forwards
.slideOut
  animation slideOut 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)
  animation-fill-mode forwards

header
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  width 100%
  height 50px
  +sp()
    background-color #F4F4E8
    position sticky
    top 0
    min-height 60px
    max-height 240px
    box-shadow 0 1px 3px 0 rgba(106, 98, 98, 0.25)
    overflow hidden
  nav
    +sp()
      position absolute
      top 50px
      display flex
      ul
        flex-direction column
    ul
      display flex
      justify-content center
      li
        &:hover
          color #F4F4E8
          background-color #252627
        color #252627
        background-color #F4F4E8
        width 130px
        height 40px
        margin 10px 50px
        border-radius 15px
        line-height 40px
        list-style none
        transition all 0.1s
        +tablet()
          margin 10px 30px
        a
          outline none
          display inline-block
          width 100%
          height 100%
          font-size 1.4em
          font-weight 800
          letter-spacing 1px
          text-align center
          vertical-align top
          +tablet()
            font-size 1.3em
  .toggle-button
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
