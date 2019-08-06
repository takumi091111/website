<template>
  <div class="entry-view">
    <article>
      <EntryViewHeader
        :title="entry.fields.title"
        :created-at="entry.sys.createdAt"
      />
      <EntryViewBody :body="entry.fields.body" />
      <EntryViewComment
        shortname="asamac"
        :identifier="entry.sys.id"
        :title="entry.fields.title"
        :url="url"
      />
    </article>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Entry } from '~/interfaces/Entry'
import EntryViewHeader from '~/components/EntryViewHeader.vue'
import EntryViewBody from '~/components/EntryViewBody.vue'
import EntryViewComment from '~/components/EntryViewComment.vue'

export default Vue.extend({
  components: {
    EntryViewHeader,
    EntryViewBody,
    EntryViewComment
  },
  props: {
    entry: {
      type: Object as PropType<Entry>,
      required: true
    }
  },
  computed: {
    url(): string {
      return `https://asamac.netlify.com/blog/${this.entry.sys.id}`
    }
  }
})
</script>

<style lang="postcss" scoped>
.entry-view {
  width: 90%;
  max-width: 800px;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 90vw;
  }
}
</style>
