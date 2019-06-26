<template>
  <div class="skill-list">
    <SkillListItem
      v-for="(skill, index) in skills"
      :key="index"
      class="skill"
      :skill="skill"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Skill from '~/interfaces/Skill'
import SkillListItem from '~/components/SkillListItem.vue'

export default Vue.extend({
  components: {
    SkillListItem
  },
  props: {
    skills: {
      type: Array as PropType<Skill[]>,
      required: false,
      default: []
    }
  }
})
</script>

<style lang="postcss" scoped>
.skill-list {
  display: flex;
  justify-content: space-around;
  align-items: center;

  flex-direction: row;
  flex-wrap: wrap;
}
</style>
