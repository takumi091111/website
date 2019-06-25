<template>
  <Page
    centered
    vertical
    horizontal>
    <SkillList :skills="skills"></SkillList>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue'
import Page from '~/components/Page.vue'
import SkillList from '~/components/SkillList.vue'
import skills from '~/data/skills'

export default Vue.extend({
  data () {
    return {
      skills
    }
  },
  components: {
    Page,
    SkillList
  }
})
</script>
