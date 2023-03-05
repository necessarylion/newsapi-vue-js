import { createStore } from 'vuex'
import headlineHistory from './headlineHistory'

const store = createStore({
  modules: {
    headlineHistory
  }
})

export default store
