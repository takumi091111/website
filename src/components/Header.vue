<template>
  <header>
    <MobileHeader>
      <MenuButton
        :status="menuButtonStatus"
        @menu-button-click="onMenuButtonClick"
      />
    </MobileHeader>
    <HeaderList
      :links="links"
      :is-expanded="isExpanded"
      @item-click="onHeaderListClick"
    />
  </header>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Link from '~/interfaces/Link'
import MobileHeader from '~/components/MobileHeader.vue'
import MenuButton from '~/components/MenuButton.vue'
import HeaderList from '~/components/HeaderList.vue'

export default Vue.extend({
  components: {
    MobileHeader,
    MenuButton,
    HeaderList
  },
  props: {
    links: {
      type: Array as PropType<Link[]>,
      required: true,
      default: []
    }
  },
  data() {
    return {
      isExpanded: null as boolean | null
    }
  },
  computed: {
    menuButtonStatus(): boolean {
      return this.isExpanded === null ? false : this.isExpanded
    }
  },
  methods: {
    onMenuButtonClick() {
      this.isExpanded = this.isExpanded === null ? true : !this.isExpanded
    },
    onHeaderListClick() {
      this.isExpanded = this.isExpanded === null ? null : false
    }
  }
})
</script>

<style lang="postcss" scoped>
header {
  display: flex;
  justify-content: center;
  flex-direction: column;

  background-color: var(--background-color_base);
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  @media (max-width: 480px) {
    position: fixed;
    width: 100%;
    top: 0;
    justify-content: flex-end;

    grid-column: 1 / 4;
    grid-row: 1 / 2;
    border-bottom: 2px solid var(--border-color_base);

    z-index: 1;
  }
}
</style>
