<template>
  <div class="skill-list">
    <SkillListItem
      class="skill"
      v-for="(skill, index) in skills"
      :key="index"
      :skill="skill">
    </SkillListItem>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Skill from '~/interfaces/Skill'
import SkillListItem from '~/components/SkillListItem.vue'

export default Vue.extend({
  props: {
    skills: {
      type: Array as PropType<Skill[]>,
      required: false
    }
  },
  components: {
    SkillListItem
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
