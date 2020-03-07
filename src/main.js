import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index.js'
import toast from 'components/common/toast/index.js'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
  preload:1.3,
  // error: 'assets/img/lazyload/',
  // loading: 'dist/loading.gif',
  attempt: 1
})
Vue.use(toast);

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
