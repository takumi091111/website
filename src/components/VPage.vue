<template lang="pug">
  .page
    slot
</template>

<style lang="stylus" scoped>
.page
  min-height: calc(100vh - 50px)
  padding 20px 15%
  @media screen and (max-width 600px)
    padding 0 10px
</style>
