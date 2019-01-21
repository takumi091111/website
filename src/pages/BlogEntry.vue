<template lang="pug">
  VPage#entry
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
import Entry from '../components/Entry'
import Api from '../js/api'

export default {
  components: {
    VPage,
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
      }
    }
  },
  created () {
    this.fetchEntry(this.$route.params.id)
  },
  methods: {
    fetchEntry: async function (id) {
      this.entry = await Api.fetchEntry(id)
    }
  }
}
</script>
