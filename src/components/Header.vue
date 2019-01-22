<template lang="pug">
  header
    nav
      ul
        li(v-for="link in links")
          router-link(:to="link.url") {{ link.title }}
</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: 'HOME', url: '/' },
        { title: 'BLOG', url: '/blog' },
        { title: 'ABOUT', url: '/about' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/mixin.styl'

header
  +sp()
    position sticky
    display flex
    background-color #F4F4E8
    justify-content flex-start
    align-items center
    top 0
    height 60px
    box-shadow 0 1px 3px 0 rgba(106, 98, 98, 0.25)
  width 100%
  height 50px
  nav
    +sp()
      display none
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
          outline: none
          display inline-block
          width 100%
          height 100%
          font-size 1.5em
          font-weight 800
          letter-spacing 1px
          text-align center
          vertical-align top
          +tablet()
            font-size 1.3em
</style>
