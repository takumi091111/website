<template>
  <nav :class="menuClass">
    <ul>
      <HeaderListItem
        v-for="(link, index) in links"
        :key="index"
        :link="link"
        @click="onItemClick">
      </HeaderListItem>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Link from '~/interfaces/Link'
import HeaderListItem from '~/components/HeaderListItem.vue'

export default Vue.extend({
  props: {
    links: {
      type: Array as PropType<Array<Link>>,
      required: true
    },
    isExpanded: {
      type: Boolean || null,
      required: false,
      default: null
    }
  },
  methods: {
    onItemClick () {
      this.$emit('item-click')
    }
  },
  computed: {
    menuClass (): string {
      if (this.isExpanded === null) return ''
      return this.isExpanded ? 'slideIn' : 'slideOut'
    }
  },
  components: {
    HeaderListItem
  }
})
</script>

<style lang="postcss" scoped>
@keyframes slideIn {
  0% {
    min-height: 0px;
  }
  100% {
    min-height: 160px;
  }
}

@keyframes slideOut {
  0% {
    min-height: 160px;
  }
  100% {
    min-height: 0px;
  }
}

.slideIn {
  animation: slideIn 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  animation-fill-mode: forwards;
}

.slideOut {
  animation: slideOut 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  animation-fill-mode: forwards;
}

nav {
  width: 100%;
  height: 0;
  
  overflow: hidden;

  @media (min-width: 481px) {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 50px !important;
    height: 50px !important;
  }

  & ul {
    width: 100%;
    height: 100%;
    max-width: 640px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    @media (max-width: 480px) {
      height: 160px;
      flex-direction: column;
    }
  }
}
</style>
