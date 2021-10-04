/*import { reactive } from 'vue'
import * as  Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
const getDefaultState = () => {
  return {
    token: '',
    user: {},
  }
}
export  const store =new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoggedIn: state => {
      return state.token
    },
  }})
export  const globalState = reactive({
  count: 0,
})*/
    