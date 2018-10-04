// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(Vuex)
Vue.use(VueResource)
const store = new Vuex.Store({})

Vue.config.productionTip = false
Vue.http.interceptors.push((request, next) => {
	next((response)=> {
		return response
	})
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  http: {
	root: '/api',
	headers: {}
  },
  router,
  store,
  components: { App },
  template: '<App/>'
})
