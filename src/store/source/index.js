import NewsApiService from '@/services/NewsApiService'
import { GET_SOURCE } from './mutations'

export default {
  state: () => ({
    sources: []
  }),
  mutations: {
    [GET_SOURCE]: async (state) => {
      const res = await NewsApiService.getSources()
      if (res.status === 'ok') {
        state.sources = res.sources
      }
    }
  },
  actions: {
    [GET_SOURCE]: ({ commit }) => {
      commit(GET_SOURCE)
    }
  }
}
