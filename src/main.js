import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

new Vue({
  vuetify,
  library,
  faUserSecret,
  FontAwesomeIcon,
  render: h => h(App)
}).$mount('#app');
