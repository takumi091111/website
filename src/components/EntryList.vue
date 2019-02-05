<template lang="pug">
  .entry-list
    ul
      transition-group(name="fade")
        li(v-for="item in items" :key="item.id" @click="$emit('entry-click')")
          EntryListItem(
            :entry-id="item.id"
            :title="item.title"
            :summary="item.summary"
            :created-at="item.createdAt"
          )
</template>

<script>
import EntryListItem from '../components/EntryListItem'

export default {
  components: {
    EntryListItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/mixin.styl'

.entry-list
  width 100%
  margin 10px 0
  +sp()
    margin 0
</style>
