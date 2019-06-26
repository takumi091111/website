<template>
  <div class="pagination">
    <div class="inner">
      <button @click="onBackClick">
        <ArrowBackIcon w="25px" h="25px" root-class="icon" />
      </button>
      <span class="current">{{ current }}</span>
      <button @click="onForwardClick">
        <ArrowForwardIcon w="25px" h="25px" root-class="icon" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArrowBackIcon from 'vue-ionicons/dist/ios-arrow-back.vue'
import ArrowForwardIcon from 'vue-ionicons/dist/ios-arrow-forward.vue'

export default Vue.extend({
  components: {
    ArrowBackIcon,
    ArrowForwardIcon
  },
  props: {
    current: {
      type: Number,
      required: true
    }
  },
  methods: {
    onBackClick() {
      this.$emit('back-button-click')
    },
    onForwardClick() {
      this.$emit('forward-button-click')
    }
  }
})
</script>

<style lang="postcss" scoped>
.pagination {
  display: flex;
  justify-content: center;

  padding: 20px 0;

  & .inner {
    width: 100%;
    max-width: 250px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    & button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    & .current {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 40px;
      height: 40px;

      border-radius: 100%;

      color: var(--color_hover);
      background-color: var(--background-color_hover);
    }
  }
}
.icon {
  &:hover {
    fill: var(--color_hover);
    background-color: var(--background-color_hover);
  }

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  fill: var(--color_base);

  border-radius: 100%;
}
</style>
