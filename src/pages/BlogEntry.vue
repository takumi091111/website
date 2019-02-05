<template lang="pug">
  VPage#entry
    Spinner(:is-loading="isLoading")
    transition(name="fade")
      Entry(
        :title="entry.fields.title"
        :body="entry.fields.body"
        :created-at="entry.sys.createdAt"
        :updated-at="entry.sys.updatedAt"
      )
</template>

<script>
import VPage from '../components/VPage'
import Spinner from '../components/Spinner'
import Entry from '../components/Entry'
import Api from '../js/api'

export default {
  components: {
    VPage,
    Spinner,
    Entry
  },
  data () {
    return {
      entry: {
        sys: {
          createdAt: '',
          updatedAt: ''
        },
        fields: {
          title: '',
          body: ''
        }
      },
      isLoading: false
    }
  },
  created () {
    this.fetchEntry(this.$route.params.id)
  },
  methods: {
    fetchEntry: async function (id) {
      this.isLoading = true
      this.entry = await Api.fetchEntry(id)
      this.isLoading = false
      document.title = `Asamac - ${this.entry.fields.title}`
    }
  }
}
</script>
