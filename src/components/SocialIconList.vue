<template>
  <div class="social-icon-list">
    <Tooltip :is-active="isDiscordIconHover" content="/\sαмας#9352" />
    <SocialIconListItem
      icon="discord"
      @mouseenter="toggleTooltip"
      @mouseleave="toggleTooltip"
    />
    <SocialIconListItem icon="twitter" url="https://twitter.com/takumi091111" />
    <SocialIconListItem icon="github" url="https://github.com/takumi091111" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tooltip from '~/components/Tooltip.vue'
import SocialIconListItem from '~/components/SocialIconListItem.vue'

export default Vue.extend({
  components: {
    Tooltip,
    SocialIconListItem
  },
  data() {
    return {
      isDiscordIconHover: false
    }
  },
  methods: {
    toggleTooltip(): void {
      this.isDiscordIconHover = !this.isDiscordIconHover
    }
  }
})
</script>

<style lang="postcss" scoped>
.social-icon-list {
  position: relative;

  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;
  flex-direction: row;

  padding: 25px;
}
</style>
