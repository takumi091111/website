import Vue from 'vue'
import App from './App'
import router from './js/router'
import 'destyle.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './js/fonts'

const app = new Vue({
  router,
  render: h => h(App)
})

app.$mount('#app')
