<template lang="pug">
  VPage#about
    .section
      .heading
        h1 SKILLS
      .content
        Skill(
          v-for="skill in skills"
          :icon="skill.icon"
          :caption="skill.caption"
          :summary="skill.summary"
        )
</template>

<script>
import VPage from '../components/VPage'
import Skill from '../components/Skill'

export default {
  components: {
    VPage,
    Skill
  },
  data () {
    return {
      skills: [
        {
          icon: "devicon-html5-plain",
          caption: "HTML, CSS",
          summary: "Sass"
        },
        {
          icon: "devicon-javascript-plain",
          caption: "JavaScript",
          summary: "Vue.js, Node.js"
        },
        {
          icon: "devicon-php-plain",
          caption: "PHP",
          summary: "Slim"
        },
        {
          icon: "devicon-ruby-plain",
          caption: "Ruby",
          summary: "Sinatra, Discord Bot"
        },
        {
          icon: "devicon-csharp-plain",
          caption: "C#",
          summary: "WinForms"
        },
        {
          icon: "devicon-java-plain",
          caption: "Java",
          summary: "Servlet, JSP"
        },
        {
          icon: "devicon-mysql-plain",
          caption: "Database",
          summary: "MySQL, Oracle, Access"
        },
        {
          icon: "devicon-git-plain",
          caption: "Git",
          summary: "バージョン管理"
        },
        {
          icon: "devicon-photoshop-plain",
          caption: "Photoshop",
          summary: "画像編集"
        }
      ]
    }
  }
}
</script>
