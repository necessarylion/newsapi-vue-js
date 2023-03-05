import NewsApiService from '@/services/NewsApiService'
import {
  GET_HEADLINE,
  SEARCH_HEADLINE,
  FILTER_HEADLINE_BY_SOURCE,
  SET_SELECTED_HEADLINE,
  UPDATE_HEADLINE,
  SET_SELECTED_HEADLINE_WITH_DATA,
  SET_HEADLINE_LOADING
} from './mutations'

export default {
  state: () => ({
    loading: false,
    headlines: [],
    selectedHeadlineIndex: null,
    selectedHeadline: null
  }),
  mutations: {
    [GET_HEADLINE]: async (state) => {
      state.loading = true
      const res = await NewsApiService.getHeadlines()
      if (res.status === 'ok') {
        state.headlines = res.articles
      }
      state.loading = false
    },
    [FILTER_HEADLINE_BY_SOURCE]: async (state, sources) => {
      state.loading = true
      const res = await NewsApiService.getHeadlinesBySources(sources)
      if (res.status === 'ok') {
        state.headlines = res.articles
      }
      state.loading = false
    },
    [SEARCH_HEADLINE]: async (state, keyword) => {
      state.loading = true
      if (keyword) {
        const res = await NewsApiService.searchHeadline(keyword)
        if (res.status === 'ok') {
          state.headlines = res.articles
        }
      }
      state.loading = false
    },
    [SET_SELECTED_HEADLINE]: (state, index) => {
      const headline = state.headlines[index]
      state.selectedHeadlineIndex = index
      state.selectedHeadline = headline
      window.localStorage.setItem('selectedHeadline', JSON.stringify(headline))
    },
    [SET_SELECTED_HEADLINE_WITH_DATA]: (state, data) => {
      state.selectedHeadline = data
    },
    [UPDATE_HEADLINE]: (state, title) => {
      state.headlines[state.selectedHeadlineIndex] = {
        ...state.headlines[state.selectedHeadlineIndex],
        title
      }
    },
    [SET_HEADLINE_LOADING]: (state, data) => {
      state.loading = data
    }
  },
  actions: {
    [GET_HEADLINE]: ({ commit }) => {
      commit(GET_HEADLINE)
    },
    [FILTER_HEADLINE_BY_SOURCE]: ({ commit }, payload) => {
      commit(FILTER_HEADLINE_BY_SOURCE, payload)
    },
    [SEARCH_HEADLINE]: ({ commit }, keyword) => {
      if (keyword) {
        commit(SEARCH_HEADLINE, keyword)
      } else {
        commit(GET_HEADLINE)
      }
    },
    [SET_SELECTED_HEADLINE]: ({ commit }, payload) => {
      commit(SET_SELECTED_HEADLINE, payload)
    },
    [SET_SELECTED_HEADLINE_WITH_DATA]: ({ commit }, payload) => {
      commit(SET_SELECTED_HEADLINE_WITH_DATA, payload)
    },
    [UPDATE_HEADLINE]: ({ commit }, payload) => {
      commit(UPDATE_HEADLINE, payload)
    },
    [SET_HEADLINE_LOADING]: ({ commit }, payload) => {
      commit(SET_HEADLINE_LOADING, payload)
    }
  }
}
