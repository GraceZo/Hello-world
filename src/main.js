import Vue from 'vue' // ES6导入方式
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App) // vue支持的新写法
}).$mount('#app')
