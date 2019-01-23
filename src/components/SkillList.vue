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

.skill-list
  box-shadow 0 5px 10px 0 rgba(37, 38, 39, 0.25)
  border-radius 30px
  margin 30px 0
  +sp()
    margin 20px 10px
  .heading
    background-color #252627
    text-align center
    padding 15px
    border-radius 20px 20px 0 0
    h1
      color #F4F4E8
      font-weight bold
      font-size 1.8em
  .content
    background-color #F4F4E8
    display flex
    flex-direction row
    flex-wrap wrap
    justify-content center
    align-items center
    padding 20px 0
    border-radius 20px
</style>
