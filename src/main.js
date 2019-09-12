import Vue from 'vue'
import store from '@/store.js'
import router from '@/router.js'
import App from '@/App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store, // アプリケーションに登録
  render: h => h(App),
}).$mount('#app')
