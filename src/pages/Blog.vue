<template lang="pug">
  VPage#blog
    EntryList(:items="entries")
    Pagination(
      v-if="0 < entries.length"
      :item-count="itemCount"
      :limit="limit"
      :current="pageNumber"
      @pagination-change="onPaginationChanged"
    )
</template>

<script>
import VPage from '../components/VPage'
import Pagination from '../components/Pagination'
import EntryList from '../components/EntryList'
import Api from '../js/api.js'

export default {
  components: {
    VPage,
    EntryList,
    Pagination
  },
  data () {
    return {
      entries: [],
      itemCount: 0,
      pageNumber: 1,
      limit: 10
    }
  },
  created () {
    this.fetchEntries(this.limit)
  },
  methods: {
    fetchEntries: async function (limit = 10, skip = 0) {
      this.entries = []
      const entries = await Api.fetchEntries(limit, skip)
      this.itemCount = entries.total
      this.entries = entries.items.map(item => {
        return {
          id: item.sys.id,
          title: item.fields.title,
          summary: item.fields.summary,
          createdAt: item.sys.createdAt
        }
      })
    },
    onPaginationChanged: function (value) {
      this.pageNumber = value
      this.fetchEntries(this.limit, (this.pageNumber - 1) * this.limit)
    }
  }
}
</script>
