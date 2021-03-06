import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './vue/App.vue'
import router from './router.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  template:'<App/>',
  components: {App}
})
