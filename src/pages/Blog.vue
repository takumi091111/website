<template>
  <Page>
    <Spinner :is-loading="isLoading"></Spinner>
    <EntryList :entries="entries"></EntryList>
    <Pagination
      :current="currentIndex"
      @back-button-click="onBackButtonClick"
      @forward-button-click="onForwardButtonClick">
    </Pagination>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue'
import { Entries } from '~/interfaces/Entry'
import { fetchEntries } from '~/utils/api'
import Page from '~/components/Page.vue'
import Spinner from '~/components/Spinner.vue'
import EntryList from '~/components/EntryList.vue'
import Pagination from '~/components/Pagination.vue'

const LIMIT = 10

const defaultEntries: Entries = {
  sys: {
    type: 'Array'
  },
  total: 0,
  skip: 0,
  limit: 0,
  items: []
}

export default Vue.extend({
  data () {
    return {
      entries: defaultEntries as Entries,
      currentIndex: 1,
      isLoading: false
    }
  },
  computed: {
    skip (): number {
      return (this.currentIndex - 1) * LIMIT
    },
    max (): number {
      return this.skip + LIMIT
    }
  },
  methods: {
    onBackButtonClick (): void {
      if (this.currentIndex <= 1) return
      this.currentIndex--
      this.fetchData(LIMIT, this.skip)
    },
    onForwardButtonClick (): void {
      if (this.entries.total <= this.max) return
      this.currentIndex++
      this.fetchData(LIMIT, this.skip)
    },
    async fetchData (limit = 10, skip = 0) {
      this.isLoading = true
      this.entries = await fetchEntries(limit, skip)
      this.isLoading = false
    }
  },
  created () {
    this.fetchData(LIMIT)
  },
  components: {
    Page,
    Spinner,
    EntryList,
    Pagination
  }
})
</script>
