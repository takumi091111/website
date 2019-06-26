import Vue, { VNode } from 'vue'
import App from '~/App.vue'
import router from '~/router'
import 'minireset.css'
import '~/assets/fonts.css'
import '~/styles/colors.css'
import '~/styles/animate.css'

const app: Vue = new Vue({
  router,
  render: (h): VNode => h(App)
})

app.$mount('#app')
