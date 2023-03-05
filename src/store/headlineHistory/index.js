import { ADD_HEADLINE_HISTORY } from './mutations'

export default {
  state: () => ({
    list: []
  }),
  mutations: {
    [ADD_HEADLINE_HISTORY]: (state, data) => {
      const recordExist = state.list.find((l) => l.title === data.title)
      if (!recordExist) {
        state.list.push(data)
      }
    }
  },
  actions: {
    [ADD_HEADLINE_HISTORY]: ({ commit }, payload) => {
      commit(ADD_HEADLINE_HISTORY, payload)
    }
  }
}
