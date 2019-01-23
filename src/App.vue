<template lang="pug">
  #app
    HamburgerMenu(
      :mobile-menu-visible="isMobileMenuVisible"
      @hamburger-button-click="toggleMobileMenu"
    )
    Header(
      :mobile-menu-visible="isMobileMenuVisible"
      @menu-item-click="isMobileMenuVisible = false"
    )
    transition(name="fade" mode="out-in" appear)
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
  },
  data () {
    return {
      isMobileMenuVisible: null
    }
  },
  methods: {
    toggleMobileMenu: function () {
      if (this.isMobileMenuVisible === null) {
        this.isMobileMenuVisible = true
      } else {
        this.isMobileMenuVisible = !this.isMobileMenuVisible
      }
    }
  }
}
</script>
