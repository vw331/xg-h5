import Vue from 'vue'
import App from './App.vue'
import router from './router'
import asiox from 'axios'
import './style/tailwind.css'
import './style/index.less'

Vue.prototype.$https = asiox.create({
  baseURL: process.env.VUE_APP_BASEAPI || '',
  timeout: 1000 * 12
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
