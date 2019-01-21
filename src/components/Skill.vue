<template lang="pug">
  .skill
    i(:class="icon")
    h1 {{ caption }}
    h2 {{ summary }}
</template>

<script>
import 'devicon/devicon.min.css'

export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },
    summary: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/mixin.styl'

.skill
  +tablet()
    width calc(100% / 2)
  display flex
  justify-content center
  align-items center
  flex-direction column
  width calc(100% / 3)
  padding 20px
  text-align center
  i
    +sp()
      font-size 4em
    color #252627
    font-size 5em
  h1
    +sp()
      font-size 1.2em
    color #252627
    font-size 1.5em
    font-weight bold
    padding 10px 0 0 0
  h2
    +sp()
      font-size 1em
    color #6A6262
    font-size 1.2em
    padding 5px 0 0 0
</style>
