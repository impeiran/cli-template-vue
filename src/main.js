import Vue from 'vue'
import App from './App.vue'

import './styles/index.scss'
import router from './routes/router'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
