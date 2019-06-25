<template>
  <div class="entry-view">
    <article>
      <EntryViewHeader
        :title="entry.fields.title"
        :created-at="entry.sys.createdAt">
      </EntryViewHeader>
      <EntryViewBody :body="entry.fields.body"></EntryViewBody>
    </article>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Entry } from '~/interfaces/Entry'
import EntryViewHeader from '~/components/EntryViewHeader.vue'
import EntryViewBody from '~/components/EntryViewBody.vue'

export default Vue.extend({
  props: {
    entry: {
      type: Object as PropType<Entry>,
      required: true
    }
  },
  components: {
    EntryViewHeader,
    EntryViewBody
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
