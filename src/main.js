import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueRouter from 'vue-router'
import 'buefy/dist/buefy.css'


Vue.use(Buefy)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    message: 'Hello Vue!'
  }
}).$mount('#app')

