import Vue from 'vue'
import App from '~/App.vue'
import router from '~/router'
import 'minireset.css'
import '~/assets/fonts.css'
import '~/styles/colors.css'
import '~/styles/animate.css'

const app = new Vue({
  router,
  render: h => h(App)
})

app.$mount('#app')
