import Vuex from 'vuex'

import counter from './modules/counter'

const store = new Vuex.Store({
  modules: {
    counter
  }
})

export default store