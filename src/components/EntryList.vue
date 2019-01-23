<template lang="pug">
  .entry-list
    ul
      transition-group(name="fade")
        li(v-for="item in items" :key="item.id")
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
.entry-list
  width 100%
</style>
