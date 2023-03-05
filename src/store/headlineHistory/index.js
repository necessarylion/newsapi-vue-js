import { ADD_HEADLINE_HISTORY, REMOVE_HEADLINE_HISTORY } from './mutations'

export default {
  state: () => ({
    list: []
  }),
  mutations: {
    [ADD_HEADLINE_HISTORY](state, data) {
      const recordExist = state.list.find((l) => l.title === data.title)
      if (!recordExist) {
        state.list.push(data)
      }
    },
    [REMOVE_HEADLINE_HISTORY](state, index) {
      state.list.splice(index, 0)
    }
  }
}
