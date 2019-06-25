<template>
  <div class="entry-list">
    <transition-group
      name="fade"
      tag="ul"
      :duration="{ enter: 500, leave: 0 }"
      appear>
      <EntryListItem
        v-for="entry in entries.items"
        :key="entry.sys.id"
        :entry="entry">
      </EntryListItem>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Entries } from '~/interfaces/Entry'
import EntryListItem from '~/components/EntryListItem.vue'

export default Vue.extend({
  props: {
    entries: {
      type: Object as PropType<Entries>,
      required: true
    }
  },
  components: {
    EntryListItem
  }
})
</script>

<style lang="postcss" scoped>
.fade-enter, .fade-leave, .fade-leave-active, .fade-leave-to {
  opacity: 0
}

.fade-enter-active {
  transition: all 0.5s;
}

.fade-enter-to {
  opacity: 1;
}

.entry-list {
  display: flex;
  justify-content: center;

  & ul {
    width: 100%;
    max-width: 800px;
  }
}
</style>
