<template lang="pug">
  .profile
    section
      figure
        img(src="../../../../../Pictures/icons/avatar2019_tp.png")
        h1 Asamac
      hr
      .social-icons
        a.fab.fa-discord(href="#")
        a.fab.fa-twitter(href="https://twitter.com/takumi091111")
        a.fab.fa-github(href="https://github.com/takumi091111")
</template>

<style lang="stylus" scoped>
.profile
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
        color #252627
        font-size 3.5em
        font-weight 800
        padding 10px
    hr
      background-color #E0DAC9
      width 100%
      height 3px
      border-top none
      border-radius 10px
      margin 5px
    .social-icons
      display flex
      justify-content center
      align-items center
      padding 20px 0
      a
        &:hover
          transform: rotate(24deg)
        color #252627
        font-size 2.5em
        margin 0 20px
        transition transform 0.3s
</style>
