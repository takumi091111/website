<template>
  <div class="skill-list-item">
    <div class="inner">
      <div class="left">
        <i :class="iconClass"></i>
      </div>
      <div class="right">
        <h1>{{ skill.caption }}</h1>
        <p>{{ skill.summary }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Skill from '~/interfaces/Skill'
import 'devicon/devicon.min.css'

export default Vue.extend({
  props: {
    skill: {
      type: Object as PropType<Skill>,
      required: true
    }
  },
  computed: {
    iconClass (): string {
      return `devicon-${this.skill.icon}-plain`
    }
  }
})
</script>

<style lang="postcss" scoped>
.skill-list-item {
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 400px;
  height: 120px;

  margin: 10px;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    margin: 10px 0;
  }
  
  & .inner {
    &:hover {
      color: var(--color_hover);
      background-color: var(--background-color_hover);
      border-color: var(--border-color_hover);
    }

    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 120px;

    border: 2px solid;
    border-color: var(--border-color_base);
    border-radius: 10px;
    
    padding: 20px 0;

    transition: all 0.1s;

    & .left {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100px;
      height: 100%;

      & i {
        font-size: 3em;
      }
    }

    & .right {
      display: flex;
      justify-content: center;
      flex-direction: column;

      width: 200px;
      height: 100%;
      
      & h1 {
        font-weight: bold;
        font-size: 1.3em;
      }

      @media (max-width: 480px) {
        width: 150px;
      }
    }
  }
}
</style>
