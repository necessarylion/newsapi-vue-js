import NewsApiService from '@/services/NewsApiService'
import { GET_SOURCE } from '@/store/mutations'

export default {
  state: () => ({
    sources: [],
    error: null
  }),
  mutations: {
    [GET_SOURCE]: async (state, params) => {
      state.errorMessage = null
      const res = await NewsApiService.getSources(params)
      if (res.status === 'ok') {
        state.sources = res.sources
      } else {
        state.errorMessage = res.message
      }
    }
  },
  actions: {
    [GET_SOURCE]: ({ commit }, payload = {}) => {
      commit(GET_SOURCE, payload)
    }
  }
}
