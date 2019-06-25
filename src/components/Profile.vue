<template>
  <div class="profile">
    <Avatar></Avatar>
    <SocialIconList></SocialIconList>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Avatar from '~/components/Avatar.vue'
import SocialIconList from '~/components/SocialIconList.vue'

export default Vue.extend({
  components: {
    Avatar,
    SocialIconList
  }
})
</script>

<style lang="postcss" scoped>
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
