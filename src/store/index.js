import { createStore } from 'vuex'
import headlineHistory from './headlineHistory'
import headline from './headline'
import source from './source'

const store = createStore({
  modules: {
    headlineHistory,
    headline,
    source
  }
})

export default store
