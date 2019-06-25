<template>
  <Page
    centered
    vertical
    horizontal>
    <Profile></Profile>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue'
import Page from '~/components/Page.vue'
import Profile from '~/components/Profile.vue'

export default Vue.extend({
  components: {
    Page,
    Profile
  }  
})
</script>
