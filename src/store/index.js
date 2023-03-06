import { createStore } from 'vuex'
import headline from './modules/headline'
import source from './modules/source'

const store = createStore({
  modules: {
    headline,
    source
  }
})

export default store
