<template lang="pug">
  VPage#home
    Profile
</template>

<script>
import VPage from '../components/VPage'
import Profile from '../components/Profile'

export default {
  components: {
    VPage,
    Profile
  }
}
</script>

<style lang="stylus" scoped>
#home
  display flex
  justify-content center
  align-items center
</style>
