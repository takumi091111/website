<template lang="pug">
  #app
    HamburgerMenu
    Header
    transition(name="fade" mode="out-in")
      router-view
    Footer
</template>

<script>
import HamburgerMenu from './components/HamburgerMenu'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    HamburgerMenu,
    Header,
    Footer
  }
}
</script>
