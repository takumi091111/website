<template>
  <div class="tooltip" v-if="isActive">
    <div class="tooltip-angle">
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isActive: {
      type: Boolean,
      required: false,
      default: false
    },
    content: {
      type: String,
      required: false,
      default: ''
    }
  }
})
</script>

<style lang="postcss" scoped>
.tooltip {
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 80px;
  left: calc(50% - 145px);

  color: var(--color_hover);
  background-color: var(--background-color_hover);
  border-radius: 10px;

  width: 130px;
  height: 35px;

  @media (max-width: 480px) {
    left: calc(50% - 142px);
  }

  & .tooltip-angle {
    position: absolute;

    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent var(--background-color_hover) transparent;

    width: 5px;
    height: 10px;
    top: -10px;
    left: calc(50% - 10px);
    
    & p {
      position: relative;
      top: 16px;
      left: -56px;
    }
  }
}
</style>
