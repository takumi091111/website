<template>
  <Page centered horizontal>
    <Spinner :is-loading="isLoading" />
    <EntryView v-if="entryData" :entry="entryData" />
  </Page>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Entry } from '~/interfaces/Entry'
import { fetchEntry } from '~/utils/api'
import Page from '~/components/Page.vue'
import Spinner from '~/components/Spinner.vue'
import EntryView from '~/components/EntryView.vue'

export default Vue.extend({
  components: {
    Page,
    Spinner,
    EntryView
  },
  props: {
    entry: {
      type: Object as PropType<Entry | null>,
      required: false,
      default: null
    }
  },
  data() {
    return {
      entryData: this.entry as Entry,
      isLoading: false
    }
  },
  computed: {
    title(): string {
      return `Asamac - ${this.entryData.fields.title}`
    }
  },
  async created() {
    if (this.entry === null) {
      await this.fetchData(this.$route.params.id)
    }
    document.title = this.title
  },
  methods: {
    async fetchData(id: string) {
      this.isLoading = true
      this.entryData = await fetchEntry(id)
      this.isLoading = false
    }
  }
})
</script>
