import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//console.log(Vuex)

import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

let store = new Vuex.Store({
    actions,
    mutations,
    getters,
    state
})
export default store