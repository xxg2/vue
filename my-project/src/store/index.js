import Vue form 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	strict: debug,
	plugin: debug? [createLogger()]:[]
});