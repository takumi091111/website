<template lang="pug">
  section.skill-list
    .heading
      h1 SKILLS
    .content
      Skill(
        v-for="skill in skills"
        :icon="skill.icon"
        :caption="skill.caption"
        :summary="skill.summary"
      )
</template>

<script>
import Skill from './Skill'

export default {
  components: {
    Skill
  },
  props: {
    skills: {
      type: Array,
      default: () => [
        {
          icon: '',
          caption: '',
          summary: ''
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/mixin.styl'
@import '../stylus/colors.styl'

.skill-list
  border-radius 30px
  margin 30px 0
  +sp()
    margin 20px 10px
  .heading
    background-color: COLORS.BLACK
    text-align center
    padding 15px
    border-radius 20px 20px 0 0
    h1
      color: COLORS.WHITE
      font-weight bold
      font-size 1.8em
  .content
    background-color: COLORS.WHITE
    display flex
    flex-direction row
    flex-wrap wrap
    justify-content center
    align-items center
    padding 20px 0
    border-left: 2px solid COLORS.LIGHT_GRAY
    border-right: 2px solid COLORS.LIGHT_GRAY
    border-bottom: 2px solid COLORS.LIGHT_GRAY
    border-radius 0 0 20px 20px
</style>
