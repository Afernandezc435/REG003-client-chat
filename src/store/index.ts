import { createStore, MutationPayload } from 'vuex'
// Create a new store instance.
export default  createStore({
  state () {
    return {
      token: '',
      meta:'',
    }
  },
  getters: {
    getToken (state:any) {
      return state.token
    },
  },
  mutations: {
  
    saveToken (state:any, payload:MutationPayload) {
      state.token = payload
    },
    saveMeta (state:any, payload:MutationPayload) {
    state.meta = payload
    },
  },
  actions: {
    login(context, test) {
      context.commit('saveToken', test.token)
      context.commit('saveMeta', test.meta)
    },


  },
})