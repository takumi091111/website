<template>
  <Page
    centered
    vertical
    horizontal>
    <section>
      <div class="header">
        <h1>About me</h1>
      </div>
      <p>Webの開発を得意としています。</p>
      <p>2020年3月卒業見込み、未内定です。</p>
    </section>
    <section>
      <div class="header">
        <h1>Skills</h1>
      </div>
      <SkillList :skills="skills"></SkillList>
    </section>
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

<style lang="postcss" scoped>
section {
  width: 100%;
  & p {
    line-height: 2em;
    text-align: center;
  }
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 20px 0;
  margin-bottom: 20px;

  border-bottom: 2px solid var(--border-color_base);

  & h1 {
    font-size: 2em;
    font-weight: bold;
  }
}
</style>
