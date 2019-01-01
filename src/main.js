// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueX from 'vuex'
import App from './App'
import VueMeta from 'vue-meta'
import router from './router'
import http from '@pub/http'
import connecter from '@pub/connecter'
import VueLazyload from 'vue-lazyload'

Vue.prototype.$http = http
Vue.prototype.$connecter = connecter
Vue.use(VueX, VueMeta)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/static/error.png',
  loading: '/static/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false

const store = new VueX.Store({
  state: {
    user: false,
    // 是否为移动端[小屏幕]
    mobile: false
  }
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
