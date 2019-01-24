<template lang="pug">
  .profile
    section
      figure
        img(src="../images/avatar.png")
        h1 Asamac
      hr
      .social-icons
        Tooltip(
          :is-active="discordClick"
          content="/\\sαмας#9352"
        )
        a.fab.fa-discord(
          href="#"
          @mouseenter="discordClick = !discordClick"
          @mouseleave="discordClick = !discordClick"
        )
        a.fab.fa-twitter(href="https://twitter.com/takumi091111")
        a.fab.fa-github(href="https://github.com/takumi091111")
</template>

<script>
import Tooltip from './Tooltip'

export default {
  components: {
    Tooltip
  },
  data () {
    return {
      discordClick: false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/mixin.styl'
@import '../stylus/colors.styl'

.profile
  +sp()
    padding 30px
  display flex
  justify-content center
  align-items center
  section
    display flex
    justify-content center
    align-items center
    flex-direction column
    figure
      width 100%
      display flex
      align-items center
      flex-direction column
      img
        &:hover
          transform: rotate(24deg)
        width 50%
        transition transform 0.3s
      h1
        +sp()
          font-size 3em
        color: COLORS.BLACK
        font-size 3.5em
        font-weight 800
        padding 10px
    hr
      background-color: COLORS.LIGHT_GRAY
      width 100%
      height 2px
      border-top none
      border-radius 10px
      margin 5px
    .social-icons
      display flex
      justify-content center
      align-items center
      position relative
      padding 20px 0
      a
        +sp()
          font-size 2.3em
        &:hover
          transform: rotate(24deg)
        color: COLORS.BLACK
        font-size 2.5em
        margin 0 20px
        transition transform 0.3s
</style>
