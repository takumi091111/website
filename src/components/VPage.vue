<template lang="pug">
  .page
    slot
</template>

<style lang="stylus" scoped>
@import '../stylus/mixin.styl'

.page
  display flex
  justify-content center
  align-items center
  flex-direction column
  min-height: calc(100vh - 130px)
  padding 0 25%
  +desktop()
    padding 0 15%
  +tablet()
    padding 0 10px
</style>
