import Vue from 'vue'
import App from './App.vue'
import './assets/css/styles/index.css';
import router from "./router"
import  "./assets/css/styles/main.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
