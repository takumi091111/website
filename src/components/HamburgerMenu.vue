<template lang="pug">
  .hamburger-menu
    transition(name="fade" mode="out-in")
      button.toggle-button(v-if="!isVisible" @click="isVisible = !isVisible")
        i.fas.fa-bars
    transition(name="fade" mode="out-in")
      nav(v-if="isVisible")
        button.close-button(v-if="isVisible" @click="isVisible = !isVisible")
          i.fas.fa-times
        ul
          li(v-for="link in links" @click="isVisible = !isVisible")
            router-link(:to="link.url") {{ link.title }}
</template>

<script>
export default {
  data () {
    return {
      isVisible: false,
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
.close-button
  position fixed
  z-index 2
  top 5px
  right 5px
  display flex
  width 50px
  height 50px
  margin 0
  align-items center
  justify-content center
  border none
  background none
  font-size 2em
  color #F4F4E8
nav
  position fixed
  z-index 2
  display flex
  justify-content center
  align-items center
  color #F4F4E8
  background-color rgba(37, 38, 39, 0.9)
  width 100%
  height 100%
  ul
    li
      font-size 2em
      font-weight bold
      padding 20px 0
      text-align center
</style>
